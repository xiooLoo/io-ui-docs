# yxt-pagination 分页

<script>
export default {
  data() {
    return {
      listQuery: {
        pageNo: 1,
        pageSize: 10
      },
      page: 1,
      size: 10,
      page1: 1,
      size1: 10,
      total: 50
    }
  },
  methods: {
    refresh(obj) {
      // console.log(obj)  // { page: '当前页码', limit: '当前分页条数'}, 目的用于缓存需求或者解决删除最后一页数据后，页面跳转问题
      // console.log('重新调取列表，比如this.getData()'); 
    },
  }
}
</script>

### 普通分页器

::: demo 注：`page`绑定当前页码， `limit`绑定每页展示条数
```html
<template>
  <yxt-pagination :total="total" :page.sync="page" :limit.sync="size" @pagination="refresh"/>
</template>
<script>
export default {
  data() {
    return {
      page: 1,
      size: 10,
      total: 50
    }
  },
  methods: {
    refresh(obj) {
      // console.log('重新调取列表接口，比如this.getData()');
      // 该方法内置保留了一个obj, 具体为{ page: '当前页码', limit: '当前分页条数'}, 可根据实际需求使用
    },
  }
}
</script>
```
:::

### 超过一定长度后自动折叠分页器展示

::: demo 注：直接绑定当前入参key值即可，例如前后端统一协定的字段`pageNo`,`pageSize`,示例中的`listQuery`为入参对象，`refresh`为重新调取列表接口的出口，可以自定义，全局统一可以保持代码的易读性和维护性
```html
<template>
  <yxt-pagination :total="100" :page.sync="listQuery.pageNo" :limit.sync="listQuery.pageSize" @pagination="refresh"/>
</template>
<script>
export default {
  data() {
    return {
      listQuery:{
        pageNo: 1,
        pageSize: 10
      }
    }
  },
  methods: {
    refresh() {
      console.log('重新调取列表，比如this.getData()，传参对象为this.listQuery的扩展对象');
    },
  }
}
</script>
```
:::

### 迷你分页器

::: demo 迷你分页器，适用于小场景,添加`small`,`background`,`layout`三个属性，如下代码所示
```html
<template>
  <yxt-pagination
    small
    :background="false"
    layout="prev, pager, next"
    :total="50"
    :page.sync="page1"
    :limit.sync="size1"
    ></yxt-pagination>
</template>
<script>
export default {
  data() {
    return {
      page1: 1,
      size1: 10,
    }
  },
}
</script>
```
:::


### Attributes
| 参数               | 说明                                                     | 类型              | 可选值      | 默认值 |
|--------------------|----------------------------------------------------------|-------------------|-------------|--------|
| page | 当前页数，支持 .sync 修饰符 | number | — | 1 |
| limit | 每页显示条目个数，支持 .sync 修饰符 | number | — | 10 |
| total | 总条目数 | number | — | — |
| small | 是否使用小型分页样式 | boolean | — | false |
| background | 是否为分页按钮添加背景色 | boolean | — | true |
| page-count | 总页数，total 和 page-count 设置任意一个就可以达到显示页码的功能；如果要支持 page-sizes 的更改，则需要使用 total 属性 | Number | — | — |
| pager-count | 页码按钮的数量，当总页数超过该值时会折叠 | number | 大于等于 5 且小于等于 21 的奇数 | 7 |
| layout | 组件布局，子组件名用逗号分隔| String | `sizes`, `prev`, `pager`, `next`, `jumper`, `->`, `total`, `slot` | 'total, sizes, prev, pager, next, jumper'  |
| page-sizes | 每页显示个数选择器的选项设置 | number[] | — |  [10, 20, 30, 50] |
| popper-class | 每页显示个数选择器的下拉框类名 | string | — | — |
| prev-text | 替代图标显示的上一页文字 | string | — | — |
| next-text | 替代图标显示的下一页文字 | string | — | — |
| disabled | 是否禁用 | boolean | — | false |
| hide-on-single-page | 只有一页时是否隐藏 | boolean | — | - |

### Events
| 事件名称 | 说明 | 回调参数 |
|---------|---------------------------------------------------------------|----------------------|
| pagination | page/limit/点击上一页按钮/点击下一页按钮 改变时会触发 | 当前页和每页条数 |

### Slot
| name | 说明 |
|------|--------|
| — | 自定义内容，需要在 `layout` 中列出 `slot` |