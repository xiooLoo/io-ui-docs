# yxt-card 卡片

### 基础用法

::: demo  $attrs接收除props之外的其他属性

```html
<template>
    <yxt-card :swtype="swtype">
        <div slot="header">卡片名称</div>
        <div>
            <div v-for="(item,index) in cardList" :key="index">{{item.name}}{{index}}</div>
        </div>
    </yxt-card>
</template>
<script>
    export default {
        data() {
            return {
                swtype: 'yxt-card-sw',
                cardList: [{
                    name: '列表内容',
                    title: '好吃的汉堡',
                    date: '2022-07-21T01:14:53.083Z',
                    shadow: 'always'

                }, {
                    name: '列表内容',
                    title: '好吃的汉堡',
                    date: '2022-07-21T01:14:53.083Z',
                    shadow: 'hover'
                }, {
                    name: '列表内容',
                    title: '好吃的汉堡',
                    date: '2022-07-21T01:14:53.083Z',
                    shadow: 'never'
                }]
            }
        },
    }
</script>
```

:::

### 简单卡片

::: demo  卡片可以只有内容区

```html
<template>
    <yxt-card :swtype="swtype">
        <div v-for="(item,index) in cardList" :key="index">{{item.name}}{{index}}</div>
    </yxt-card>
</template>
<script>
    export default {
        data() {
            return {
                swtype: 'yxt-card-sw',
                cardList: [{
                    name: '列表内容',
                    title: '好吃的汉堡',
                    date: '2022-07-21T01:14:53.083Z',
                    shadow: 'always'
                }, {
                    name: '列表内容',
                    title: '好吃的汉堡',
                    date: '2022-07-21T01:14:53.083Z',
                    shadow: 'hover'
                }, {
                    name: '列表内容',
                    title: '好吃的汉堡',
                    date: '2022-07-21T01:14:53.083Z',
                    shadow: 'never'
                }]
            }
        },
    }
</script>
```

:::

### 带图片/卡片阴影

::: demo  卡片可以只有内容区

```html
<template>
    <!-- <yxt-card > -->
    <div class="card-view">
        <yxt-card :swtype="swtype" class="card-item" v-for="(item,index) in cardList" :key="index" :shadow="item.shadow">
            <div class="image-view">
                <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
            </div>
            <div class="title">{{item.title}}</div>
            <div class="date">{{item.date}}</div>
        </yxt-card>
    </div>
    <!-- </yxt-card> -->
</template>
<script>
    export default {
        data() {
            return {
                swtype: 'yxt-card-sw',
                cardList: [{
                    name: '列表内容',
                    title: '好吃的汉堡',
                    date: '2022-07-21T01:14:53.083Z',
                    shadow: 'always'
                }, {
                    name: '列表内容',
                    title: '好吃的汉堡',
                    date: '2022-07-21T01:14:53.083Z',
                    shadow: 'hover'
                }, {
                    name: '列表内容',
                    title: '好吃的汉堡'，
                    date: '2022-07-21T01:14:53.083Z',
                    shadow: 'never'
                }]
            }
        },
    }
</script>
<style>
    .card-view {
        display: flex;
        align-items: center;
    }

    .card-item {
        width: 235px;
        margin-right: 20px;

    }

    .image-view {
        width: 100%;

    }

    .title {
        padding: 15px 0 10px 0;
        font-weight: bold;
    }
</style>
```

:::

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|----------|-------- |---------- |-------------  |-------- |
| swtype   | 是否展示边框及阴影   | string  |   yxt-card-none / yxt-card-sw | yxt-card-none
|body-style | 设置body样式|object| | {padding:'20px'}
|shadow | 设置阴影显示时机 | string | always / hover / never |  always

### Slots

| 参数      | 说明    
|----------|-------- 
| header   | 自定义头部节点内容   
| -   | 自定义节点内容   
