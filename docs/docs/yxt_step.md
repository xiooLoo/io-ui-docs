# yxt-step


### 基础用法
::: demo  $attrs接收除props之外的其他参数
```html
<template>
   <yxt-step/>
</template>
<script>
    export default {
        data() {
            return {
                list:['步骤一','步骤二']
            }
        },
    }
</script>
<style scoped>
    .className{
        color:#409eff;
    }
</style>
```
:::

### steps Attributes

| 参数      | 说明    | 类型     |可选值   |  默认值 
|----------|-------- |---------- |--------|---------
| space   | 每个 step 的间距，不填写将自适应间距。支持百分比。  | number / string  
|direction |显示方向|string|vertical/horizontal|horizontal
