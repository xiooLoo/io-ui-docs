## InputNumber 计数器

仅允许输入标准的数字值，可定义范围
<script>
  export default{
    data(){
      return {
        num: '',
        num1: '',
        num2: '',
        num3: '',
        num4: '',
        num5: '',
        num6: '',
        num7: '',
        num8: '',
        num9: '',
        num10: '',
      }
    },
    methods:{
      handleChange(value) {
        console.log(value);
      }
    }
  }
</script>

### UI定制

:::demo 设置 `controls-position` 属性可以控制按钮位置。
```html
<template>
  <to-input-number controls-position="right" v-model="num10" :min="0" :max="10" placeholder="请输入"></to-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num10: 1
      };
    },
  };
</script>
```

:::
`
### 基础用法

:::demo 要使用它，只需要在`to-input-number`元素中使用`v-model`绑定变量即可，变量的初始值即为默认值。
```html
<template>
  <to-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></to-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num: 1
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
  };
</script>
```

:::

### 禁用状态

:::demo `disabled`属性接受一个`Boolean`，设置为`true`即可禁用整个组件，如果你只需要控制数值在某一范围内，可以设置`min`属性和`max`属性，不设置`min`和`max`时，最小值为 0。

```html
<template>
  <to-input-number v-model="num1" :disabled="true"></to-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num1: 1
      }
    }
  };
</script>
```

:::

### 步数

允许定义递增递减的步数控制

:::demo 设置`step`属性可以控制步长，接受一个`Number`。

```html
<template>
  <to-input-number v-model="num2" :step="2"></to-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num2: 5
      }
    }
  };
</script>
```

:::

### 严格步数

:::demo `step-strictly`属性接受一个`Boolean`。如果这个属性被设置为`true`，则只能输入步数的倍数。

```html
<template>
  <to-input-number v-model="num3" :step="2" step-strictly></to-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num3: 2
      }
    }
  };
</script>
```

:::

### 精度

:::demo 设置 `precision` 属性可以控制数值精度，接收一个 `Number`。`precision` 的值必须是一个非负整数，并且不能小于 `step` 的小数位数。

```html
<template>
  <to-input-number v-model="num4" :precision="2" :step="0.1" :max="10"></to-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num4: 1
      }
    }
  };
</script>
```

:::

### 尺寸

额外提供了 `medium`、`small`、`mini` 三种尺寸的数字输入框

:::demo

```html
<template>
  <to-input-number v-model="num5"></to-input-number>
  <to-input-number size="medium" v-model="num6"></to-input-number>
  <to-input-number size="small" v-model="num7"></to-input-number>
  <to-input-number size="mini" v-model="num8"></to-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num5: 1,
        num6: 1,
        num7: 1,
        num8: 1
      }
    }
  };
</script>
```
:::

### 按钮位置

:::demo 设置 `controls-position` 属性可以控制按钮位置。
```html
<template>
  <to-input-number v-model="num9" controls-position="right" @change="handleChange" :min="1" :max="10"></to-input-number>
</template>
<script>
  export default {
    data() {
      return {
        num9: 1
      };
    },
    methods: {
      handleChange(value) {
        console.log(value);
      }
    }
  };
</script>
```
:::

### Attributes
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|----------|-------------- |----------|--------------------------------  |-------- |
| value / v-model    | 绑定值         | number | — | 0 |
| min      | 设置计数器允许的最小值 | number | — | -Infinity |
| max      | 设置计数器允许的最大值 | number | — | Infinity |
| step     | 计数器步长           | number   | — | 1 |
| step-strictly | 是否只能输入 step 的倍数 | boolean   | — | false |
| precision| 数值精度             | number   | — | — |
| size     | 计数器尺寸           | string   | large, small | — |
| disabled | 是否禁用计数器        | boolean | — | false |
| controls | 是否使用控制按钮        | boolean | — | true |
| controls-position | 控制按钮位置 | string | right | - |
| name | 原生属性 | string | — | — |
| label | 输入框关联的label文字 | string | — | — |
| placeholder | 输入框默认 placeholder | string | - | - |

### Events
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| change | 绑定值被改变时触发 | currentValue, oldValue |
| blur | 在组件 Input 失去焦点时触发 | (event: Event) |
| focus | 在组件 Input 获得焦点时触发 | (event: Event) |

### Methods
| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| focus | 使 input 获取焦点 | - |
| select | 选中 input 中的文字 | — |
