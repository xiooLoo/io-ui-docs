# yxt-bread-crumb 面包屑

----
::: demo

```html
<template>
    <yxt-bread-crumb :separator="separator" :is-meta="false" :breadcrumbs="breadcrumbsList" />
</template>
<script>
    export default {
        data() {
            return {
                separator: '→',
                breadcrumbsList: [{
                        path: '/',
                        name: 'home',
                        meta: {
                            title: '主页 Home',
                            hidden: false
                        }
                    },
                    {
                        path: '/sub',
                        name: 'sub',
                        meta: {
                            title: '子页面 Sub1',
                            hidden: false
                        }
                    },
                    {
                        path: '/sub2',
                        name: 'sub2',
                        meta: {
                            title: '子页面 Sub2',
                            hidden: false
                        }
                    }
                ]
            }
        }
    }
</script>
```

:::

### 参数介绍

| 参数      | 说明          | 类型      | 可选值     | 默认值  | 回调参数 |
| --------- | ------------- | -------- | --------- | ------ | --------- |
| isMeta | 是否自动匹配路由 | Boolean | [ `见详细参数说明` ] | -- | -- |
| separator | 分隔符 | String | -- | '/' | -- |
| separatorClass | 图标分隔符 class | String | class名 | -- | -- |
| breadcrumbs | 面包屑数组 | Array | -- | -- | -- |

### 详细参数说明

---
**isMeta：是否自动匹配**

```js
isMeat === true, 自动解析、 匹配浏览器路由地址， 动态生成面包屑
isMeat === false, 由外部传入面包屑数组， 数组格式参考 breadcrumbs 数组
```
