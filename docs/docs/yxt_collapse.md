# Collapse  折叠面板
<script>
  export default{
    data(){
      return {
      confige1:{
        accordion:false,
        activeNames:['1'],
        data:[
          {
            title: '<i class="header-icon to-icon-info"></i>&nbsp;&nbsp;测试1',
            slot: 'slot1'
          },
          {
            title: '测试2',
            slot: 'slot2'
          },
          {
            title: '测试3',
            slot: 'slot3'
          },
        ]
      },
      confige2:{
        accordion:true,
        activeNames:'1',
        data:[
          {
            title: '<i class="header-icon to-icon-info"></i>&nbsp;&nbsp;测试1',
            slot: 'slot1'
          },
          {
            title: '测试2',
            slot: 'slot2'
          },
          {
            title: '测试3',
            slot: 'slot3'
          },
        ]
      }
    }
    }
  }
</script>
### 基础用法
<div>
  可同时展开多个面板，面板之间不影响
  <yxt-collapse :confige="confige1">
      <div slot="slot1">
         测试1  面板内容
      </div>
      <div slot="slot2">
         测试2  面板内容
      </div>
      <div slot="slot3">
         测试3  面板内容
      </div>
    </yxt-collapse>
</div>

::: demo
```html
<template>
  <yxt-collapse :confige="confige1">
      <div slot="slot1">
         测试1  面板内容
      </div>
      <div slot="slot2">
         测试2  面板内容
      </div>
      <div slot="slot3">
         测试3  面板内容
      </div>
    </yxt-collapse>
</template>
<script>
  export default{
    data(){
      return {
      confige1:{
        accordion:false,
        activeNames:['1'],
        data:[
          {
            title: '<i class="header-icon to-icon-info"></i>&nbsp;&nbsp;测试1',
            slot: 'slot1'
          },
          {
            title: '测试2',
            slot: 'slot2'
          },
          {
            title: '测试3',
            slot: 'slot3'
          },
        ]
      },
    }
    }
  }
</script>

```
:::
### 手风琴效果
每次只能展开一个面板
<div>
<yxt-collapse :confige="confige2">
    <div slot="slot1">
        测试1  面板内容
    </div>
    <div slot="slot2">
        测试2  面板内容
    </div>
    <div slot="slot3">
        测试3  面板内容
    </div>
  </yxt-collapse>
</div>

::: demo
```html
<template>
  <yxt-collapse :confige="confige2">
      <div slot="slot1">
         测试1  面板内容
      </div>
      <div slot="slot2">
         测试2  面板内容
      </div>
      <div slot="slot3">
         测试3  面板内容
      </div>
    </yxt-collapse>
</template>
<script>
  export default{
    data(){
      return {
      confige2:{
        accordion:true,
        data:[
          {
            title: '<i class="header-icon to-icon-info"></i>&nbsp;&nbsp;测试1',
            slot: 'slot1'
          },
          {
            title: '测试2',
            slot: 'slot2'
          },
          {
            title: '测试3',
            slot: 'slot3'
          },
        ]
      }
    }
    }
  }
</script>
```
:::

### 参数介绍
| 参数      | 说明          | 类型      | 可选值     | 默认值  |
| --------- | ------------- | -------- | --------- | ------ |
| confige | 组件参数配置项 | Object | activeNames/accordion/data | -- |
| confige--->activeNames | 双向绑定当前激活的折叠面板 | Array/string(手风琴模式) | -- | ['1']/'1' |
| confige--->accordion | 是否开启手风琴模式 | Boolean | true/false | true |
| confige--->data | 折叠面板配置项 | Array | -- | -- |

### confige参数配置
```html
confige:{
  activeNames: ['1'],
  accordion: true,
  data: [
    {
      title: '<i class="header-icon to-icon-info"></i>&nbsp;&nbsp;一致性',
      slot: 'slot1'
    },
    {
      title: '一致性2',
      slot: 'slot2'
    },
    {
      title: '一致性3',
      slot: 'slot3',
      disabled: true
    },
    {
      title: '一致性4',
      slot: 'slot4'
    },
    {
      title: '一致性5',
      slot: 'slot5'
    }
  ]
};
```


