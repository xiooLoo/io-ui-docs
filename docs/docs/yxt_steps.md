# yxt-steps

<script>

    export default {
        data() {
            return {
                active: 0,
                stepList: [{
                        title: '步骤一',
                        status: '已完成',
                        description: '步骤一描述',
                        icon:'yxt-icon iconfont icon-Calendar'
                    },
                    {
                        title: '步骤二',
                        status: '进行中',
                        description: '步骤二描述',
                        icon:'yxt-icon iconfont icon-Setting'
                    },
                    {
                        title: '步骤三',
                        status: '未完成',
                        description: '步骤三描述',
                        icon:'yxt-icon iconfont icon-User'
                    }
                ]
            }
        },
         methods: {
            next() {
                if (this.active++ > 2) this.active = 0;
            }
        }
    }

</script>

### 基础用法

引导用户按照流程完成任务的分步导航条，可根据实际应用场景设定步骤，步骤不得少于 2 步。

::: demo  设置active属性，接受一个Number，表明步骤的 index，从 0 开始。需要定宽的步骤条时，设置space属性即可，它接受Number，单位为px，如果不设置，则为自适应。设置finish-status属性可以改变已经完成的步骤的状态。

```html
<template>
    <to-steps :active="active" finish-status="success">
        <to-step v-for="(item,index) in stepList" :key="index" :title="item.title"></to-step>
    </to-steps>
    <to-button style="margin-top: 12px;" @click="next">下一步</to-button>

</template>
<script>
    export default {
        data() {
            return {
                active: 0,
                stepList: [{
                        title: '步骤一',
                        status: '已完成'

                    },
                    {
                        title: '步骤二',
                        status: '进行中'
                    },
                    {
                        title: '步骤三',
                        status: '未完成'
                    }
                ]
            }
        },
        methods: {
            next() {
                if (this.active++ > 2) this.active = 0;
            }
        }
    }
</script>
```

:::

### 含状态步骤条

每一步骤显示出该步骤的状态。

::: demo  也可以使用title具名分发，可以用slot的方式来取代属性的设置，在本文档最后的列表中有所有的 slot name 可供参考。

```html
<template>
    <to-steps :space="200" :active="1" finish-status="success">
        <to-step v-for="(item,index) in stepList" :key="index" :title="item.status" :description="item.description"></to-step>
    </to-steps>

</template>
<script>
    export default {
        data() {
            return {
                active: 0,
                stepList: [{
                        title: '步骤一',
                        status: '已完成',
                        description: '步骤一描述'
                    },
                    {
                        title: '步骤二',
                        status: '进行中',
                        description: '步骤二描述'
                    },
                    {
                        title: '步骤三',
                        status: '未完成',
                        description: '步骤三描述'
                    }
                ]
            }
        },

    }
</script>
```

:::

### 纵向且带图标

步骤条内可以启用各种自定义的图标。

::: demo  只需要在el-steps元素中设置direction属性为vertical即可。

```html
<template>
    <to-steps :space="200" direction="vertical" :active="1" finish-status="success">
        <to-step v-for="(item,index) in stepList" :key="index" :title="item.title" :description="item.description" :icon="item.icon" />
    </to-steps>
</template>
<script>
    export default {
        data() {
            return {
                active: 0,
                stepList: [{
                        title: '步骤一',
                        status: '已完成',
                        description: '步骤一描述',
                        icon: 'yxt-icon iconfont icon-Calendar'
                    },
                    {
                        title: '步骤二',
                        status: '进行中',
                        description: '步骤二描述',
                        icon: 'yxt-icon iconfont icon-Setting'
                    },
                    {
                        title: '步骤三',
                        status: '未完成',
                        description: '步骤三描述',
                        icon: 'yxt-icon iconfont icon-User'
                    }
                ]
            }
        },

    }
</script>
<style>
    .to-step__icon i {
        margin: 0 auto;
    }

    .to-step__icon i:before {
        font-size: x-large;
    }
</style>
```

:::

### 简洁风格

步骤条内可以启用各种自定义的图标。

::: demo  

```html
<template>
    <to-steps simple :space="200" direction="vertical" :active="1" finish-status="success">
        <to-step v-for="(item,index) in stepList" :key="index" :title="item.title" :description="item.description" :icon="item.icon" />
    </to-steps>
</template>
<script>
    export default {
        data() {
            return {
                active: 0,
                stepList: [{
                        title: '步骤一',
                        status: '已完成',
                        description: '步骤一描述',
                        icon: 'yxt-icon iconfont icon-Calendar'
                    },
                    {
                        title: '步骤二',
                        status: '进行中',
                        description: '步骤二描述',
                        icon: 'yxt-icon iconfont icon-Setting'
                    },
                    {
                        title: '步骤三',
                        status: '未完成',
                        description: '步骤三描述',
                        icon: 'yxt-icon iconfont icon-User'
                    }
                ]
            }
        },

    }
</script>
<style>
    .to-step__icon i {
        margin: 0 auto;
    }

    .to-step__icon i:before {
        font-size: x-large;
    }
</style>
```

:::

### Steps Attributes

| 参数      | 说明    | 类型     |可选值   |  默认值 
|----------|-------- |---------- |--------|---------
| space   | 每个 step 的间距，不填写将自适应间距。支持百分比。  | number / string  
|direction |显示方向|string|vertical/horizontal|horizontal
|active | 设置当前激活步骤 | number | -- | 0
|process-status | 设置当前步骤的状态 | string | wait / process / finish / error / success | process
|finish-status | 设置结束步骤的状态 | string | wait / process / finish / error / success | finish
|align-center | 进行居中对齐 | boolean |-- | false
| simple | 是否应用简洁风格 | boolean | -- | false

### Step Attributes

| 参数      | 说明    | 类型     |可选值   |  默认值 
|----------|-------- |---------- |--------|---------
| title | 标题 | string | -- | -- 
| description | 描述性文字 | string | -- | --
|icons | 图标 | 传入icons的class全名来自定义icon, 也支持slot方式写入 | string | --
| status | 设置当前步骤的状态，不设置则根据 steps 确定状态 | wait / process / finish / error / success | -- |--

### Step Slot

| name      | 说明   
|----------|-------- 
|icon | 自定义图标
|title | 自定义标题
|description | 自定义描述性文字
