# yxt-cascader 级联选择器 

----

### 基础用法

<script>
let id = 0; 
export default{
  data() {

    return {
       value: [],
       customValue:[],
       modelValue:[],
       options:[{
           value:'zhinan',
           label: '指南',
           children:[{
             value: 'shejiyuanze',
             label: '设计原则',
             children:[{
                value: 'yizhi',
                label: '一致'
             }]
           }]
         },{
           value: 'daohang',
           label: '导航',
         }
       ],
       props: {
          lazy: true,
          lazyLoad (node, resolve) {
            const { level } = node;
            setTimeout(() => {
              const nodes = Array.from({ length: level + 1 })
                .map(item => ({
                  value: ++id,
                  label: `节点${id}` ,
                  leaf: level >= 2
                }));
              // 通过调用resolve将子节点数据返回，通知组件数据加载完成
              resolve(nodes);
            }, 200);
          }
        }
    }

  }, 
  methods:{

    handleChange(val){
      console.log(val)
    }

  }
}
</script>

::: demo

```html
<template>
    <yxt-cascader v-model="value" placeholder="请选择" :options="options" @change="handleChange">
    </yxt-cascader>
</template>
<script>
    export default {
        data() {
            return {
                value: [],
                options: [{
                    value: 'zhinan',
                    label: '指南',
                    children: [{
                        value: 'shejiyuanze',
                        label: '设计原则',
                        children: [{
                            value: 'yizhi',
                            label: '一致'
                        }]
                    }]
                }, {
                    value: 'daohang',
                    label: '导航',
                }]
            }
        },
        methods: {
            handleChange(val) {
                console.log(val)
            }
        }
    }
</script>
```

:::

### 动态加载

::: demo

```html
<template>
    <yxt-cascader :props="props"></yxt-cascader>
</template>
<script>
    let id = 0;
    export default {
        data() {
            return {
                props: {
                    lazy: true,
                    lazyLoad(node, resolve) {
                        const {
                            level
                        } = node;
                        setTimeout(() => {
                            const nodes = Array.from({
                                    length: level + 1
                                })
                                .map(item => ({
                                    value: ++id,
                                    label: `节点${id}`,
                                    leaf: level >= 2
                                }));
                            // 通过调用resolve将子节点数据返回，通知组件数据加载完成
                            resolve(nodes);
                        }, 200);
                    }
                }
            }
        }
    }
</script>
```

:::

### 自定义节点内容

::: demo

```html
<template>
    <yxt-cascader v-model="customValue" :options="options">
        <template slot-scope="{ node, data }">
            <span>{{ data.label }}</span>
            <span v-if="!node.isLeaf"> ({{ data.children.length }}) </span>
        </template>
    </yxt-cascader>
</template>
<script>
    export default {
        data() {
            return {
                customValue: [],
                options: [{
                    value: 'zhinan',
                    label: '指南',
                    children: [{
                        value: 'shejiyuanze',
                        label: '设计原则',
                        children: [{
                            value: 'yizhi',
                            label: '一致'
                        }]
                    }]
                }, {
                    value: 'daohang',
                    label: '导航',
                }]
            }
        },
        methods: {
            handleChange(val) {
                console.log(val)
            }
        }
    }
</script>
```

:::

### 参数说明

### Cascader Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| v-model | 选项中绑定值 | Array | -- | -- |
| options | 可选项数据源，键名可通过 Props 属性配置 | array | -- |--|
| props | 配置选项，具体见下表 | object | -- | -- |
|size | 尺寸 | string | medium / small / mini | --
| placeholder | 输入框占位文本 | string | -- | -- |
| disabled | 是否禁用 | boolean | -- | false|
| clearable | 是否支持清空选项 | boolean | true 或 false | true |
| filterable | 是否可搜索选项 | boolean | true 或 false | true |
| show-all-levels | table是否显示操作列？？？ | boolean | true 或 false | true |
|collapse-tags | 多选模式下是否折叠Tag | boolean | true/false | false
| separator | 选项分隔符 | string | -- | 斜杠'/'
| filter-method| 自定义搜索逻辑，第一个参数是节点node，第二个参数是搜索关键词keyword，通过返回布尔值表示是否命中 | function(node, keyword) | -- | --
| debounce | 搜索关键词输入的去抖延迟，毫秒 | number | -- | 300
| before-filter | 筛选之前的钩子，参数为输入的值，若返回 false 或者返回 Promise 且被 reject，则停止筛选 | function(value) | -- |--
| popper-class | 自定义浮层类名 | string | -- |--

### Cascader Events

| 事件名称      | 说明          | 回调参数      
|---------- |-------------- |---------- |
| change | 当选中节点变化时触发 | 选中节点的值 | 
| expand-change | 当展开节点发生变化时触发  | 各父级选项值组成的数组 |
|blur | 当失去焦点时触发 | (event: Event)
| focus | 当获得焦点时触发 |(event: Event)
| visible-change | 下拉框出现/隐藏时触发 | 出现则为 true，隐藏则为 false
| remove-tag | 在多选模式下，移除Tag时触发 | 移除的Tag对应的节点的值 | 

### Cascader Methods

| 事件名称      | 说明          | 回调参数      
|---------- |-------------- |---------- |
| getCheckedNodes | 获取选中的节点 | 选中的节点数组 | 

### Cascader Slots

| 名称      | 说明              
|---------- |-------------- |---------- |
| - |自定义备选项的节点内容，参数为 { node, data }，分别为当前节点的 Node 对象和数据 | 

### CascaderPanel  Attributes

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
|value / v-model | 选项中绑定值 | -- | -- | -- |
|options | 可选项数据源，键名可通过 Props 属性配置 | object | -- |--
|props   |配置选项，具体见下表 | object | --| --

### CascaderPanel Events

| 事件名称      | 说明          | 回调参数      
|---------- |-------------- |---------- |
| change | 当选中节点变化时触发 | 选中节点的值 |
|expand-change | 当展开节点发生变化时触发 | 各父级选项值组成的数组

### CascaderPanel Methods

| 事件名称      | 说明          | 回调参数      
|---------- |-------------- |---------- |
| getCheckedNodes | 获取选中的节点数组 | (leafOnly) 是否只是叶子节点，默认值为 false |
|clearCheckedNodes | 清空选中的节点 | --

### Props

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| expandTrigger | 次级菜单的展开方式 | string | click / hover | 'click'|
| multiple | 是否多选  | boolean | true 或 false |false|
| checkStrictly | 是否严格的遵守父子节点不互相关联 | boolean | true 或 false| false |
|emitPath | 在选中节点改变时，是否返回由该节点所在的各级菜单的值所组成的数组，若设置 false，则只返回该节点的值 | boolean | true/false | true
|lazy | 是否动态加载子节点，需与 lazyLoad 方法结合使用 | boolean | true/false | true
|lazyLoad | 加载动态数据的方法，仅在 lazy 为 true 时有效 | unction(node, resolve)，node为当前点击的节点，resolve为数据加载完成的回调(必须调用) | --| --
| leaf | 指定选项的叶子节点的标志位为选项对象的某个属性值 | string | -- | 'leaf'
| value | 指定选项的值为选项对象的某个属性值 | string | -- | 'value' |
| label | 指定选项标签为选项对象的某个属性值 | string | -- | 'label'|
| children | 指定选项的子选项为选项对象的某个属性值 | string | -- | 'children' |
| disabled | 指定选项的禁用为选项对象的某个属性值 | string | -- | 'disabled' |
