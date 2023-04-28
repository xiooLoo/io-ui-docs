# yxt-carousel 走马灯
在有限空间内，循环播放同一类型的图片、文字等内容


### 基础用法
<script>
export default {
  data(){
    return{
        carouseLists:[1,2,3,4],
        cardLists:[
          { name: '第一张'},
          { name: '第二张'},
          { name: '第三张'},
          { name: '第四张'}
       ]
    }
  },
  methods:{
     handleAction(query){
      }
  }
}
</script>
#### 鼠标经过指示器，切换幻灯片，鼠标经过幻灯片时，切换箭头显示

::: demo  通过插槽可以自定义幻灯片内容
```html
<div>
  <yxt-carousel ref="carousel" :carousel-list="carouseLists" :actions="handleAction">
      <template slot-scope="scope">
         <h1>{{scope.content}}</h1>
      </template>
  </yxt-carousel>
</div>
<script>
export default {
  data(){
    return{
      carouseLists:[1,2,3,4]
    }
  },
  methods:{
     handleAction(query){
       console.log('我变了',query)
      }
  }
}
</script>
<style lang="scss">
 .to-carousel__item h1 {
    color: #475669;
    font-size: 30px;
    line-height:300px;
    text-align:center;
    margin: 0;
  }
</style>
```
:::

### 指示器
#### 可以将指示器的显示位置设置在容器外部
::: demo


```html
<div>
  <yxt-carousel
    ref="carousel"
    :autoplay="false"
    trigger="click"
    :carousel-list="cardLists"
    indicator-position="outside"
  >
    <template slot-scope="scope">
      <h2>{{scope.content.name}}</h2>
    </template>
  </yxt-carousel>
</div>
<script>
export default {
  data(){
    return{
      cardLists:[
          { name: '第一张'},
          { name: '第二张'},
          { name: '第三张'},
          { name: '第四张'}
       ]
    }
  },
  methods:{
     handleAction(query){
       console.log('我变了',query)
      }
  }
}
</script>
```
:::


#### 卡片化
#### 将type属性设置为card即可启用卡片模式。可以通过直接点击两侧的幻灯片进行切换
::: demo
```html
<div class="demo-block">
  <yxt-carousel
      ref="carousel"
      :carousel-list="carouseLists"
      type="card"
      direction="horizontal"
      :interval="5000"
      :actions="handleAction">
  </yxt-carousel>
</div>
<script>
export default {
  data(){
    return{
       carouseLists:[1,2,3,4]
    }
  },
  methods:{
     handleAction(query){
       console.log('我变了',query)
      }
  }
}
</script>
```
:::


#### 方向
####  默认direction 为 horizontal。设置 direction 为 vertical 来让走马灯在垂直方向上显示。
::: demo   placement可以改变指示器方向，horizontal方向时，placement可选值为bottom top ,vertical方向时，placement可选值为left right
```html
<div>
   <yxt-carousel
      ref="carousel"
      :carousel-list="carouseLists"
      direction="vertical"
      :interval="5000"
      :actions="handleAction"
      placement="left">
  </yxt-carousel>
</div>
<script>
export default {
  data(){
    return{
       carouseLists:[1,2,3,4]
    }
  },
  methods:{
     handleAction(query){
       console.log('我变了',query)
      }
  }
}
</script>
```
:::



### Carousel Attributes
| 参数      | 说明          | 类型      | 可选值     | 默认值  | 回调参数 |
| --------- | ------------- | -------- | --------- | ------ | --------- |
| height | 走马灯的高度 | string | --  | -- | -- |
| initial-index | 初始状态激活的幻灯片的索引，从 0 开始 | number | -- | 0 | -- |
| trigger | 指示器的触发方式 | string | click | hover | -- |
| autoplay | 是否自动切换 | boolean | -- | true | -- |
| interval | 自动切换的时间间隔，单位为毫秒 | number | -- | hover | -- |
| indicator-position | 指示器的位置 | string | outside/none | -- | -- |
| arrow | 切换箭头的显示时机 | string | always/hover/never | hover | -- |
| type | 走马灯的类型 | string | card | -- | -- |
| loop | 是否循环显示 | boolean | -- | true | -- |
| direction | 走马灯展示的方向 | string | horizontal/vertical | horizontal | -- |
| carousel-list | 显示的数据 | array | -- | -- | -- |
| placement | 指示器显示位置| string | horizontal方向，可选值bottom/top vertical方向，可选值left/right | -- | -- |
| actions | 切换幻灯片事件，通过key区分事件具体类型 | Function | -- | Function(query) | -- |

### Carousel Methods
| 方法名     | 说明          | 使用方法(示例)      | 参数 |
| --------- | ------------- | -------- |--------|
| setActiveItem | 手动切换幻灯片 | this.$refs.carousel.setActiveItem() | 需要切换的幻灯片的索引，从 0 开始；或相应 to-carousel-item 的 name 属性值 |
| prev | 切换至上一张幻灯片 | this.$refs.carousel.prev() | --- |
| next | 切换至下一张幻灯片 | this.$refs.carousel.next() | --- |


### CarouselList Attributes
| 参数      | 说明          | 类型      | 可选值     | 默认值  | 回调参数 |
| --------- | ------------- | -------- | --------- | ------ | --------- |
| name | 幻灯片的名字，可用作 setActiveItem 的参数 | string | --------- | ------ | --------- |
| label | 该幻灯片所对应指示器的文本 | string | --------- | ------ | --------- |

### Slot
| name      | 说明          | 
| --------- | ------------- | 
| item-content | 每页幻灯片需要增加的自定义内容 | 

