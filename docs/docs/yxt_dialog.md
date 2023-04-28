# Dialog  弹框

----

### 基础用法

<script>
export default {
  data() {

    return { 
      dialogConfig: {
        subhead: '编辑手机号',
        tipIcon: 'to-icon-warning'
      },
      tableData: [
        { id: '001', name: '测试名称', propertyId: '1', propertyName: '实物保障', gender: 'male' },
        { id: '002', name: '李斯2', propertyId: '2', propertyName: '机要通信用车', gender: 'male' },
        { id: '003', name: '李斯3', propertyId: '3', propertyName: '应急保障用车', gender: 'femal' },
        { id: '004', name: '李斯4', propertyId: '4', propertyName: '一般执法执勤', gender: 'male' },
        { id: '005', name: '李斯5', propertyId: '5', propertyName: '执法执勤特种专业', gender: 'male' }
      ],
      tableColumns: [
        { key: 'name', title: '姓名', width: 120 },
        { key: 'propertyName', title: '性质' },
        { key: 'gender', title: '性别', width: 120 }
      ],
    }

  }, 
  methods: {

    btnClick1() {
      this.$baseDialog({
        isVisible: true,
        dialgData: {
          content: '因您未绑定手机号，请联系管理员重置密码，给您带来不便，我们深表歉意！',
          subhead: '温馨提示',
          tipIcon: 'iconremind',
        },
        customBtns: [
          { label: '知道了', value: 'onCancel', type: 'primary' },
        ],
        onCancel: () => {
          console.log('onCancel====')
        }
      });
    },
    handleAction(btn) {
      if (btn.value === 'onOk') {

      } else {
        this.btnClick();
      }
    },
    handleAction2(btn) {
      if (btn.value === 'onOk') {

      } else {
        this.btnClick2();
      }
    },
    btnClick() {
      this.$refs.baseDialog.openOrClose();
    },
     btnClick2() {
      this.$refs.baseDialog2.openOrClose();
    },

  }
}
</script>

::: demo

```html
<template>
    <to-button type="primary" @click="btnClick">点击打开 Dialog</to-button>
    <yxt-dialog ref="baseDialog" title="提示" width="30%" :dialog-config="dialogConfig" :actions="handleAction">
        <span slot="content">这是一段信息</span>
        <span slot="footer" class="dialog-footer">
            <to-button @click="btnClick">取 消</to-button>
            <to-button type="primary" @click="btnClick">确 定</to-button>
        </span>
    </yxt-dialog>
</template>
<script>
    export default {
        data() {
            return {
                dialogConfig: {
                    subhead: '编辑手机号',
                    tipIcon: 'to-icon-warning'
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
                this.$refs.baseDialog.openOrClose();
            }
        }
    }
</script>
```

:::

### 嵌套用法（表格）

::: demo

```html
<template>
    <to-button type="primary" @click="btnClick2">点击打开 Dialog</to-button>
    <yxt-dialog ref="baseDialog2" title="提示" width="30%" :dialog-config="dialogConfig" :actions="handleAction2">
        <span slot="content">
            <yxt-table ref="BaseTableRef" :table-data="tableData" :table-columns="tableColumns">
            </yxt-table>
        </span>
        <span slot="footer" class="dialog-footer">
            <to-button @click="btnClick2">取 消</to-button>
            <to-button type="primary" @click="btnClick2">确 定</to-button>
        </span>
    </yxt-dialog>
</template>
<script>
    export default {
        data() {
            return {
                dialogConfig: {
                    subhead: '编辑手机号',
                    tipIcon: 'to-icon-warning'
                },
                tableData: [{
                        id: '001',
                        name: '测试名称',
                        propertyId: '1',
                        propertyName: '实物保障',
                        gender: 'male'
                    },
                    {
                        id: '002',
                        name: '李斯2',
                        propertyId: '2',
                        propertyName: '机要通信用车',
                        gender: 'male'
                    },
                    {
                        id: '003',
                        name: '李斯3',
                        propertyId: '3',
                        propertyName: '应急保障用车',
                        gender: 'femal'
                    },
                    {
                        id: '004',
                        name: '李斯4',
                        propertyId: '4',
                        propertyName: '一般执法执勤',
                        gender: 'male'
                    },
                    {
                        id: '005',
                        name: '李斯5',
                        propertyId: '5',
                        propertyName: '执法执勤特种专业',
                        gender: 'male'
                    }
                ],
                tableColumns: [{
                        key: 'name',
                        title: '姓名',
                        width: 120
                    },
                    {
                        key: 'propertyName',
                        title: '性质'
                    },
                    {
                        key: 'gender',
                        title: '性别',
                        width: 120
                    }
                ],
            }
        },
        methods: {
            handleAction2(btn) {
                if (btn.value === 'onOk') {

                } else {
                    this.btnClick2();
                }
            },
            btnClick2() {
                this.$refs.baseDialog2.openOrClose();
            }
        }
    }
</script>
```

