## YxtSuperPage 查询页面

一个由yxt-form表单和yxt-biss-table表格组成的页面   
一个组件就是一个页面
### 

带有`card`风格的超级组件

:::demo 兼容yxt-form表单和yxt-biss-table表格的所有属性。特殊属性如两者共同属性，在使用属性时只需在组件前面添加前缀。如size属性，`form-size`、`table-size`
```html
<div class="demo-block1">
 <yxt-biss-page
      show-expand
      :form-items="searchFormItems"
      show-action
      table-head-title="表格头部的标题"
      :head-btn-list="headBtnList"
      :table-border="false"
      :table-columns="tableColumns"
      :table-data="tableData"
      :pagination-config="paginationConfig"
      :actions="actions"
    >
      <template slot="text-extra">
        <to-button
          type="primary"
          size="small"
        >
          右侧按钮
        </to-button>
      </template>
      <template slot="text-label123">
        <i class="to-icon-user"></i>
        用户名
      </template>
       <template>
         <to-button
          type="text"
          size="small"
          class="changeAccount-box"
          @click="handleTableSotp"
        >
          停用
        </to-button>
      </template>
      <template slot="isscope" slot-scope="slotProps">
        <div v-if="slotProps.data.data.rowKey === 'status'">
            <div class="stop" v-if="slotProps.data.data.row.status == 0">停用</div>
            <div class="start" v-else>启用</div>
        </div>
        <div v-else-if="slotProps.data.data.rowKey === 'propertyId'">
          {{slotProps.data.data.row.propertyName}}
        </div>
      </template>
         <template slot="customTableColHead">
          模板Code
        <to-tooltip>
           <div slot="content">模版的唯一标识，可在业务侧<br/>配置模版CODE，调用模版信息。</div>
            <i class="to-icon-warning-outline"></i>
        </to-tooltip>
      </template>
    </yxt-biss-page>
</div>
</template>
<script>
          const testFilters = [{
          id: 986,
          keyCode: 'DICT_VEHICLE_PROPERTIES',
          text: '实物保障',
          value: '1',
          valueCode: 'DICT_VEHICLE_PROPERTIES_1'
        },
        {
          id: 987,
          keyCode: 'DICT_VEHICLE_PROPERTIES',
          text: '机要通信用车',
          value: '2',
          valueCode: 'DICT_VEHICLE_PROPERTIES_2'
        },
        {
          id: 988,
          keyCode: 'DICT_VEHICLE_PROPERTIES',
          text: '应急保障用车',
          value: '3',
          valueCode: 'DICT_VEHICLE_PROPERTIES_3'
        },
        {
          id: 989,
          keyCode: 'DICT_VEHICLE_PROPERTIES',
          text: '一般执法执勤',
          value: '4',
          valueCode: 'DICT_VEHICLE_PROPERTIES_4'
        },
        {
          id: 990,
          keyCode: 'DICT_VEHICLE_PROPERTIES',
          text: '执法执勤特种专业',
          value: '5',
          valueCode: 'DICT_VEHICLE_PROPERTIES_5'
        }]
    export default {
        data() {
            return {
                // form属性
                searchFormItems: [
                  {
                    id: 'applicationName1',
                    type: 'input',
                    inputType: 'input',
                    label: '应用名称1',
                    isAlwaysShow: false,
                    rules: [{
                      required: true,
                      message: '请输入应用名称',
                      trigger: 'blur'
                    }]
                  },
                  {
                    id: 'applicationName',
                    type: 'input',
                    inputType: 'input',
                    label: '应用名称',
                    isAlwaysShow: false,
                    rules: [{
                      required: true,
                      message: '请输入应用名称',
                      trigger: 'blur'
                    }]
                  }],
                // 表格属性
                paginationConfig: {
                    currentPage: 1, // 当前页
                    currentSize: 10, // 共多少页
                    pageSizes: [10, 20, 30, 40, 50],
                    total: 7, // 总条数
                    layout: 'total, sizes, prev, pager, next, jumper'
                },
                headBtnList: [{label:'创建模板', value:'create',code:'001', type: 'primary'}],
                tableData: [{
                    id: '001',
                    name: '公务用车',
                    propertyId: '1',
                    propertyName: '实物保障',
                    mode: 'MSTM656890865',
                    status: 0,
                    gender: '社会化租赁申请用车流程通知1'
                  },
                  {
                    id: '002',
                    name: '机关后勤',
                    mode: 'MSTM656890865',
                    propertyId: '2',
                    status: 1,
                    propertyName: '机要通信用车',
                    gender: '社会化租赁申请用车流程通知2'
                  },
                  {
                    id: '003',
                    name: '水利',
                    propertyId: '3',
                    mode: 'MSTM656890865',
                    status: 1,
                    propertyName: '应急保障用车',
                    gender: '社会化租赁申请用车流程通知'
                  },
                  {
                    id: '004',
                    name: '消防',
                    propertyId: '4',
                    mode: 'MSTM656890865',
                    status: 1,
                    propertyName: '一般执法执勤',
                    gender: '社会化租赁申请用车流程通知'
                  },
                  {
                    id: '005',
                    name: '其他分类',
                    mode: 'MSTM656890865',
                    propertyId: '5',
                    status: 1,
                    propertyName: '执法执勤特种专业',
                    gender: '社会化租赁申请用车流程通知'
                  },
                  {
                    id: '006',
                    name: '其他分类',
                    mode: 'MSTM656890865',
                    propertyId: '2',
                    status: 1,
                    propertyName: '机要通信用车2',
                    gender: '社会化租赁申请用车流程通知'
                  }
                  ],
                tableColumns: [
                  {
                    key: 'mode',
                    title: '模版名称',
                    customTableColHead: true
                  },
                  {
                    key: 'gender',
                    title: '申请通知'
                  },
                  {
                    key: 'propertyId',
                    title: '业务分类',
                    filters: testFilters,
                    columnKey: 'propertyId',
                    sortable: true,
                    filtermultiple: true,
                    formatter: value => {
                      if (value.propertyId == 1) {
                        return '实物保障'
                      } else if (value.propertyId == 2) {
                        return '机要通信用车'
                      } else if (value.propertyId == 3) {
                        return '应急保障用车'
                      } else if (value.propertyId == 4) {
                        return '一般执法执勤'
                      } else {
                        return '执法执勤特种专业'
                      }
                    }
                  },
                  {
                    key: 'status',
                    title: '状态',
                    isscope: true
                  },
                  {
                    key: 'name',
                    title: '操作人'
                  }
                ]
            }
        },
        methods: {
            handleTableActions(data) {

            },
            handleTableSotp() {
              console.log('handleTableSotp')
            },
            actions(key,data) {
              console.log('事件触发的回调===', key,data);
            }
        }
    }
</script>
<style >
  .demo-block1 {
    padding: 24px;
    background: #F0F2F5;
    }
      .start,.stop {
        position: relative;
        }
      .start::before {
        display: inline-block;
        content: "•";
        font-size: 22px;
        color: #53c419;
        margin-right: 0px;
        position: absolute;
        left: -14px;
      }
      .stop::before {
        display: inline-block;
        content: "•";
        font-size: 22px;
        color: #53c419;
        margin-right: 0px;
        position: absolute;
        left: -14px;
      }
      .stop::before {
        color: #b8bcc4;
      }
</style>
```

