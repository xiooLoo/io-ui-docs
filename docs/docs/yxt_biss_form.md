## YxtBissForm 高级表单

YxtBissForm 高级表单用于创建的表单,有多个yxt-from封装而来  


### 

带有`card`风格的超级组件

:::demo YxtBissForm是多个yxt-form封装而来，每个setion就是一个form
```html
<div class="demo-block1">
  <yxt-biss-form
      :is-show-btns="true"
      :section-props = "sectionProps"
      :actions="handleFormActions"
      :foot-style="{position: 'inherit', paddingRight: '24px', boxSizing:'border-box'}"
    >
    </yxt-biss-form>
</div>
</template>
<script>
    export default {
        data() {
            return {
              sectionProps: [
                {
                  title: '基础信息1',
                  rowSpan: 3,
                  isAutoFix: false,
                  formKey: {},
                  labelPosition: 'top',
                  gutter: 36,
                  formItems: [
                    {
                      id: 'applicationName',
                      type: 'input',
                      inputType: 'input',
                      label: '应用名称',
                      isAlwaysShow: true,
                      rules: [{
                        required: true,
                        message: '请输入应用名称',
                        trigger: 'blur'
                      }]
                    },
                    {
                      id: 'applicationName2',
                      type: 'input',
                      inputType: 'input',
                      label: '应用名称',
                      isAlwaysShow: true,
                      rules: [{
                        required: true,
                        message: '请输入应用名称',
                        trigger: 'blur'
                      }]
                    }
                  ]
                },
                {
                  title: '基础信息1',
                  gutter: 36,
                  rowSpan: 3,
                  isAutoFix: false,
                  formKey: {},
                  labelPosition: 'top',
                  formItems: [
                    {
                      id: 'applicationName',
                      type: 'input',
                      inputType: 'input',
                      label: '应用名称',
                      isAlwaysShow: true,
                      rules: [{
                        required: true,
                        message: '请输入应用名称',
                        trigger: 'blur'
                      }]
                    },
                    {
                      id: 'applicationName2',
                      type: 'input',
                      inputType: 'input',
                      label: '应用名称',
                      isAlwaysShow: true,
                      rules: [{
                        required: true,
                        message: '请输入应用名称',
                        trigger: 'blur'
                      }]
                    }
                  ]
                },
                {
                  title: '基础信息2',
                  gutter: 36,
                  rowSpan: 3,
                  formKey: {},
                  labelPosition: 'top',
                  isAutoFix: false,
                  formItems: [
                    {
                      id: 'applicationName12',
                      type: 'input',
                      inputType: 'input',
                      label: '应用名称',
                      isAlwaysShow: true,
                      rules: [{
                        required: true,
                        message: '请输入应用名称',
                        trigger: 'blur'
                      }]
                    },
                    {
                      id: 'applicationName33',
                      type: 'input',
                      inputType: 'input',
                      label: '应用名称',
                      isAlwaysShow: true,
                      rules: [{
                        required: true,
                        message: '请输入应用名称',
                        trigger: 'blur'
                      }]
                    },
                    {
                      id: 'applicationName44',
                      type: 'input',
                      inputType: 'input',
                      label: '应用名称',
                      isAlwaysShow: true,
                      rules: [{
                        required: true,
                        message: '请输入应用名称',
                        trigger: 'blur'
                      }]
                    }
                  ]
                }
              ]
            }
        },
        methods: {
            handleTableSotp() {
              console.log('handleTableSotp')
            },
            handleFormActions(key, obj) {
              console.log('=======:', key)
              console.log('=======obj:', obj)
          },
        }
    }
</script>
<style scope lan="less">

  .demo-block1 {
    display: relative;
    padding: 24px;
    background: #F0F2F5;
  }
</style>
```

:::
<br>

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|----------|-------- |---------- |-------------  |-------- |
|card-style| 是否带有卡片样式 | Boolean | -- | true
|is-show-btns| 控制页脚提交按钮显示隐私 | Boolean | -- | false
|sectionProps| 表单数据 | Array | -- | --
|CONST_MIN_WIDTH   | 控制样式| 
|isFormDisabled | 控制表单是否禁用 | Boolean | true / false | false
|labelWidth | 宽度控制 | string | 
|isInline |是否同行| Boolean | true / false | true
|labelPosition |文字对齐方式 | string | | right
|formKey | 表单字段属性 | object | 
|formItems | 表单字段集合 | array |
|rowSpan| 一行默认展示的input数量 | number | | 3
|showExpand | 是否展示折叠按钮 | boolean | true/false | false
|formBtnsFlex | 按钮对齐方式 | string | | right
|formBtns | 按钮集合| array |
|typeLimit | 图片上传格式限制 | array | png / jpg / jpeg / gif
| isAutoFix | 样式控制 |boolean | true / false | true
| isShowBtns | 是否显示按钮 | boolean | true / false | true
|model | 表单数据对象 | 表单数据对象 |object | -- | --
|rules | 表单验证规则 | object | -- | --
|label-suffix | 表单域标签的后缀 | string | -- | --
|hide-required-asterisk | 是否隐藏必填字段的标签旁边的红色星号 | boolean | -- | false
|show-message | 是否显示校验错误信息 | boolean | -- | false
|status-icon | 是否在输入框中显示校验结果反馈图标 | boolean | --| false
|validate-on-rule-change | 是否在 rules 属性改变后立即触发一次验证 | -- | true
|size | 用于控制该表单内组件的尺寸 | string | medium / small / mini | --
### SectionProps
__YxtBissForm是多个yxt-form封装而来，每个setion就是一个form。通过对sectionProps数据集的配置可以扩展不同的setion__   
同时组件内部支持扩展不同Yxt组件，按照一定的规则在sectionProps职中进行扩展就行

sectionProps是`YxtBissForm`组件的数据集,它是一个Array类型，它的每个成员都是一个对象，对象内部的配置就是`YxtForm`组件的所有props

## slots
__用法与yxt-form一致__

### Methods

| 参数      | 说明    |   参数
|----------|-------- |----------
| actions   | 页脚事件触发回调