:::

### 挂载用法

<script>
</script>
<div class="demo-block">
  <to-button type="primary" @click="btnClick1">点击打开 挂载Dialog</to-button>
</div>

              

::: demo

```js
// 需要在全局项目中配置下面代码 
import BaseDialog from 'xiuu-lib/packages/Base_Dialog';
// 创建Dialog构造器
let DialogConstrutor = Vue.extend(BaseDialog);
let instance;
const dialog = function(options = {}) {
    // 设置默认参数为对象，如果参数为字符串，参数中message属性等于该参数，回调函数为空
    if (typeof options === 'string') {
        options = {
            content: options,
            onOk: () => {},
            onCancel: () => {}
        };
    }
    // 创建实例
    instance = new DialogConstrutor({
        data: options
    });
    // 将实例挂载到body下
    document.body.appendChild(instance.$mount().$el);
};
Vue.prototype.$baseDialog = dialog;
```



```html
<script>
    export default {
        data() {
            return {}
        },
        methods: {
            btnClick1() {
                this.$baseDialog({
                    isVisible: true,
                    dialgData: {
                        content: '因您未绑定手机号，请联系管理员重置密码，给您带来不便，我们深表歉意！',
                        subhead: '温馨提示',
                        tipIcon: 'iconremind',
                    },
                    customBtns: [{
                        label: '知道了',
                        value: 'onCancel',
                        type: 'primary'
                    }, ]
                });
            }
        }
    }
</script>
<div class="demo-block">
    <to-button type="primary" @click="btnClick1">点击打开 挂载Dialog</to-button>
</div>
```

:::

### 参数说明

#### Attributes

| 参数  | 说明          | 类型      | 可选值                           | 默认值  |
|------ |-------------- |---------- |--------------------------------  |-------- |
|modalAppendToBody | 遮罩层是否插入至 body 元素上，若为 false，则遮罩层会插入至 Dialog 的父元素上 | boolean| -- |true
|customClass | Dialog 的自定义类名 | string | -- | --
|center | 是否对头部和底部采用居中布局| boolean | -- | false
|isDestroyOnClose | 关闭时销毁 Dialog 中的元素 |boolean | -- | false
|isAppendToBody | Dialog 自身是否插入至 body 元素上。嵌套的 Dialog 必须指定该属性并赋值为 true | boolean | -- |false
|isShowClose | 是否显示关闭按钮 | boolean | true/false | true
| modal | 是否需要遮罩层 | boolean | true/false | false
| isModalclose | 公共弹窗是否可以通过点击modal关闭Dialog | Boolean | true/false | true
| isCloseOnPressEscape | 是否可以通过ESC关闭Dialog | boolean | true|false | false
| btns | 按钮组数据 | array | -- | --
| dialogConfig | dialog配置 | object 
|needBeforeClose | 是否需要在关闭前调用回调函数, 关闭前的回调，会暂停 Dialog 的关闭 | boolean | true/false | true
| title | Dialog 的标题 | String | -- | -- |
| width | Dialog 的宽度 | String | -- | 50% | 
| top   | Dialog CSS 中的 margin-top 值 | String | -- | 15vh |
| actions | 所有@click 事件，通过key区分事件具体类型 | Function | [ `见详细参数说明` ] | -- |

#### Events 

| 方法   | 说明          
|------- |------------------------------------------------------------------------------
| actions  | 所有@click 事件，通过key区分事件具体类型 | Function | [ `见详细参数说明` ] 

#### Slot

| name   | 说明          |
|------- |-------------- |
| title  | Dialog 标题区的内容 |
| footer | Dialog 按钮操作区的内容 |
