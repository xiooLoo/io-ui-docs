<!--
 * @Descripttion: 
 * @version: 
 * @Author: Aris
 * @Date: 2021-12-16 14:45:16
 * @LastEditors: Aris
 * @LastEditTime: 2021-12-16 14:45:16
-->

<style lang="scss">
  .demo-block{
    .to-row{
      margin: 20px;
    }
  }
</style>

# Button 按钮

常用的操作按钮。
### 按钮效果展示
使用`type`、`plain`、`second`、`dashed`、`round`和`circle`和属性来定义 Button 的样式。

:::demo

```html
<to-row>
  <to-button>默认按钮</to-button>
  <to-button type="primary">主要按钮</to-button>
  <to-button type="success">成功按钮</to-button>
  <to-button type="info">信息按钮</to-button>
  <to-button type="warning">警告按钮</to-button>
  <to-button type="danger">危险按钮</to-button>
</to-row>
<to-row>
  <to-button plain>朴素按钮</to-button>
  <to-button type="primary" plain>主要按钮</to-button>
  <to-button type="success" plain>成功按钮</to-button>
  <to-button type="info" plain>信息按钮</to-button>
  <to-button type="warning" plain>警告按钮</to-button>
  <to-button type="danger" plain>危险按钮</to-button>
</to-row>
<to-row>
  <to-button type="primary" second>UI定制次按钮</to-button>
  <to-button type="primary" second>主要按钮</to-button>
  <to-button type="success" second>成功按钮</to-button>
  <to-button type="info" second>信息按钮</to-button>
  <to-button type="warning" second>警告按钮</to-button>
  <to-button type="danger" second>危险按钮</to-button>
  <to-button type="easy">UI定制次否按钮</to-button>
</to-row>
<to-row>
  <to-button type="gridlines">UI定制虚框按钮</to-button>
  <to-button type="primary" dashed>主要按钮</to-button>
  <to-button type="success" dashed>成功按钮</to-button>
  <to-button type="info" dashed>信息按钮</to-button>
  <to-button type="warning" dashed>警告按钮</to-button>
  <to-button type="danger" dashed>危险按钮</to-button>
</to-row>

<to-row>
  <to-button round>圆角按钮</to-button>
  <to-button type="primary" round>主要按钮</to-button>
  <to-button type="success" round>成功按钮</to-button>
  <to-button type="info" round>信息按钮</to-button>
  <to-button type="warning" round>警告按钮</to-button>
  <to-button type="danger" round>危险按钮</to-button>
</to-row>

<to-row>
  <to-button icon="to-icon-search" circle></to-button>
  <to-button type="primary" icon="to-icon-edit" circle></to-button>
  <to-button type="success" icon="to-icon-check" circle></to-button>
  <to-button type="info" icon="to-icon-message" circle></to-button>
  <to-button type="warning" icon="to-icon-star-off" circle></to-button>
  <to-button type="danger" icon="to-icon-delete" circle></to-button>
</to-row>
```

:::

### 基础用法

基础的按钮用法。主要按钮和带icon的按钮


:::demo 主要按钮和带icon的按钮

```html
<to-row>
	<to-button type="primary" size="big">主要按钮</to-button>
	<to-button type="primary">主要按钮</to-button>
	<to-button type="primary" size="mini">主要按钮</to-button>
	<to-button type="primary" icon="to-icon-delete" size="big">删除</to-button>
	<to-button type="primary"icon="to-icon-delete">删除</to-button>
	<to-button type="primary"icon="to-icon-delete" size="mini">删除</to-button>
</to-row>

```

:::

### 次要按钮

:::demo 次要按钮和次否按钮。

```html
<to-row>
  <to-button type="primary" plain size="big">次要按钮</to-button>
  <to-button type="primary" plain>次要按钮</to-button>
  <to-button type="primary" plain size="mini">次要按钮</to-button>
</to-row>

<to-row>
  <to-button type="primary" second size="big">次要按钮</to-button>
  <to-button type="primary" second>次要按钮</to-button>
  <to-button type="primary" second size="mini">次要按钮</to-button>
</to-row>
<to-row>
  <to-button type="easy" size="big">次否按钮</to-button>
  <to-button type="easy">次否按钮</to-button>
  <to-button type="easy" size="mini">次否按钮</to-button>
</to-row>
```

:::

### 失效按钮和虚框按钮

:::demo 通用失效按钮，其他普通样式按钮同样有禁用效果，虚框按钮常用来新增。

```html
<to-row>
  <to-button type="info" second disabled size="big">失效按钮</to-button>
  <to-button type="info" second disabled>失效按钮</to-button>
  <to-button type="info" second disabled size="mini">失效按钮</to-button>
</to-row>
<to-row>
  <to-button type="gridlines" size="big">虚框按钮</to-button>
  <to-button type="gridlines">虚框按钮</to-button>
  <to-button type="gridlines" size="mini">虚框按钮</to-button>
</to-row>
```

:::

### 危险按钮

:::demo 三种危险按钮展示。

