# YxtIcon 展示
提供了一套常用的图标集合。

### 使用方法

<style lang="scss" scoped>
	
  .box{
		.yxt-icon{
			margin: 0 10px;
		}
	}
	.icon-list{
		display: flex;
		flex-wrap: wrap;
		li{
			padding: 10px 0;
			border: 1px solid #eee;
			box-sizing: border-box;
			width: 16.6%;
			height: 120px;
			text-align: center;
			align-items: center;
			transition: 1s;
			.icon_name{
				/* font-size: 16px; */
				margin-top: 10px;
			}
		}
		li:hover{
			color: #2e78ff;
		}
	}
</style>
::: demo 通过传值`icon`控制回显,按钮除了slot方式外，还支持`icon`传参使用传统element的图标库，支持`yxt-icon`传参支持本组件库所有icon图标
```html
<template>
	<div class="box">
		<yxt-icon icon="Calendar"></yxt-icon>
		<yxt-icon icon="Check-Circle"></yxt-icon>
		<yxt-icon icon="Upload"></yxt-icon>
		<to-button type="primary" icon="to-icon-search">搜索</to-button>
		<to-button type="primary" yxt-icon="Setting">设置</to-button>
	</div>
</template>
```
:::

### 尺寸控制
::: demo 通过传值`size`控制尺寸,默认为`16`px,传参类型为`Number`
```html
<template>
	<div class="box">
		<yxt-icon icon="User" size="30"></yxt-icon>
		<yxt-icon icon="Setting" size="30"></yxt-icon>
	</div>
</template>

```
:::
### 颜色控制
::: demo 通过传值`color`控制颜色,传参类型为`String`
```html
<template>
	<div class="box">
		<yxt-icon icon="Calendar" color="red"></yxt-icon>
		<yxt-icon icon="Setting" color="#FA9513"></yxt-icon>
		<yxt-icon icon="User" color="#53C419"></yxt-icon>
	</div>
</template>

```
:::

### 图标合集

::: demo

```html
<template>
	<ul class="icon-list">
		<li v-for="(item, index) in $yxtIcons">
			<yxt-icon :icon="item.class_name" size="32"></yxt-icon>
			<div class="icon_name">{{item.class_name}}</div>
		</li>
	</ul>
</template>
```

:::


### Attributes
| 参数      | 说明    | 类型      | 可选值       | 默认值   |   单位  |
|---------- |-------- |---------- |-------------  |-------- | ------|
| icon     | 数据   | String  |    图标列表中下方展示的名称    |    —     |  — |
| color     | 颜色   | String    |   自定义颜色    |     true    |  —|
| size     | 尺寸   | Number    |   自定义尺寸    |     16   |   px  |