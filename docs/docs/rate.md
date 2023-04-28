# Rate 组件

<script>
export default{
  data(){
    return {
      confige1:{
        evaluate: {
          name: 'evaluate',
          data: [
            { value: 5 }
          ]
        },
      },

      confige2:{
        // 满意度
        satisfaction: {
          title: '满意度',
          type: ['不满意', '一般', '满意'],
        },
        evaluate: {
            name: 'evaluate',
            require: true,
            limit: [10, 20],
            data: [
              {name: '服务及时效', value: 5 },
              {name: '线路熟悉度', value: 5},
              {name: '车内整洁度', value: 5},
              {name: '服务态度', value: 5 },
              {name: '安全驾驶', value: 5 }
            ]
        },
      },

      confige3:{
        // 近期满意度
        recent: {
          name: ' ',
          show: true,
          title: '近一个月的总体满意度',
          value: 75,
          sectionText: ['不满意', '满意'],
          color: ['#FDD76D', '#FA9413']
        },
        // 满意度
        satisfaction: {
          title: '满意度',
          type: ['不满意', '一般', '满意'],
        },
        // 评价
        evaluate: {
            name: 'evaluate',
            require: true,
            limit: [10, 20],
            data: [
              {name: '服务及时效', value: 5 },
              {name: '线路熟悉度', value: 5},
              {name: '车内整洁度', value: 5},
              {name: '服务态度', value: 5 },
              {name: '安全驾驶', value: 5 }
            ]
        },
      },

      confige4:{
        // 满意度
        satisfaction: {
          title: '满意度',
          type: ['不满意', '一般', '满意'],
        },
        // 近期满意度
        recent: {
          name: '',
          show: false,
          title: '近一个月的总体满意度',
          value: 75,
          sectionText: ['不满意', '满意'],
          color: ['#FDD76D', '#FA9413']
        },
        // 评价
        evaluate: {
            name: 'evaluate',
            require: true,
            limit: [10, 20],
            data: [
              {name: '服务及时效', value: 5 },
              {name: '线路熟悉度', value: 5},
              {name: '车内整洁度', value: 5},
              {name: '服务态度', value: 5 },
              {name: '安全驾驶', value: 5 }
            ]
        },
        // 评价意见
        opinion: {
          require: false,
          isEdit: true,
          title: '评价意见',
          value: '',
          placeholder: '请输入评价意见',
          maxlength: '200',
          disabled: false,
          showWordLimit: true,
          rows: 5
        }
      },
    }
  }
}
</script>

### 基础评分组件


::: demo
```html
<template>
   <yxt-rate
    :isVertical="false"
    :confige="confige1"
  />
</template>
<script>
  data(){
     return{
       confige1:{
        evaluate: {
            name: 'evaluate',
            data: [
              { value: 5 }
            ]
          },
       }
     }
  }
</script>
```

:::

### 综合评价

::: demo

```html
<template>
   <yxt-rate
    :isVertical="false"
    :confige="confige2"
  />
</template>
<script>
  data(){
     return{
       confige2:{
        evaluate: {
            name: 'evaluate',
            data: [
              { value: 5 }
            ]
          },
        }
     }
  }
</script>

```

:::

### 近期满意度

:::demo

```html

<template>
   <yxt-rate
    :isVertical="false"
    :confige="confige3"
  />
</template>
<script>
  data(){
     return{
       confige3:{
        // 近期满意度
        recent: {
          name: ' ',
          show: true,
          title: '近一个月的总体满意度',
          value: 75,
          sectionText: ['不满意', '满意'],
          color: ['#FDD76D', '#FA9413']
        },
        // 满意度
        satisfaction: {
          title: '满意度',
          type: ['不满意', '一般', '满意'],
        },
        // 评价
        evaluate: {
            name: 'evaluate',
            require: true,
            limit: [10, 20],
            data: [
              {name: '服务及时效', value: 5 },
              {name: '线路熟悉度', value: 5},
              {name: '车内整洁度', value: 5},
              {name: '服务态度', value: 5 },
              {name: '安全驾驶', value: 5 }
            ]
        },
     }
  }
</script>

```

:::

### 完整组件

::: demo
```html
<template>
   <yxt-rate
    :isVertical="true"
    :confige="confige4"
  />
</template>
<script>
  data(){
     return{
       confige4:{
        // 满意度
        satisfaction: {
          title: '满意度',
          type: ['不满意', '一般', '满意'],
        },
        // 评价
        evaluate: {
            name: 'evaluate',
            require: true,
            limit: [10, 20],
            data: [
              {name: '服务及时效', value: 5 },
              {name: '线路熟悉度', value: 5},
              {name: '车内整洁度', value: 5},
              {name: '服务态度', value: 5 },
              {name: '安全驾驶', value: 5 }
            ]
        },
     }
  }
</script>
```

:::

