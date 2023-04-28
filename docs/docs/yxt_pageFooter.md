# yxt-page-footer 


### 基础用法
::: demo  
```html
<template>
   <yxt-page-footer :footBtns="footBtns">
      <div slot="settingTabs">自定义节点内容</div>
    </yxt-page-footer>
</template>
<script>
    export default {
        data() {
            return {
                footBtns:[
                        { label: '取消', value: 'cancel', type: 'normal', code: true, classType: 'normal', disabled: false },
                        { label: '保存', value: 'save', type: 'primary', code: true, loading: false, disabled: false }
                    ]
            }
        },
    }
</script>
```
:::

### Attributes

| 参数      | 说明    | 类型      
|----------|-------- |---------- 
| footBtns   | 接收一个按钮集合  | Array  

### Events

| 事件名称      | 说明 
|----------|--------- 
btnActions      | 保存事件/取消事件

### Slots

| 参数      | 说明    
|----------|-------- 
| settingTabs   | 自定义节点内容   