```html
<to-row>
  <to-button type="danger" size="big">危险按钮</to-button>
  <to-button type="danger">危险按钮</to-button>
  <to-button type="danger" size="mini">危险按钮</to-button>
</to-row>
<to-row>
  <to-button type="danger" size="big" plain>危险次按钮</to-button>
  <to-button type="danger" plain>危险次按钮</to-button>
  <to-button type="danger" size="mini" plain>危险次按钮</to-button>
</to-row>
<to-row>
  <to-button type="text" size="big" danger>危险文字按钮</to-button>
  <to-button type="text" danger>危险文字按钮</to-button>
  <to-button type="text" size="mini" danger>危险文字按钮</to-button>
</to-row>
```

:::

### 文字按钮

:::demo 没有边框和背景色的按钮。

```html
<to-row class="box">
  <to-button type="text" size="big">文字按钮</to-button>
  <to-button type="text">文字按钮</to-button>
  <to-button type="text" size="mini">文字按钮</to-button>
  <to-button type="text" disabled>文字按钮</to-button>
</to-row>
```

:::

### 禁用状态

按钮不可用状态。常用按钮均可通过添加`disabled`来添加禁用状态

:::demo 你可以使用`disabled`属性来定义按钮是否可用，它接受一个`Boolean`值。

```html
<to-row>
  <to-button type="info" second disabled>UI定制失效按钮</to-button>
</to-row>
<to-row>
  <to-button disabled>默认按钮</to-button>
  <to-button type="primary" disabled>主要按钮</to-button>
  <to-button type="success" disabled>成功按钮</to-button>
  <to-button type="info" disabled>信息按钮</to-button>
  <to-button type="warning" disabled>警告按钮</to-button>
  <to-button type="danger" disabled>危险按钮</to-button>
</to-row>

<to-row>
  <to-button plain disabled>朴素按钮</to-button>
  <to-button type="primary" plain disabled>主要按钮</to-button>
  <to-button type="success" plain disabled>成功按钮</to-button>
  <to-button type="info" plain disabled>信息按钮</to-button>
  <to-button type="warning" plain disabled>警告按钮</to-button>
  <to-button type="danger" plain disabled>危险按钮</to-button>
</to-row>
```

:::

### 图标按钮

带图标的按钮可增强辨识度（有文字）或节省空间（无文字）。

:::demo 设置`icon`属性即可，icon 的列表可以参考 Element 的 icon 组件，也可以设置在文字右边的 icon ，只要使用`i`标签即可，可以使用自定义图标。

```html
<to-button type="primary" icon="to-icon-edit"></to-button>
<to-button type="primary" icon="to-icon-share"></to-button>
<to-button type="primary" icon="to-icon-delete"></to-button>
<to-button type="primary" icon="to-icon-search">搜索</to-button>
<to-button type="primary">上传<i class="to-icon-upload to-icon--right"></i></to-button>
```

:::

### 按钮组

以按钮组的方式出现，常用于多项类似操作。

:::demo 使用`<to-button-group>`标签来嵌套你的按钮。

```html
<to-button-group>
  <to-button type="primary" icon="to-icon-arrow-left">上一页</to-button>
  <to-button type="primary">下一页<i class="to-icon-arrow-right to-icon--right"></i></to-button>
</to-button-group>
<to-button-group>
  <to-button type="primary" icon="to-icon-edit"></to-button>
  <to-button type="primary" icon="to-icon-share"></to-button>
  <to-button type="primary" icon="to-icon-delete"></to-button>
</to-button-group>
```
:::

### 加载中

点击按钮后进行数据加载操作，在按钮上显示加载状态。

:::demo 要设置为 loading 状态，只要设置`loading`属性为`true`即可。

```html
<to-button type="primary" :loading="true">加载中</to-button>
```

:::

### 不同尺寸

Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。

:::demo 额外的尺寸：`medium`、`small`、`mini`，通过设置`size`属性来配置它们。

```html
<to-row>
	<to-button size="big" type="primary">大按钮</to-button>
	<to-button size="medium" type="primary">中等按钮</to-button>
	<to-button type="primary">默认按钮</to-button>
	<to-button size="mini" type="primary">小按钮</to-button>
</to-row>
<to-row>
  <to-button size="big" type="primary" second>大按钮</to-button>
  <to-button size="medium" type="primary" second>中等按钮</to-button>
  <to-button type="primary" second>默认按钮</to-button>
  <to-button size="mini" type="primary" second>小按钮</to-button>
</to-row>
```

:::

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| size     | 尺寸   | string  |   big / medium / small / mini            |    small     |
| type     | 类型   | string    |   primary / success / warning / danger / info / text / easy / gridlines |     —    |
|      | 类型说明   | string    |   主要 / 成功 / 警告 / 危险 / 信息 / 文本 / 定制次否 / 定制虚框 |     —    |
| plain     | 是否朴素按钮   | boolean    | — | false   |
| second     | 是否次按钮   | boolean    | — | false   |
| round     | 是否圆角按钮   | boolean    | — | false   |
| circle     | 是否圆形按钮   | boolean    | — | false   |
| dashed     | 是否虚框按钮   | boolean    | — | false   |
| loading     | 是否加载中状态   | boolean    | — | false   |
| disabled  | 是否禁用状态    | boolean   | —   | false   |
| danger  | 是否危险按钮，仅文字按钮时使用    | boolean   | —   | false   |
| icon  | 图标类名 | string   |  —  |  —  |
| autofocus  | 是否默认聚焦 | boolean   |  —  |  false  |
| native-type | 原生 type 属性 | string | button / submit / reset | button |
