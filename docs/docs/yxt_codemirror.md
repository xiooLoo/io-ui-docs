## yxt-codemirror SQL编辑器

**注意：**
`vue-codemirror` 版本必须为4.0.6，否则会出现编译报错（最新版6.0.2包结构发生了变化）

```js
"vue-codemirror": "^4.0.6",
```

> 参考：
[CodeMirror入门教程(https://cloud.tencent.com/developer/article/1760809)](https://cloud.tencent.com/developer/article/1760809)

### 基础用法
:::demo SQL常规属性的用法
```html
<template>
  <yxt-codemirror class="sql-codemirror" ref="cmEditor" :value="sql" @onchangecode="changeCode"></yxt-codemirror>
</template>
<script>
  export default {
    data() {
      return {
        sql: ''
      }
    },
    methods: {
      changeCode(str) {
        this.sql = str
        console.log('SQL编辑器内容改变：', str)
      }
    }
  }
</script>
<style lang="scss" scoped>
.sql-codemirror {
  height: 300px;
}
</style>
```
:::

### 属性（attrs）
| 参数      | 说明    
|----------|-------- 
| value   | 实时获取SQL编辑器内容   

### 事件（events）
| 事件名      | 说明    
|----------|-------- 
| onchangecode   | 当输入内容发生改变时触发   
