# yxt-time-line  时间线

----
### 基础用法

<script>
export default {
  data() {
    return {
      reverse:true,
      timeLines: [{
        content: '支持使用图标',
        timestamp: '2022-02-15 14:00'
      }, {
        content: '支持自定义颜色',
        timestamp: '2022-02-13 14:00'
      }, {
        content: '支持自定义颜色',
        timestamp: '2022-02-11 14:00'
      }, {
        content: '默认样式的节点',
        timestamp: '2022-01-10 14:00'
      }],
      customTimeLines: [{
        timestamp: '2018-04-12 20:46',
        title: '我是插槽区',
        content: '支持使用图标',
        icon: 'to-icon-arrow-right',
        placement: 'top',
        defaultContent:'111',
        class:"custom"
      },
      {
        timestamp: '2018-04-03 20:46',
        title: '我是插槽区',
        content: '支持使用图标',
        color: '#53C419',
        placement: 'top',
        defaultContent:'222',
        class:"custom",
         icon: 'to-icon-more'
      },
      {
        timestamp: '2018-04-03 20:46',
        title: '我是插槽区',
        content: '支持自定义尺寸',
        placement: 'top',
        defaultContent:'333',
        class:"custom",
         icon: 'to-icon-share'
      }],
      customStyleLines: [{
        timestamp: '2018-04-12 20:46',
        title: '自定义节点内容',
        content: '支持使用图标',
        placement: 'top',
        explain:"插槽区内容",
        class:"custom",
        icon: 'to-icon-share'
      },
      {
        timestamp: '2018-04-03 20:46',
        title: '我是插槽区',
        content: '支持使用图标',
        color: '#53C419',
        icon: 'to-icon-more',
        placement: 'top',
        class:"custom"
      },
      {
        timestamp: '2018-04-03 20:46',
        title: '我是插槽区',
        content: '支持自定义尺寸',
        placement: 'top',
        class:"custom",
        icon: 'to-icon-arrow-right',
      }]

    }
  }
}
</script>
#### 默认右边显示,时间戳是其区分于其他控件的重要特征，可拆分成多个按照时间戳正序或倒序排列

:::demo  
```html
<div class="demo-block">
    <div style="margin-bottom: 30px;"  >
      排序：
      <to-radio-group v-model="reverse">
        <to-radio :label="true">倒序</to-radio>
        <to-radio :label="false">正序</to-radio>
      </to-radio-group>
    </div>
    <yxt-time-line :reverse="reverse"  :time-lines="timeLines" ></yxt-time-line>
</div>
<script>
 export default {
  data() {
    return {
      reverse:true,
      timeLines: [{
        content: '支持使用图标',
        timestamp: '2022-02-15 14:00'
      }, {
        content: '支持自定义颜色',
        timestamp: '2022-02-13 14:00'
      }, {
        content: '支持自定义颜色',
        timestamp: '2022-02-11 14:00'
      }, {
        content: '默认样式的节点',
        timestamp: '2022-01-10 14:00'
      }],
    }
  }
} 
</script>
```
:::

### 自定义内容
#### 时间在左侧显示，右侧自定义内容区（插槽区）
:::demo  通过 Scoped slot 可以获取到data,即每个item的数据，用法参考 demo。
```html
<div class="block">
  <yxt-time-line :is-show-left="true" :time-lines="customTimeLines" :has-default-content="true">
    <template  #line="scope"> 
      <to-card>
        <h4>{{scope.line.title}}</h4>
        <p>{{scope.line.content}}</p>
      </to-card>
    </template>
  </yxt-time-line>
</div>
<script>
 export default {
  data() {
    return {
      reverse:true,
      customTimeLines: [{
        timestamp: '2018-04-12 20:46',
        title: '我是插槽区',
        content: '支持使用图标',
        icon: 'to-icon-arrow-right',
        placement: 'top',
        defaultContent:'111',
        class:"custom"
      },
      {
        timestamp: '2018-04-03 20:46',
        title: '我是插槽区',
        content: '支持使用图标',
        color: '#53C419',
        placement: 'top',
        defaultContent:'222',
        class:"custom",
         icon: 'to-icon-more'
      },
      {
        timestamp: '2018-04-03 20:46',
        title: '我是插槽区',
        content: '支持自定义尺寸',
        placement: 'top',
        defaultContent:'333',
        class:"custom",
         icon: 'to-icon-share'
      }],
    }
  }
} 
</script>

```
:::

### 自定义节点样式
#### 可根据实际场景⾃定义节点尺⼨、颜⾊，或直接使⽤图标,可通过自定义class直接修改节点尺寸
:::demo  通过dot插槽可以自定义单个节点内容，节点isDot属性设置为true,用法参考 demo。
```html
<div class="block">
  <yxt-time-line :time-lines="customStyleLines">
    <template #dot="scope" >
      <div>
        <p>{{scope.dot.title}}</p>
        <i>{{scope.dot.explain}}</i>   
      </div>
    </template>
  </yxt-time-line>
</div>
<script>
  export default {
  data() {
    return {
      customStyleLines: [{
        timestamp: '2018-04-12 20:46',
        title: '自定义节点内容',
        content: '支持使用图标',
        placement: 'top',
        explain:"插槽区内容",
        class:"custom",
        icon: 'to-icon-share'
      },
      {
        timestamp: '2018-04-03 20:46',
        title: '我是插槽区',
        content: '支持使用图标',
        color: '#53C419',
        icon: 'to-icon-more',
        placement: 'top',
        class:"custom"
      },
      {
        timestamp: '2018-04-03 20:46',
        title: '我是插槽区',
        content: '支持自定义尺寸',
        placement: 'top',
        class:"custom",
        icon: 'to-icon-arrow-right',
      }]
    }
  }
} 
</script>
<style lang="scss">
.yxt-timeline-custom {
  .to-timeline-item__wrapper {
    margin-left: 15px;
  }
  .to-timeline-item__node--normal {
    width: 32px;
    height: 32px;
    left: -10px;
  }
}
</style>
```
:::

### 参数说明

#### yxt-time-line Attributes

| 参数  | 说明          | 类型      | 可选值                           | 默认值  |
|------ |-------------- |---------- |--------------------------------  |-------- |
| reverse | 指定节点排序方向，默认为正序 | boolean | -- | false |
| is-show-left | 是否在左侧显示时间戳 | boolean | -- | false | 
| time-lines   | 显示的数据 | array | -- | -- |

#### timeLines-item Attributes

| 参数  | 说明          | 类型      | 可选值                           | 默认值  |
|------ |-------------- |---------- |--------------------------------  |-------- |
| timestamp | 时间戳 | string | - | — |
| hideTimestamp | 是否隐藏时间戳 | boolean | —	 | false | 
| placement   | 时间戳位置 | string | top/bottom | bottom |
| type   | 节点类型 | string | top/bottom | primary / success / warning / danger / info | - |
| color  | 节点颜色 | string |hsl / hsv / hex / rgb |
| size |	节点尺寸 | string | normal / large | normal |
| icon   | 节点图标 | string | — | - |
| isDot   | 节点是否自定义 | boolean | — | false |
| class | 节点自定义类名 | string | — | — |

#### Slot
| name   | 说明          |
|------- |-------------- |
| dot  | 自定义单个节点 |
| — | 自定义节点显示内容 |
