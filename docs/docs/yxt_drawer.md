# Drawer  抽屉

----

### 基础用法

<script>
export default {
  data() {

    return { 
      dialogInfo: {
        btns: [
          { label: '取消', value: 'cancel', type: 'normal' },
          { label: '确定', value: 'sure', type: 'primary' },
        ],
      },
    }

  }, 
  methods: {

    handleAction(btn) {
      if (btn.value === 'onOk') {

      } else {
        this.btnClick();
      }
    },
    btnClick() {
      this.$refs.baseDrawer.openOrClose();
    }

  }
}
</script>

::: demo

```html
<to-button type="primary" @click="btnClick">点击打开 Drawer</to-button>
<yxt-drawer ref="baseDrawer" title="抽屉" :dialog-info="dialogInfo" :actions="handleAction">
    <span slot="title">抽屉标题</span>
    <template slot="content">
        <span>这是一段信息</span>
    </template>
</yxt-drawer>
<script>
    export default {
        data() {
            return {
                dialogInfo: {
                    btns: [{
                            label: '取消',
                            value: 'cancel',
                            type: 'normal'
                        },
                        {
                            label: '确定',
                            value: 'sure',
                            type: 'primary'
                        },
                    ],
                },
            }
        },
        methods: {
            handleAction(btn) {
                if (btn.value === 'onOk') {

                } else {
                    this.btnClick();
                }
            },
            btnClick() {
                this.$refs.baseDrawer.openOrClose();
            }
        }
    }
</script>
```

:::

### 参数说明

#### Attributes

| 参数  | 说明          | 类型      | 可选值                           | 默认值  |
|------ |-------------- |---------- |--------------------------------  |-------- |
| title | Dialog 的标题 | String | -- | -- |
| size | Drawer 窗体的大小 | number / string | -- | 30% | 
| visible | 是否显示 Drawer，支持 .sync 修饰符 | boolean | -- | false
| before-close | 关闭前的回调，会暂停 Drawer 的关闭 | function(done)，done 用于关闭 Drawer | -- | --
|close-on-press-escape |  是否可以通过按下 ESC 关闭 Drawer | boolean | true/false | true
| custom-class | Drawer 的自定义类名 | string | -- |--
|modal | 是否需要遮罩层 | boolean | true/false | true
|modal-append-to-body | 遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Drawer 的父元素上 | boolean | true/false | true
| direction | Drawer 打开的方向 | Direction | rtl / ltr / ttb / btt | rtl
|wrapperClosable | 点击遮罩层是否可以关闭 Drawer | boolean | true/false | true
|withHeader | 控制是否显示 header 栏, 默认为 true, 当此项为 false 时, title attribute 和 title slot 均不生效 | boolean | true/false | true
| isDestroyOnClose   | 控制是否在关闭 Drawer 之后将子元素全部销毁 | boolean | -- | false |
| isAppendToBody   | Drawer 自身是否插入至 body 元素上。嵌套的 Drawer 必须指定该属性并赋值为 true | boolean | -- | true |
| isShowClose   | 是否显示关闭按钮 | boolean | -- | false |
| isModalclose   | 点击遮罩层是否可以关闭 Drawer | boolean | -- | true |
| actions | 所有@click 事件，通过key区分事件具体类型 | Function | [ `见详细参数说明` ] | -- |

#### Slot

| name   | 说明          |
|------- |-------------- |
| content | Drawer 的内容 |
| tipslot | 自定义内容
