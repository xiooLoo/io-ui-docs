# yxt-progress 

<script>

    export default {
        data() {
            return {
                progressList: [{
                        percentage: 50,
                        
                        customColor: '#f56c6c',
                    },
                    {
                        percentage: 100,
                        
                        customColor: '#5cb87a',
                    },
                    {
                        percentage: 100,
                        status: 'success',
                        customColor: '#e6a23c',
                    },
                    {
                        percentage: 100,
                        status: 'warning',
                        customColor: '#1989fa',
                    },
                    {
                        percentage: 30,
                        status: 'exception',
                        customColor: '#6f7ad3',
                    },
                ],
                 percentage: 10,
                colors: [
                    {color: '#f56c6c', percentage: 20},
                    {color: '#e6a23c', percentage: 40},
                    {color: '#5cb87a', percentage: 60},
                    {color: '#1989fa', percentage: 80},
                    {color: '#6f7ad3', percentage: 100}
                ]
            }
        },
        methods: {
            format(percentage) {
                return percentage === 100 ? '满' : `${percentage}%` ;
            },
            increase() {
                this.percentage += 10;
                if (this.percentage > 100) {
                this.percentage = 100;
                }
            },
            decrease() {
                this.percentage -= 10;
                if (this.percentage < 0) {
                this.percentage = 0;
                }
            }
        }
    }

</script>

### 基础用法

线形进度条
::: demo  $attrs接收除props之外的其他参数

```html
<template>
    <yxt-progress class="progress-item" v-for="(item,index) in progressList" :key="index" :percentage="item.percentage" :status="item.status" :format="format" />
</template>
<script>
    export default {
        data() {
            return {

                progressList: [{
                        percentage: 50
                    },
                    {
                        percentage: 100,
                        status: ''
                    },
                    {
                        percentage: 100,
                        status: 'success'
                    },
                    {
                        percentage: 100,
                        status: 'warning'
                    },
                    {
                        percentage: 30,
                        status: 'exception'
                    },
                ]
            }
        },
        methods: {
            format(percentage) {
                return percentage === 100 ? '满' : `${percentage}%`;
            }
        },
        created() {
            console.log(this.$attrs, 'this.$attrs')
        }
    }
</script>
<style>
    .progress-item {
        padding: 10px 0;
    }
</style>
```

:::

### 百分比内显

百分比不占用额外控件，适用于文件上传等场景。颜色可以自定义
::: demo  

```html
<template>
    <yxt-progress class="progress-item" v-for="(item,index) in progressList" :key="index" :color="item.customColor" :percentage="item.percentage" :status="item.status" :text-inside="true" :stroke-width="26" />
</template>
<script>
    export default {
        data() {
            return {
                progressList: [{
                        percentage: 50,
                        customColor: '#f56c6c',
                    },
                    {
                        percentage: 100,
                        status: '',
                        customColor: '#5cb87a',
                    },
                    {
                        percentage: 100,
                        status: 'success',
                        customColor: '#e6a23c',
                    },
                    {
                        percentage: 100,
                        status: 'warning',
                        customColor: '#1989fa',
                    },
                    {
                        percentage: 30,
                        status: 'exception',
                        customColor: '#6f7ad3',
                    },
                ]
            }
        },

    }
</script>
<style>
    .progress-item {
        padding: 10px 0;
    }
</style>
```

:::

### 环形进度条

Progress 组件可通过 type 属性来指定使用环形进度条，在环形进度条中，还可以通过 width 属性来设置其大小。
::: demo  Progress 组件可通过 type 属性来指定使用环形进度条，在环形进度条中，还可以通过 width 属性来设置其大小。

```html
<template>
    <div class="progress-item-circle">
        <yxt-progress class="progress-item-circle-item" v-for="(item,index) in progressList" :key="index" :percentage="item.percentage" :status="item.status" type="circle" />
    </div>
</template>
<script>
    export default {
        data() {
            return {
                progressList: [{
                        percentage: 50,
                        customColor: '#f56c6c',
                    },
                    {
                        percentage: 100,
                        status: '',
                        customColor: '#5cb87a',
                    },
                    {
                        percentage: 100,
                        status: 'success',
                        customColor: '#e6a23c',
                    },
                    {
                        percentage: 100,
                        status: 'warning',
                        customColor: '#1989fa',
                    },
                    {
                        percentage: 30,
                        status: 'exception',
                        customColor: '#6f7ad3',
                    },
                ]
            }
        },

    }
</script>
<style>
    .progress-item-circle-item {
        padding: 10px;
    }

    .progress-item-circle {
        display: flex;
    }
</style>
```

:::

### 仪表盘形进度条

::: demo  通过 type 属性来指定使用仪表盘形进度条

```html
<template>
    <div>
        <yxt-progress :color="colors" class="progress-item-circle-item" :percentage="percentage" type="dashboard" />

        </yxt-progress>
    </div>
    <div>
        <to-row>
            <to-button @click="decrease">减</to-button>
            <to-button @click="increase">加</to-button>
        </to-row>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                percentage: 10,
                colors: [{
                        color: '#f56c6c',
                        percentage: 20
                    },
                    {
                        color: '#e6a23c',
                        percentage: 40
                    },
                    {
                        color: '#5cb87a',
                        percentage: 60
                    },
                    {
                        color: '#1989fa',
                        percentage: 80
                    },
                    {
                        color: '#6f7ad3',
                        percentage: 100
                    }
                ]
            }
        },
        methods: {
            increase() {
                this.percentage += 10;
                if (this.percentage > 100) {
                    this.percentage = 100;
                }
            },
            decrease() {
                this.percentage -= 10;
                if (this.percentage < 0) {
                    this.percentage = 0;
                }
            }
        }

    }
</script>
<style>
    .progress-item-circle-item {
        padding: 10px;
    }

    .progress-item-circle {
        display: flex;
    }
</style>
```

:::

### Attributes

| 参数      | 说明    | 类型      | 可选值 | 默认值 
|----------|-------- |---------- |---------|------
|percentage | 百分比（必填）  | Nmuber  | 0-100 | 0
|type | 进度条类型 | string | line/circle/dashboard  | line
|stroke-width |进度条的宽度，单位 px|number | -- |6
|text-inside |进度条显示文字内置在进度条内（只在 type=line 时可用） px|boolean | -- |false
|status | 进度条当前状态 | string | success/exception/warning | --
|color | 进度条北京侧（会覆盖status状态的颜色） | string/function/array | -- | ''
|width | 环形进度条画布宽度（只在 type 为 circle 或 dashboard 时可用） |number | -- |126
| show-text | 是否显示进度条文字内容 | boolean | -- | true
|stroke-linecap | circle/dashboard 类型路径两端的形状 string |butt/round/square | round
|format | 指定进度条文字内容 | function(percentage) | -- | --
