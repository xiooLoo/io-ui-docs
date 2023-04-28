# yxtTransfer 穿梭框 

----

::: demo

```html
<template>
    <yxt-transfer v-model="list" ref="yxt-transfer" :source-data="sourceData" filterable :left-default-checked="['deptLevel', 'enterpriseName']" :props="{
          label: 'label',
          key: 'key',
          
          disabled: 'disabled',
        }" @change="handleChange"></yxt-transfer>
</template>
<script>
    export default {
        data() {
            return {
                sourceData: [{
                        key: 'deptName',
                        label: '部门名称',
                        disabled: true
                    },
                    {
                        key: 'deptLevel',
                        label: '部门级别'
                    },
                    {
                        key: 'enterpriseName',
                        label: '归属单位'
                    }
                ],
                list: ['deptName'],
            }
        },
        methods: {
            handleChange(keys, targetArr, direction, moveKeys) {
                // keys：        当前值
                // targetArr：   target数组
                // direction：   数据移动的方向（'left' / 'right'）
                // moveKeys：    发生移动的数据 key 数组
            }
        }
    }
</script>
```

:::

### 必传参数说明（Must Attributes）

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| v-model | 选项中绑定值 | Array | -- | -- |
| source-data | Transfer 的数据源  | array[{ key, label, disabled }] | -- |[]|
| props | 数据源的字段别名 | object{key, label, disabled} | -- | -- |

### 扩展参数说明（Oth Attributes）

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| filterable | 是否可搜索 | boolean | -- | false |
| filter-placeholder | 搜索框占位符 | string | -- | 请输入搜索内容 |
| filter-method | 自定义搜索方法 | function | -- | --|
| target-order | 右侧列表元素的排序策略：若为 original，则保持与数据源相同的顺序；若为 push，则新加入的元素排在最后；若为 unshift，则新加入的元素排在最前 | string | original / push / unshift | original |
| titles | 自定义列表标题 | array | -- | ['列表 1', '列表 2'] |
| format | 列表顶部勾选状态文案 | object{noChecked, hasChecked} | -- | { noChecked: '${checked}/${total}', hasChecked: '${checked}/${total}' } |
| left-default-checked | 初始状态下左侧列表的已勾选项的 key 数组 | array | -- | [] |
| right-default-checked | 初始状态下右侧列表的已勾选项的 key 数组 | array | -- | [] |

### Events

| 事件名称      | 说明          | 回调参数      
|---------- |-------------- |---------- |
| change | 右侧列表元素变化时触发 | 当前值、target数组、数据移动的方向（'left' / 'right'）、发生移动的数据 key 数组 | 
| left-check-change | 左侧列表元素被用户选中 / 取消选中时触发  | 当前被选中的元素的 key 数组、选中状态发生变化的元素的 key 数组 |
| right-check-change | 右侧列表元素被用户选中 / 取消选中时触发 | 当前被选中的元素的 key 数组、选中状态发生变化的元素的 key 数组 | 

### Methods

| 事件名称      | 说明          | 回调参数      
|---------- |-------------- |---------- |
| clearQuery | 清空某个面板的搜索关键词 | 'left' / 'right'，指定需要清空的面板 | 

### Slots

| 名称      | 说明              
|---------- |-------------- |---------- |
| left-footer |左侧列表底部的内容 | 
| right-footer |右侧列表底部的内容 | 
