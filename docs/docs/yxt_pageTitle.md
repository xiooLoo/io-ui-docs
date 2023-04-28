# yxt-page-title 


### 基础用法
::: demo  通过slot可以添加内容,slot可选值为left/right
```html
<template>
   <yxt-page-title :show-back="showBack" :title="title">
      <div slot="left">我是page组件左侧的插槽内容</div>
    </yxt-page-title>
</template>
<script>
    export default {
        data() {
            return {
                showleftline:true,
                showBack:true,
                title:'页面标题',
                defaultGo:'yxt_card'
            }
        },
    }
</script>
```
:::

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|----------|-------- |---------- |-------------  |-------- |
|title|页面标题字段|string|  |  标题
| showleftline   | 是否展示左侧竖线   | Boolean  |   true / false | true
| showBack   | 是否展示返回按钮   | Boolean  |   true / false | true
| title   | 标题字段   | string  |   | 标题 |
| backTitle   | 返回字段   | string  |   | 返回 
|defaultGo|控制返回路径|string


### Events

| 事件名称      | 说明 
|----------|-------- |---------- |-------------  |-------- |


### Slots

| 参数      | 说明    
|----------|-------- 
| left   | 自定义节点内容    
| right   | 自定义节点内容    