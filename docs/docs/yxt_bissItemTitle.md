# yxt-biss-item-title 

### 基础用法

::: demo 

```html
<template>
    <yxt-biss-item-title :detail-item="detailItem">
        <div name="title">自定义title内容</div>
        <div name="titleRight">自定义titleRight内容</div>
        <div name="content">自定义content内容</div>
    </yxt-biss-item-title>
</template>
<script>
    export default {
        data() {
            return {
                detailItem: {
                    title: '标题',
                    type: '',
                    showFold: true,
                    datas: [],
                    isFold: false
                }
            }
        },

    }
</script>
```

:::

### Attributes

| 参数      | 说明    | 类型      | 可选值 |默认值
|----------|-------- |---------- |--------|-----
| detail-item   | 配置参数  | Object | -- | {}
