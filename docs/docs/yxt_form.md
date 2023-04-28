# yxt-form

### 基础用法

::: demo  表单类型根据programFormItems组内各对象的type类型来区分是什么类型的表单，rules为表单的具体校验规则

```html
<template>
    <div>
        <to-button v-for="(btns,index) in btnList" :class="currentIndex==index?'actives':''" :key="index" @click="changeTab(index)">{{btns.name}}</to-button>
        <div>
            <yxt-form :label-position="labelLosition" ref="drawerForm" @getFormValues="getFormValue" @resetForm="resetForm" label-width="170px" :is-auto-fix="false" :form-items="programFormItems" :form-key="formKey" show-expand :row-span="1" area-e-n="surface" :actions="handleFormActions" show-message>
                <div slot="subtags" v-if="resultList && resultList.length">
                    <yxt-table :data="resultList" :table-columns="tableColumns">
                    </yxt-table>
                </div>
            </yxt-form>

            <yxt-dialog ref="baseDialog2" title="提示" width="30%" :actions="handleAction2">
                <span slot="content">
                    <yxt-table ref="BaseTableRef" :zero-types="zeroTypes" :data="tableData" :table-columns="tableColumns" @selection-change="handleSelectionChange">
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
                rowSpan: 3,
                formKey: {},
                labelLosition: 'right',
                btnList: [{
                        name: '左对齐',
                        labelLosition: 'left'
                    },
                    {
                        name: '右对齐',
                        labelLosition: 'right'
                    },
                    {
                        name: '顶端对齐',
                        labelLosition: 'top'
                    },
                ],
                currentIndex: 1,
                zeroTypes: [{
                        label: '多选',
                        type: 'selection',
                        width: '50',
                        align: 'center',
                        fixed: 'left'
                    },
                    {
                        label: '序号',
                        type: 'index',
                        width: '50',
                        align: 'center',
                        fixed: 'left'
                    },
                ],
                tableData: [{
                        id: '001',
                        name: '测试名称',
                        propertyId: '1',
                        propertyName: '实物保障',
                        gender: 'male',

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
                programFormItems: [{
                        id: 'applicationName',
                        type: 'input',
                        inputType: 'input',
                        label: '应用名称',
                        isAlwaysShow: true,
                        rules: [{
                            required: true,
                            message: '请输入应用名称',
                            trigger: 'blur'
                        }, ]
                    },
                    {
                        id: 'status',
                        type: 'select',
                        inputType: 'select',
                        label: '状态',
                        isAlwaysShow: true,
                        rules: [{
                            required: true,
                            message: '请选择状态',
                            trigger: 'blur'
                        }, ],
                        arr: [{
                                label: '正常',
                                value: '1'
                            },
                            {
                                label: '停售',
                                value: '2'
                            },
                        ]
                    },
                    {
                        id: 'daterange',
                        type: 'daterange',
                        inputType: 'daterange',
                        label: '日期',
                        isAlwaysShow: true,
                        maxlength: 1000,
                        rules: [{
                            required: true,
                            message: '请选择日期',
                            trigger: 'blur'
                        }, ]
                    },
                    {
                        id: 'timeRange',
                        type: 'timeRange',
                        inputType: 'timeRange',
                        label: '时间',
                        isAlwaysShow: true,
                        maxlength: 1000,
                        rules: [{
                            required: true,
                            message: '请选择时间',
                            trigger: 'blur'
                        }, ]
                    },
                    {
                        id: 'checkbox',
                        type: 'checkbox',
                        inputType: 'checkbox',
                        label: '应用类型',
                        isAlwaysShow: true,
                        arr: [{
                                label: 'App',
                                value: '1'
                            },
                            {
                                label: 'Admin',
                                value: '2'
                            },
                            {
                                label: '小程序',
                                value: '3'
                            },
                        ],
                        rules: [{
                            required: true,
                            message: '请选择应用类型',
                            trigger: 'blur'
                        }, ]
                    },
                    {
                        id: 'radio',
                        type: 'radio',
                        inputType: 'radio',
                        label: '应用来源',
                        arr: [{
                                label: '来源一',
                                value: '1'
                            },
                            {
                                label: '来源二',
                                value: '2'
                            }
                        ],
                        rules: [{
                            required: true,
                            message: '请选择应用来源',
                            trigger: 'blur'
                        }, ]
                    },
                    {
                        id: 'inputNumber',
                        type: 'inputNumber',
                        inputType: 'inputNumber',
                        label: '计数器',
                        rules: [{
                            required: true,
                            message: '请输入数字',
                            trigger: 'blur'
                        }, ]
                    },
                    {
                        id: 'crtTimeBlock',
                        type: 'betwDate',
                        inputType: 'data',
                        label: '新建时间',
                        span: 12,
                        sufix: '',
                        betws: [{
                                id: 'crtTimeStart',
                                type: 'datetime',
                                format: 'yyyy-MM-dd',
                                valueFormat: 'yyyy-MM-dd HH:mm:ss',
                                span: 10,
                                placeholder: '请选择日期'
                            },
                            {
                                id: 'crtTimeEnd',
                                type: 'datetime',
                                format: 'yyyy-MM-dd',
                                valueFormat: 'yyyy-MM-dd HH:mm:ss',
                                span: 10,
                                placeholder: '请选择日期'
                            }
                        ]
                    },
                    {
                        id: 'roleGroupBlock',
                        type: 'betwItem',
                        label: '角色类型',
                        span: 8,
                        sufix: '',
                        betws: [{
                                id: 'roleGroupType',
                                type: 'select',
                                span: 10,
                                placeholder: '请选择角色类型',
                                arr: [{
                                        value: 1,
                                        label: '角色类型1'
                                    },
                                    {
                                        value: 2,
                                        label: '角色类型2'
                                    },
                                ]
                            },
                            {
                                id: 'businessType',
                                type: 'select',
                                span: 10,
                                placeholder: '请设置权限范围',
                                arr: [{
                                        value: 0,
                                        label: '全部'
                                    },
                                    {
                                        value: 1,
                                        label: '基础单位'
                                    },
                                    {
                                        value: 2,
                                        label: '三方公司'
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: 'subtags',
                        type: 'subtags',
                        label: '下放范围',
                        isAlwaysShow: true,
                        btn: {
                            isNext: true,
                            type: 'text',
                            size: 'mini',
                            label: '添加范围'
                        },
                        rules: [{
                            required: true,
                            message: '请添加下放范围',
                            trigger: 'blur'
                        }],
                        arrtags: []
                    },
                    {
                        id: 'areaCode',
                        type: 'cascader',
                        label: '部署区域',
                        isAlwaysShow: true,
                        options: [{
                            code: 2000,
                            name: '陕西',
                            children: [{
                                code: 222112,
                                name: '西安',
                                children: [{
                                    code: 3243,
                                    name: '周至'
                                }, {
                                    code: 3242,
                                    name: '高陵'
                                }]
                            }, {
                                code: 3243,
                                name: '咸阳'
                            }, ]
                        }, {
                            code: 32942,
                            name: '广州'
                        }],
                        placeholder: '请选择部署区域',
                        props: {
                            value: 'code',
                            label: 'name',
                            emitPath: false
                        },
                        rules: [{
                            required: true,
                            message: '请选择部署区域',
                            trigger: 'blur'
                        }, ]
                    },

                    {
                        id: 'upload',
                        type: 'upload',
                        inputType: 'upload',
                        label: '上传',
                        rules: [{
                            required: false,
                            message: '请输上传文件',
                            trigger: 'blur'
                        }, ]
                    },
                    {
                        id: 'switch',
                        type: 'switch',
                        inputType: 'switch',
                        label: '是否上架',
                        rules: [{
                            required: false,
                            message: '请选择是否上架',
                            trigger: 'blur'
                        }, ]
                    },
                    {
                        id: 'description',
                        type: 'input',
                        inputType: 'textarea',
                        label: '应用描述',
                        maxlength: 1000,
                        rules: [{
                            required: false,
                            message: '请输入应用描述',
                            trigger: 'blur'
                        }, ]
                    },

                ],
                currentList: [],
                resultList: []
            }
        },
        mounted() {
            this.initForm()
        },
        methods: {
            initForm() {
                let keyObj = {}
                this.programFormItems.forEach(item => {
                    keyObj[item.id] = ''
                })
                this.formKey = keyObj
            },
            handleFormActions(key, obj) {
                if (key == 'handleBtnAction') {
                    this.btnClick2()
                }
            },
            getFormValue(e) {
                console.log('提交表单回调信息：', e)

            },
            resetForm() {},
            handleAction2(btn) {
                if (btn.value === 'onOk') {
                    this.resultList = this.currentList
                    this.btnClick2();

                } else {
                    this.btnClick2();
                }
            },
            btnClick2() {
                this.$refs.baseDialog2.openOrClose();
            },
            handleSelectionChange(val) {
                console.log(val, 'val')
                this.currentList = val
            },
            changeTab(index) {
                this.currentIndex = index
                this.labelLosition = this.btnList[index].labelLosition
            }
        }

    }
</script>
<style scoped>
    .actives {
        color: #fff;
        background: #409eff;
    }
</style>
```