### 参数介绍
| 参数      | 说明          | 类型      | 可选值     | 默认值  |
| --------- | ------------- | -------- | --------- | ------ | 
| isVertical | 标识组件排列方式，为true时竖排显示，为false横排显示 | Boolean | true/false | false |
| confige | 组件参数配置项 | Object | satisfaction/recent/evaluate/opinion | satisfaction,recent,evaluate,opinion |
| confige-->satisfaction | 满意度模块儿 | Object | tile/type/icon/img | tile/type/icon/img |
| satisfaction-->title | 模块儿标题 | String | -- | '满意度' |
| satisfaction-->type | 综合评价类型 | Array | -- | ['不满意', '一般', '满意'] |
| satisfaction-->icon | 模块儿显示的icon图标 | Array（数组长度为3） | -- | -- |
| satisfaction-->img | 模块儿显示的img图标 | Array（数组长度为3） | -- | '组件默认图案' |
| confige-->recent | 近期满意度模块儿 | Object | title/value/sectionText/color | title/value/sectionText/color |
| recent--->title | 模块儿标题 | String | -- | '近一个月的总体满意度' |
| recent--->value | 展示数据 | Number | -- | 75 |
| recent--->sectionText | 展示文案 | String | -- | ['不满意', '满意'] |
| recent--->color | 展示文案 | Array/String/十六进制色值 | -- | ['#FDD76D', '#FA9413'] |
| confige--->evaluate | 评价模块儿 | Object | require/limit/textColor/colors/iconClasses/voidIconClass/texts/allowHalf/lowThreshold/highThreshold/voidColor/disabledVoidColor/disabledVoidIconClass/data | 略 |
| evaluate--->require | 是否提示必填 | Boolean | true/false | true |
| evaluate--->limit | 评分临界值，默认小于数组0位的值较差，小于数组1位大于数组0位的值一般，大于数组1位的值满意 | Array | --| [10, 20] |
| evaluate--->textColor | 辅助字体颜色 | String | -- | '#ff9900' |
| evaluate--->colors | 评分icon 的颜色。若传入数组，共有 3 个元素，为 3 个分段所对应的颜色；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的颜色 | Array | -- | ['#99A9BF', '#F7BA2A', '#FF9900'] |
| evaluate--->iconClasses | 评分icon | Array | -- | ['to-icon-star-off', 'to-icon-s-opportunity', 'to-icon-star-on'] |
| evaluate--->voidIconClass | 只读时未选中 icon 的类名 | String | -- | 'to-icon-star-off' |
| evaluate--->texts | 辅助文字数组 | Array | -- | ['极差', '失望', '一般', '满意', '惊喜'] |
| evaluate--->allowHalf | 是否允许半选 | Boolean | -- | true |
| evaluate--->lowThreshold | 低分和中等分数的界限值，值本身被划分在低分中 | Number | -- | 2 |
| evaluate--->highThreshold | 高分和中等分数的界限值，值本身被划分在高分中 | Number | -- | 4 |
| evaluate--->voidColor | 未选中 icon 的颜色 | String | -- | '#C6D1DE' |
| evaluate--->disabledVoidColor | 只读时未选中 icon 的颜色 | String | -- | '#EFF2F7' |
| evaluate--->disabledVoidIconClass | 只读时未选中 icon 的类名 | String | -- | '#to-icon-star-on' |
| evaluate--->data | 评分数据 | Array | -- | -- |
| data--->name | 评价类型名称 | String | -- | -- |
| data--->value | 评价分值 | String | -- | -- |
| data--->showScore | 是否显示评价分值(不能与showText同时出现) | Boolean | true/false | false |
| data--->showText | 是否显示评价结果辅助文字(不能与showScore同时出现) | Boolean | true/false | false |
| data--->opinion | 评价意见模块儿 | Object | require/isEdit/title/value/placeholder/maxlength/disabled/showWordLimit/rows | -- |
| data--->require | 标识此模块儿是否必填 | Boolean | true/false | false |
| data--->isEdit | 标识评价意见是否可编辑 | Boolean | true/false | false |
| data--->value | 绑定模块儿中的输入内容(可读可写) | String | -- | '' |
| data--->placeholder | 绑定文本区中的placeholder | String | -- | '请输入评价意见' |
| data--->maxlength | 限定文本区域的最多输入字数 | String/Number | -- | '200' |
| data--->disabled | 是否禁止填写 | Boolean | true/false | false |
| data--->showWordLimit | 是否显示输入字数统计 | Boolean | true/false | true |

### confige参数配置
```html
confige: {
  // 满意度
  satisfaction: {
    title: '满意度',
    type: ['不满意', '一般', '满意'],
    icon: [],
    img: [
      { icon: require('./icon/satisfaction.png') },
      { icon: require('./icon/ordinary.png') },
      { icon: require('./icon/noSatisfaction.png')}
    ]
  },
  // 近期满意度
  recent: {
    name: ' ',
    show: true,
    title: '近一个月的总体满意度',
    value: 75,
    sectionText: ['不满意', '满意'],
    color: ['#FDD76D', '#FA9413']
  },
  // 评价类型
  evaluate: {
    name: 'evaluate',
    require: true,
    limit: [10, 20],
    textColor: '#ff9900',
    colors: ['#99A9BF', '#F7BA2A', '#FF9900'],
    iconClasses: ['to-icon-star-off', 'to-icon-s-opportunity', 'to-icon-star-on'],
    voidIconClass: 'to-icon-star-off',
    texts: ['极差', '失望', '一般', '满意', '惊喜'],
    allowHalf: true,
    lowThreshold: 2,
    highThreshold: 4,
    voidColor: '#C6D1DE',
    disabledVoidColor: '#EFF2F7',
    disabledVoidIconClass: 'to-icon-star-on',
    data: [
      {name: '服务及时效', value: 5, showScore: false, disabled: false },
      {name: '线路熟悉度', value: 5, showText: false, disabled: false},
      {name: '车内整洁度', value: 5, showText: false, disabled: false},
      {name: '服务态度', value: 5, showText: false, disabled: false },
      {name: '安全驾驶', value: 5, showText: false, disabled: false }
    ]
  },
  // 评价意见
  opinion: {
    require: false,
    isEdit: true,
    title: '评价意见',
    value: '',
    placeholder: '请输入评价意见',
    maxlength: '200',
    disabled: false,
    showWordLimit: true,
    rows: 5
  }
}
```