# Rate 组件
----

<style lang="scss">
  .rate-demo-block {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    &-nm, &-sp {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .demonstration {
            margin-bottom: 10px;
        }
    }
  }
</style>
<script>
  export default {
    data() {
      return {
        baseValue1: null,
        baseValue2: null,
        baseColors: ['#99A9BF', '#F7BA2A', '#FF9900'],
        fzValue: 3.0,
        icvalue: null,
        iconClasses: ['to-icon-pear', 'to-icon-pear', 'to-icon-pear']
      }
    }
  }
</script>

## 基础用法

::: demo 评分默认被分为三个等级，可以利用颜色数组对分数及情感倾向进行分级（默认情况下不区分颜色）。三个等级所对应的颜色用colors属性设置，而它们对应的两个阈值则通过 low-threshold 和 high-threshold 设定。你也可以通过传入颜色对象来自定义分段，键名为分段的界限值，键值为对应的颜色。
```html
<div class="rate-demo-block">
    <div class="rate-demo-block-nm">
      <span class="demonstration">默认不区分颜色</span>
      <yxt-rate></yxt-rate>
    </div>
    <div class="rate-demo-block-sp">
      <span class="demonstration">区分颜色</span>
      <yxt-rate :colors="baseColors"></yxt-rate>
    </div>
</div>
<script>
  export default {
    data() {
      return {
        baseColors: ['#99A9BF', '#F7BA2A', '#FF9900'],
      }
    }
  }
</script>
```
:::

## 辅助文字

::: demo 为组件设置 show-text 属性会在右侧显示辅助文字。通过设置 texts 可以为每一个分值指定对应的辅助文字。texts 为一个数组，长度应等于最大值 max。
```html
<yxt-rate
  show-text
>
</yxt-rate>
<script>
  export default {
    data() {
      return {
        fzValue: 3.0
      }
    }
  }
</script>
```
:::

## 其它 icon

当有多层评价时，可以用不同类型的 icon 区分评分层级
::: demo 设置icon-classes属性可以自定义不同分段的图标。若传入数组，共有 3 个元素，为 3 个分段所对应的类名；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的类名。本例还使用void-icon-class指定了未选中时的图标类名。
```html
<yxt-rate
  :icon-classes="iconClasses"
  :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
  score-template="{value}分"
  void-icon-class="to-icon-pear"
  show-score
>
</yxt-rate>
<script>
  export default {
    data() {
      return {
        icvalue: null,
        iconClasses: ['to-icon-pear', 'to-icon-pear', 'to-icon-pear'] // 等同于 { 2: 'to-icon-pear', 4: { value: 'to-icon-pear', excluded: true }, 5: 'to-icon-pear' }
      }
    }
  }
</script>
```
:::


### 必传参数说明（Must Attributes）

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| value / v-model | 绑定值 | number | -- | 0 |

### 扩展参数说明（Oth Attributes）

| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| colors | icon 的颜色。若传入数组，共有 3 个元素，为 3 个分段所对应的颜色；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的颜色	 | array/object	 | -- | ['#F7BA2A', '#F7BA2A', '#F7BA2A'] |
| textColor / text-color | 辅助文字的颜色  | string | -- | #1F2D3D |
| iconClasses / icon-classes | icon 的类名。若传入数组，共有 3 个元素，为 3 个分段所对应的类名；若传入对象，可自定义分段，键名为分段的界限值，键值为对应的类名 | array/object	 | -- | ['to-icon-star-on', 'to-icon-star-on','to-icon-star-on'] |
| scoreTemplate / score-template | 分数显示模板  | string | -- | {value} |
| max | 最大分值  | -- | -- | -- |
| disabled | 是否为只读  | boolean | -- | false |
| allow-half | 是否允许半选  | boolean | -- | false |
| low-threshold | 低分和中等分数的界限值，值本身被划分在低分中  | number | -- | 2 |
| high-threshold | 高分和中等分数的界限值，值本身被划分在高分中  | number | -- | 4 |
| void-color | 未选中 icon 的颜色  | string | -- | #C6D1DE |
| disabled-void-color	 | 只读时未选中 icon 的颜色  | string | -- | #EFF2F7 |
| void-icon-class | 未选中 icon 的类名  | string | -- | to-icon-star-off |
| disabled-void-icon-class | 只读时未选中 icon 的类名  | string | -- | to-icon-star-on |
| show-text | 是否显示辅助文字，若为真，则会从 texts 数组中选取当前分数对应的文字内容  | boolean | -- | false |
| show-score | 是否显示当前分数，show-score 和 show-text 不能同时为真  | boolean | -- | false |
| texts | 辅助文字数组  | array | -- | ['极差', '失望', '一般', '满意', '惊喜'] |


### Events

| 参数      | 说明          | 回调参数 |
|---------- |-------------- |--------------|
| change | 分值改变时触发  | 改变后的分值 |