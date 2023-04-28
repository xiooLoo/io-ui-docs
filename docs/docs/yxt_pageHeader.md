# yxt-page-header 


### 基础用法
::: demo 
```html
<template>
   <yxt-page-header :message="message" :has-Back="hasBack" :type="backType">
      <div slot="settingTabs">自定义节点内容</div>
    </yxt-page-header>
</template>
<script>
    export default {
        data() {
            return {
                showleftline:true,
                hasBack:false,
                message:'页面标题',
                backType:'text'
            }
        },
    }
</script>
```
:::

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|----------|-------- |---------- |-------------  |-------- |
| hasBack   | 是否展示返回按钮   | Boolean  |   true / false | true
| message   | 标题字段   | string  |   | 标题 
| backText   | 返回字段   | string  |   | 返回 
| backType   | 按钮类型   | string  |   | text 
| isHandle   | 许也特殊处理返回   | Boolean  |   true / false | false


### Events

| 事件名称      | 说明 
|----------|--------- 
goback      |处理事件返回

### Slots

| 参数      | 说明    
|----------|-------- 
| settingTabs   | 自定义节点内容    