:::
<br>

### 需求说明一点，组件兼容yxt-form表单和yxt-biss-table表格的所有属性,文档教程只列出原有组件没有属性，如需查找完整属性请到原有组件中查看
### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|----------|-------- |---------- |-------------  |-------- |
|table-data| table组件接受的数据 | array | -- | --
|gutter| 控制form列与列之间的间距 | number | -- | 48
|form-size | 用于控制该表单内组件的尺寸 | string | medium / small / mini | --
|table-size | Table 的尺寸 | string | medium / small / mini | --
|table-head-title | 表格头部标题,没有时不显示表格头部 | string | -- | --
|head-btn-list| 表格头部右侧按钮 | array | [-- | --
|is-show-suffix| 控制表格头部右侧图标按钮的显示 | boolean | true / false | true

### Form-Attributes
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

# Table-Attributes
|事件名 | 说明 | 参数
|-------|--------|--------------
|select	|当用户手动勾选数据行的 Checkbox 时触发的事件	|selection, row
|select-all	|当用户手动勾选全选 Checkbox 时触发的事件	|selection
|selection-change	|当选择项发生变化时会触发该事件	|selection
|cell-mouse-enter	|当单元格 hover 进入时会触发该事件|	row, column, cell, event
|cell-mouse-leave	|当单元格 hover 退出时会触发该事件|	row, column, cell, event
|cell-click	|当某个单元格被点击时会触发该事件	|row, column, cell, event
|cell-dblclick	|当某个单元格被双击击时会触发该事件|	row, column, cell, event
|row-click	|当某一行被点击时会触发该事件	|row, column, event
|row-contextmenu	|当某一行被鼠标右键点击时会触发该事件	|row, column, event
|row-dblclick	|当某一行被双击时会触发该事件	|row, column, event
|header-click	|当某一列的表头被点击时会触发该事件|	column, event
|header-contextmenu|	当某一列的表头被鼠标右键点击时触发该事件|	column, event
|sort-change	|当表格的排序条件发生变化的时候会触发该事件|	{ column, prop, order }
|filter-change|	当表格的筛选条件发生变化的时候会触发该事件，参数的值是一个对象，对象的 key 是 column 的 columnKey，对应的 value 为用户选择的筛选条件的数组。|	filters
|current-change|	当表格的当前行发生变化的时候会触发该事件，如果要高亮当前行，请打开表格的|| highlight-current-row 属性	|currentRow, oldCurrentRow
|header-dragend	|当拖动表头改变了列的宽度的时候会触发该事件	|newWidth, oldWidth, column, event
|expand-change	|当用户对某一行展开或者关闭的时候会触发该事件（展开行时，回调的第二个参数为 expandedRows；树形表格时第二参数为 expanded）|	row, (expandedRows | expanded)

### Methods

| 参数      | 说明    |   参数
|----------|-------- |----------
| actions   | 所有事件触发的回调函数


### Slot
yxt-biss-page组件集成了yxt-form及yxt-table的插槽
需要重申的是yxt-biss-page将默认插槽交给了yxt-table组件