:::

### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|----------|-------- |---------- |-------------  |-------- |
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

### Events

| 参数      | 说明    |   回调参数
|----------|-------- |----------
|validate | 任一表单项被校验后触发 | 被校验的表单项 prop 值，校验是否通过，错误消息（如果存在）

### Methods

| 参数      | 说明    |   参数
|----------|-------- |----------
| actions   | 回调函数 
|validate | 对整个表单进行校验的方法，参数为一个回调函数。该回调函数会在校验结束后被调用，并传入两个参数：是否校验成功和未通过校验的字段。若不传入回调函数，则会返回一个 promise |Function(callback: Function(boolean, object))
|validateField | 对部分表单字段进行校验的方法 | Function(props: array | string, callback: Function(errorMessage: string))
| resetFields | 对整个表单进行重置，将所有字段值重置为初始值并移除校验结果 | --
|clearValidate | 移除表单项的校验结果。传入待移除的表单项的 prop 属性或者 prop 组成的数组，如不传则移除整个表单的校验结果 | Function(props: array | string)

### Form-Item Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|----------|-------- |---------- |-------------  |-------- |
| prop | 表单域 model 字段，在使用 validate、resetFields 方法的情况下，该属性是必填的 |string | 传入 Form 组件的 model 中的字段 |--
| label | 标签文本 | string | -- |--
| label-width	| 表单域标签的的宽度，例如 '50px'。支持 auto。 | string | -- | --
|required | 是否必填，如不设置，则会根据校验规则自动生成 | boolean |-- | false
| rules | 表单验证规则 | object | -- | --
| error | 表单域验证错误信息, 设置该值会使表单验证状态变为error，并显示该错误信息 | string | -- |--
|show-message | 是否显示校验错误信息 | boolean | -- | true
|inline-message | 以行内形式展示校验信息 | boolean | -- |  false
| size | 用于控制该表单域下组件的尺寸	| string | medium / small / mini |--

### Form-Item Slot

|name | 说明 | 
|-----------|-----------
|-|Form-Item的内容
|label |标签文本的内容

### Form-Item Scoped Slot

|name | 说明 | 
|-----------|-----------
|error |自定义表单校验信息的显示方式，参数为 { error }

### Form-Item Methods

|方法名 | 说明 | 参数
|------------|-------------|------------
|resetField | 对该表单项进行重置，将其值重置为初始值并移除校验结果 | --
|clearValidate | 移除该表单项的校验结果 | -----
