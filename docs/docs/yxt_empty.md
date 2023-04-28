# YxtEmpty || YxtResult : 空页面 || 结果页面

svg图片由组件库组件`yxt-svg-icon/svgs`目录下进行维护

#### 类型一、`isCustom = 'svg'`
::: demo `上下结构`布局 || `左右结构`布局
```html
<template>
    <div>
        <to-divider content-position="left">上下结构 type = 'T'</to-divider>  
        <yxt-empty
          type="T"
          is-custom="svg"
          icon="connecterr"
          :has-title="true"
          :has-title-sub="true"
          :has-row-btns="true"
        >
        </yxt-empty>
        <to-divider content-position="left" style="padding: 100px 0;">左右结构 type = 'H'</to-divider>  
        <yxt-empty
          type="H"
          is-custom="svg"
          icon="403"
          img-style="width:400px;height:400px;"
          :has-title="true"
          :has-title-sub="true"
          :has-row-btns="true"
        >
        </yxt-empty>
    </div>
</template>
<style>
    .yxt-empty {
        height: 500px;
    }
</style>
```
:::

#### 类型二、`isCustom = 'yxtIcon'`
::: demo `上下结构`布局 || `左右结构`布局
```html
<template>
    <to-divider content-position="left">上下结构 type = 'T'</to-divider>  
    <yxt-empty
      type="T"
      is-custom="yxtIcon"
      icon="Calendar"
      size="100"
      img-style="width:100px;height:100px;"
      :has-title="true"
      :has-title-sub="true"
      :has-row-btns="true"
    >
    </yxt-empty>
    <to-divider content-position="left">左右结构 type = 'H'</to-divider>  
    <yxt-empty
      type="H"
      is-custom="yxtIcon"
      icon="Info-Circle"
      size="100"
      img-style="width:100px;height:100px;"
      :has-title="true"
      :has-title-sub="true"
      :has-row-btns="true"
    >
    </yxt-empty>
</template>
```
:::

#### 类型三、`isCustom = 'img'`
::: demo `上下结构`布局 || `左右结构`布局
```html
<template>
    <to-divider content-position="left">上下结构 type = 'T'</to-divider>  
    <yxt-empty
      type="T"
      is-custom="img"
      icon="https://pic2.imgdb.cn/item/642a6df4a682492fcc01f3cb.jpg"
      img-style="width:300px;height:300px;"
      :has-title="true"
      :has-title-sub="true"
      :has-row-btns="true"
    >
    </yxt-empty>
    <to-divider content-position="left">左右结构 type = 'H'</to-divider>  
    <yxt-empty
      type="H"
      is-custom="img"
      icon="https://pic2.imgdb.cn/item/642a6df4a682492fcc01f3cb.jpg"
      img-style="width:300px;height:300px;"
      :has-title="true"
      :has-title-sub="true"
      :has-row-btns="true"
    >
    </yxt-empty>
</template>
```
:::

#### 类型四、`isCustom = 'slot'`
::: demo 匿名插槽自定义内容
```html
<template>
    <to-divider content-position="left">匿名插槽自定义内容</to-divider>  
    <yxt-empty
      type="T"
      is-custom="slot"
      icon="https://pic2.imgdb.cn/item/642a6df4a682492fcc01f3cb.jpg"
      img-style="width:100px;height:50px;"
      :has-title="true"
      :has-title-sub="true"
      :has-row-btns="true"
    >
    <h1>请自定义Dom处理特殊情况</h1>
    </yxt-empty>
</template>
```
:::


### Attributes

| 参数  | 说明          | 类型      | 可选值                           | 默认值  |
|------ |-------------- |---------- |--------------------------------  |-------- |
|isCustom | 自定义图片类型 | string | yxtIcon 或 svg 或 img 或 slot | slot |
|hasContent | 是否显示`右侧`或`下侧`文字、按钮等 | boolean | true 或 false | true |
|type| 布局模式 | string | 'T' 或 'H' | 'T' |
|icon | 图片名 或 图片地址 | string | '403' 或 'https://aaa.png' | -- |
|imgStyle | 图片自定义Style样式 | string | -- | width:30vh;height:10vh; |
|iconAlt | 图片提示文字 | string | -- | -- |

