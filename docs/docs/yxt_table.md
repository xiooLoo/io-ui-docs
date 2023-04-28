# YxtTable 表格

----

<script>
const testFilters = [
  {id: 986, keyCode: "DICT_VEHICLE_PROPERTIES", text: "实物保障", value:"1", valueCode: "DICT_VEHICLE_PROPERTIES_1" }, 
  {id: 987, keyCode: "DICT_VEHICLE_PROPERTIES", text: "机要通信用车", value: "2", valueCode: "DICT_VEHICLE_PROPERTIES_2" }, 
  {id: 988, keyCode: "DICT_VEHICLE_PROPERTIES", text: "应急保障用车", value: "3", valueCode: "DICT_VEHICLE_PROPERTIES_3" }, 
  {id: 989, keyCode: "DICT_VEHICLE_PROPERTIES", text: "一般执法执勤", value: "4", valueCode: "DICT_VEHICLE_PROPERTIES_4" }, 
  {id: 990, keyCode: "DICT_VEHICLE_PROPERTIES", text: "执法执勤特种专业", value: "5", valueCode: "DICT_VEHICLE_PROPERTIES_5" }
]
export default{
  data() {

    return {
      tableData: [
        { id: '001', name: '测试名称', propertyId: '1', propertyName: '实物保障', gender: 'male' },
        { id: '002', name: '李斯2', propertyId: '2', propertyName: '机要通信用车', gender: 'male' },
        { id: '003', name: '李斯3', propertyId: '3', propertyName: '应急保障用车', gender: 'femal' },
        { id: '004', name: '李斯4', propertyId: '4', propertyName: '一般执法执勤', gender: 'male' },
        { id: '005', name: '李斯5', propertyId: '5', propertyName: '执法执勤特种专业', gender: 'male' }
      ],
      tableDataTree: [{
          id: 1,
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          id: 2,
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          id: 3,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          hasChild: true
        }, {
          id: 4,
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        tableColumnsTree: [
        { key: 'id', title: 'ID', width: 120,sortable:true},
        { key: 'date', title: '日期'},
        { key: 'name', title: '姓名'},
        { key: 'address', title: '地址'}
      ],
      tableDataSums:[
        {
            id: '001',num1:100,num2:200,num3:300
        },
        {
            id: '002',num1:100,num2:200,num3:300
        },
        {
            id: '003',num1:100,num2:200,num3:300
        },
        {
            id: '004',num1:100,num2:200,num3:300
        },
      ],
      tableColumnsSums: [
        { key: 'id', title: 'ID', width: 120,sortable:true},
        { key: 'num1', title: '数据1'},
        { key: 'num2', title: '数据2'},
        { key: 'num3', title: '数据3'}
      ],
      tableColumns: [
        { key: 'name', title: '姓名', width: 120,sortable:true},
        { key: 'propertyName', title: '性质'},
        { key: 'gender', title: '性别',width: 120 }
      ],
      tableColumns1: [
        { key: 'name', title: '姓名', width: 120,sortable:true},
        { key: 'propertyName', title: '性质',filters: testFilters},
        { key: 'gender', title: '性别',width: 120 }
      ],
      zeroTypes: [
        { label: '多选', type: 'selection', width: '50', align: 'center', fixed: 'left' },
        { label: '序号', type: 'index', width: '50', align: 'center', fixed: 'left' }
      ],
      tableBtns: [
        { label: '删除', value:'del', type: 'primary', code:'front_task_manage:delete' },
        { label: '编辑', value:'edit', type: 'normal', code:'front_task_manage:edit' },
        { label: '预览', value:'preview', code:'front_task_manage:preview' },
        { label: '详情', value:'det', type: 'text', code:'front_task_manage:detail' },
      ],
      paginationConfig: {
        currentPage: 1,
        currentSize: 10,
        pageSizes: [ 10, 20, 30, 40, 50 ],
        total: 0,
        layout: 'prev, pager, next, sizes, jumper',
      },
      actionQuery: {
        label: '操作',
        width: '300',
        minWidth: '200',
        align: 'left',
        fixed: 'right'
      },
      isLoading: false
    }

  }, 
  mounted() {

    let _this = this
    // _this.$refs.baseTableDemoRef.isloadingTime(5000, true)
    // 或
    // _this.isLoading = false
    // setTimeout(() => {
    //   this.isLoading = false
    // }, 1000);

  }, 
  methods: {

    handleTableActions(query) {
      if(query.key === 'handlePageChange'){
        console.log('修改page~~')
      } else if(query.key === 'handleSizeChange'){
        console.log('修改pageSize~~')
      } else if (query.key === 'filterChange') {
        console.log( `筛选 ${query.obj.columnKey} 列` , query.obj.codes)
      } else {
        //TODO: 详细列出所有的内部事件
        // console.log('其他操作，具体见组件内~~')
      }
    },
    cmpCNName(propertyId) {
      if (propertyId == 1) return '实物保障'
      else if (propertyId == 2) return '机要通信用车'
      else if (propertyId == 3) return '应急保障用车'
      else if (propertyId == 4) return '一般执法执勤'
      else return '执法执勤特种专业'
    },
     tableRowClassName({row,rowIndex}) {
        if (rowIndex === 1) {
            return 'warning-row';
        } else if (rowIndex === 3) {
            return 'success-row';
        }
        return '';
    },
    arraySpanMethod({ row, column, rowIndex, columnIndex }) {
        if (rowIndex % 2 === 0) {
          if (columnIndex === 0) {
            return [1, 2];
          } else if (columnIndex === 1) {
            return [0, 0];
          }
        }
      },
      load(tree, treeNode, resolve) {
        setTimeout(() => {
          resolve([
            {
              id: 31,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            }, {
              id: 32,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            }
          ])
        }, 1000)
      }

   

  

        

  }
}
</script>

### 普通列表

::: demo 通过table-border可以设置纵向边框, 通过指定 Table 组件的 row-class-name 属性来为 Table 中的某一行添加 class，表明该行处于某种状态。通过设置height来进行表头固定, 通过设置max-height属性为 Table 指定最大高度。此时若表格所需的高度大于最大高度，则会显示一个滚动条。

```html
<template>
    <yxt-table :row-class-name="tableRowClassName" max-height="270px" :table-border="false" ref="BaseTableRef" :data="tableData" :table-columns="tableColumns">
    </yxt-table>
</template>

<script>
    export default {
        data() {
            return {
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
            tableRowClassName({
                row,
                rowIndex
            }) {
                if (rowIndex === 1) {
                    return 'warning-row';
                } else if (rowIndex === 3) {
                    return 'success-row';
                }
                return '';
            }
        }

    }
</script>
<style>
    .to-table .warning-row {
        background: oldlace;
    }

    .to-table .success-row {
        background: #f0f9eb;
    }
</style>
```

:::

### 带有操作按钮/过滤器filters/排序

::: demo stripe设置斑马纹, fixed进行列固定

```html
<template>
    <div class="demo-block">
        <yxt-table stripe ref="BaseTableRef" :data="tableData" :table-columns="tableColumns1" :rowbtns="tableBtns" :show-action="true" :actions="handleTableActions" :zero-types="zeroTypes" :pagination-config="paginationConfig" :is-loading="isLoading">
            <div slot="expand">
                <to-table-column type="expand" width="100" label="折叠空间" align="left" :fixed="false">
                    <span>展开内容区...</span>
                </to-table-column>
            </div>

            <template v-slot:isscope="scope">
                <span v-if="scope.item.key='propertyId'">{{ cmpCNName(scope.row.propertyId) }}</span>
            </template>
        </yxt-table>
    </div>
</template>

<script>
    const testFilters = [{
            id: 986,
            keyCode: "DICT_VEHICLE_PROPERTIES",
            text: "实物保障",
            value: "1",
            valueCode: "DICT_VEHICLE_PROPERTIES_1"
        },
        {
            id: 987,
            keyCode: "DICT_VEHICLE_PROPERTIES",
            text: "机要通信用车",
            value: "2",
            valueCode: "DICT_VEHICLE_PROPERTIES_2"
        },
        {
            id: 988,
            keyCode: "DICT_VEHICLE_PROPERTIES",
            text: "应急保障用车",
            value: "3",
            valueCode: "DICT_VEHICLE_PROPERTIES_3"
        },
        {
            id: 989,
            keyCode: "DICT_VEHICLE_PROPERTIES",
            text: "一般执法执勤",
            value: "4",
            valueCode: "DICT_VEHICLE_PROPERTIES_4"
        },
        {
            id: 990,
            keyCode: "DICT_VEHICLE_PROPERTIES",
            text: "执法执勤特种专业",
            value: "5",
            valueCode: "DICT_VEHICLE_PROPERTIES_5"
        }
    ]
    export default {
        data() {
            return {
                tableData: [{
                        id: '001',
                        name: '测试用户名超长是否显示tooltip内容123',
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
                    },
                    {
                        id: '006',
                        name: '李斯22',
                        propertyId: '2',
                        propertyName: '机要通信用车2',
                        gender: 'femal'
                    },
                ],
                tableColumns1: [{
                        key: 'name',
                        title: '姓名',
                        width: 120,
                        tooltip: true,
                        sortable: true
                    },
                    {
                        key: 'propertyId',
                        title: '性质',
                        width: 120,
                        filters: testFilters,
                        columnKey: 'propertyId',
                        filtermultiple: true,
                        formatter: (value, column) => {
                            if (value.propertyId == 1) return '实物保障'
                            else if (value.propertyId == 2) return '机要通信用车'
                            else if (value.propertyId == 3) return '应急保障用车'
                            else if (value.propertyId == 4) return '一般执法执勤'
                            else return '执法执勤特种专业'
                        }
                    },
                    {
                        key: 'gender',
                        title: '性别',
                        width: 120
                    }
                ],
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
                    }
                ],
                tableBtns: [{
                        label: '删除',
                        value: 'del',
                        type: 'primary',
                        code: 'front_task_manage:delete'
                    },
                    {
                        label: '编辑',
                        value: 'edit',
                        type: 'normal',
                        code: 'front_task_manage:edit'
                    },
                    {
                        label: '预览',
                        value: 'preview',
                        code: 'front_task_manage:preview'
                    },
                    {
                        label: '详情',
                        value: 'det',
                        type: 'text',
                        code: 'front_task_manage:detail'
                    },
                ],
                paginationConfig: {
                    currentPage: 1,
                    currentSize: 10,
                    pageSizes: [10, 20, 30, 40, 50],
                    total: 0,
                    layout: 'total, sizes, prev, pager, next, jumper',
                },
                actionQuery: {
                    label: '操作',
                    width: '300',
                    minWidth: '200',
                    align: 'left',
                    fixed: 'right'
                },
                isLoading: true
            }
        },
        mounted() {
            setTimeout(() => {
                this.isLoading = false
            }, 2000);
        },
        methods: {
            handleTableActions(query) {
                if (query.key === 'handlePageChange') {
                    console.log('修改page~~')
                } else if (query.key === 'handleSizeChange') {
                    console.log('修改pageSize~~')
                } else if (query.key === 'filterChange') {
                    console.log(`筛选 ${query.obj.columnKey} 列`, query.obj.codes)
                } else {
                    // console.log('其他操作，具体见组件内~~')
                }
            },
        }
    }
</script>
```

:::

### 自定义列模板/展开行/表头自定义

::: demo 

```html
<template>
    <div class="demo-block">
        <yxt-table :is-custom-table-columns="true" stripe ref="BaseTableRef" :data="tableData" :table-columns="tableColumns" :rowbtns="tableBtns" :show-action="true" :actions="handleTableActions" :zero-types="zeroTypes" :pagination-config="paginationConfig" :is-loading="isLoading">
            <div slot="expand">
                <to-table-column type="expand" width="100" label="折叠空间" align="left" :fixed="false">
                    <span>展开内容区...</span>
                </to-table-column>
            </div>

            <template v-slot:isscope="scope">
                <span v-if="scope.item.key='propertyId'">{{ cmpCNName(scope.row.propertyId) }}</span>
            </template>
            <!-- 自定义列 -->
            <to-table-column label="自定义列" align="left" :fixed="false">
                <template slot="header" slot-scope="scope">
                    <to-input placeholder="请输入内容"></to-input>
                </template>
                <span>
                    <to-button type="primary">上传<i class="to-icon-upload to-icon--right"></i></to-button>
                </span>
            </to-table-column>
        </yxt-table>
    </div>
</template>

<script>
    const testFilters = [{
            id: 986,
            keyCode: "DICT_VEHICLE_PROPERTIES",
            text: "实物保障",
            value: "1",
            valueCode: "DICT_VEHICLE_PROPERTIES_1"
        },
        {
            id: 987,
            keyCode: "DICT_VEHICLE_PROPERTIES",
            text: "机要通信用车",
            value: "2",
            valueCode: "DICT_VEHICLE_PROPERTIES_2"
        },
        {
            id: 988,
            keyCode: "DICT_VEHICLE_PROPERTIES",
            text: "应急保障用车",
            value: "3",
            valueCode: "DICT_VEHICLE_PROPERTIES_3"
        },
        {
            id: 989,
            keyCode: "DICT_VEHICLE_PROPERTIES",
            text: "一般执法执勤",
            value: "4",
            valueCode: "DICT_VEHICLE_PROPERTIES_4"
        },
        {
            id: 990,
            keyCode: "DICT_VEHICLE_PROPERTIES",
            text: "执法执勤特种专业",
            value: "5",
            valueCode: "DICT_VEHICLE_PROPERTIES_5"
        }
    ]
    export default {
        data() {
            return {
                tableData: [{
                        id: '001',
                        name: '测试用户名超长是否显示tooltip内容123',
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
                    },
                    {
                        id: '006',
                        name: '李斯22',
                        propertyId: '2',
                        propertyName: '机要通信用车2',
                        gender: 'femal'
                    },
                ],
                tableColumns: [{
                        key: 'name',
                        title: '姓名',
                        width: 120,
                        tooltip: true,
                        sortable: true
                    },
                    {
                        key: 'propertyId',
                        title: '性质',
                        width: 120,
                        filters: testFilters,
                        columnKey: 'propertyId',
                        filtermultiple: true,
                        formatter: (value, column) => {
                            if (value.propertyId == 1) return '实物保障'
                            else if (value.propertyId == 2) return '机要通信用车'
                            else if (value.propertyId == 3) return '应急保障用车'
                            else if (value.propertyId == 4) return '一般执法执勤'
                            else return '执法执勤特种专业'
                        }
                    },
                    {
                        key: 'gender',
                        title: '性别',
                        width: 120
                    }
                ],
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
                    }
                ],
                tableBtns: [{
                        label: '删除',
                        value: 'del',
                        type: 'primary',
                        code: 'front_task_manage:delete'
                    },
                    {
                        label: '编辑',
                        value: 'edit',
                        type: 'normal',
                        code: 'front_task_manage:edit'
                    },
                    {
                        label: '预览',
                        value: 'preview',
                        code: 'front_task_manage:preview'
                    },
                    {
                        label: '详情',
                        value: 'det',
                        type: 'text',
                        code: 'front_task_manage:detail'
                    },
                ],
                paginationConfig: {
                    currentPage: 1,
                    currentSize: 10,
                    pageSizes: [10, 20, 30, 40, 50],
                    total: 0,
                    layout: 'total, sizes, prev, pager, next, jumper',
                },
                actionQuery: {
                    label: '操作',
                    width: '300',
                    minWidth: '200',
                    align: 'left',
                    fixed: 'right'
                },
                isLoading: true
            }
        },
        mounted() {
            setTimeout(() => {
                this.isLoading = false
            }, 2000);
        },
        methods: {
            handleTableActions(query) {
                if (query.key === 'handlePageChange') {
                    console.log('修改page~~')
                } else if (query.key === 'handleSizeChange') {
                    console.log('修改pageSize~~')
                } else if (query.key === 'filterChange') {
                    console.log(`筛选 ${query.obj.columnKey} 列`, query.obj.codes)
                } else {
                    // console.log('其他操作，具体见组件内~~')
                }
            },
        }
    }
</script>
```

:::

### 尾列合计/行列合并

::: demo

```html
<template>
    <div class="demo-block">
        <yxt-table show-summary :span-method="arraySpanMethod" ref="BaseTableRef" :data="tableDataSums" :table-columns="tableColumnsSums">
        </yxt-table>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                tableDataSums: [{
                        id: '001',
                        num1: 100,
                        num2: 200,
                        num3: 300
                    },
                    {
                        id: '002',
                        num1: 100,
                        num2: 200,
                        num3: 300
                    },
                    {
                        id: '003',
                        num1: 100,
                        num2: 200,
                        num3: 300
                    },
                    {
                        id: '004',
                        num1: 100,
                        num2: 200,
                        num3: 300
                    },
                ],
                tableColumnsSums: [{
                        key: 'id',
                        title: 'ID',
                        width: 120,
                        sortable: true
                    },
                    {
                        key: 'num1',
                        title: '数据1'
                    },
                    {
                        key: 'num2',
                        title: '数据2'
                    },
                    {
                        key: 'num3',
                        title: '数据3'
                    }
                ],
            }
        },
        methods: {
            arraySpanMethod({
                row,
                column,
                rowIndex,
                columnIndex
            }) {
                if (rowIndex % 2 === 0) {
                    if (columnIndex === 0) {
                        return [1, 2];
                    } else if (columnIndex === 1) {
                        return [0, 0];
                    }
                }
            }
        }
    }
</script>

:::

### 树形数据与懒加载

::: demo

```html
<template>
    <div class="demo-block">
        <yxt-table ref="BaseTableRef" row-key="id" lazy :load="load" tree-props loadingConfig :data="tableDataTree" :table-columns="tableColumnsTree">
        </yxt-table>
    </div>
</template>
<script>
    export default {
        data() {
            return {

            }
        },
        methods: {

        }
    }
</script>
:::

### 参数说明

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
|---------- |-------------- |---------- |-------------------------------- |-------- |
| isLoading | 加载动画 | Boolean | true或false | false |
| loadingConfig | 加载动画配置项，仅当 `isLoading` 为true时生效 | Object | -- | { loadingText: '加载中...', loadingSpinner: 'to-icon-loading', loadingBackground: 'rgba(0, 0, 0, 0.2)' } |
| tableData | 显示的数据 | Array | -- | -- |
| tableColumns | 表头配置数组 | Array | -- | -- |
| headerCellStyle | 表头样式 | Object | -- | { background: '#fafafa', color: '#606266' }|
| zeroTypes | 第一列显示的类型(选择框/序号) | Array | [ `见详细参数说明` ] | 都不显示 |
| sortway | 排序方式设置 | String | by(指定数据按照哪个属性进行排序) 或 method(自定义函数排序) | by |
| showAction | table是否显示操作列？？？ | boolean | true 或 false | false |
| rowbtns | table操作列按钮数组，仅当 `showAction = true` 时生效 | Array | [ `见详细参数说明` ] | -- |
| actionQuery | table操作列默认配置，仅当 `showAction = true` 时生效 | Object | [ `见详细参数说明` ] | -- |
| tooltipConfig | 操作列为icon时，显示tooltip浮动提示 | Object | [ `见详细参数说明` ] | -- |
| actions | 所有@click 事件，通过key区分事件具体类型 | Function | [ `见详细参数说明` ] | -- |
| tableBorder | table是否显示边框线？？？ | boolean | -- | false |
| showPagination | 是否显示分页组件？？？ | boolean | true 或 false | true |
| paginationConfig | 分页组件的配置项 | Object | [ `见详细参数说明` ] | -- |
| rowKey | 折叠与展开内容 | String | [ `见详细参数说明` ] | -- |
|height | able 的高度，默认为自动高度。如果 height 为 number 类型，单位 px；如果 height 为 string 类型，则这个高度会设置为 Table 的 style.height 的值，Table 的高度会受控于外部样式。 | string/number |--|--
|max-height| Table 的最大高度。合法的值为数字或者单位为 px 的高度。
|stripe | 是否为斑马纹 table| boolean | -- | false
|size | 尺寸 | string | medium / small / mini | --
|fit | 列的宽度是否自撑开 | boolean | -- | true
|show-header | 是否显示表头 | boolean | -- | true
|highlight-current-row | 是否要高亮当前行 | boolean | -- | false
|current-row-key | 当前行的 key，只写属性 | string/number | -- | --
| row-class-name | 行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。 | Function({row, rowIndex})/String | -- | --
| row-style | 行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。 | Function({row, rowIndex})/Object | --| --
|cell-class-name |单元格的 className 的回调方法，也可以使用字符串为所有单元格设置一个固定的 className。 | Function({row, column, rowIndex, columnIndex})/String |-- | --
| cell-style | 单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有单元格设置一样的 Style。 | Function({row, column, rowIndex, columnIndex})/Object | -- | --
|header-row-class-name | 表头行的 className 的回调方法，也可以使用字符串为所有表头行设置一个固定的 className。 | Function({row, rowIndex})/String | --
|header-row-style | 表头行的 style 的回调方法，也可以使用一个固定的 Object 为所有表头行设置一样的 Style。 | Function({row, rowIndex})/Object | -- | --
|header-cell-class-name | 表头单元格的 className 的回调方法，也可以使用字符串为所有表头单元格设置一个固定的 className。 | Function({row, column, rowIndex, columnIndex})/String | -- | --
| header-cell-style | 表头单元格的 style 的回调方法，也可以使用一个固定的 Object 为所有表头单元格设置一样的 Style。 | Function({row, column, rowIndex, columnIndex})/Object | -- | --
|row-key | 行数据的 Key，用来优化 Table 的渲染；在使用 reserve-selection 功能与显示树形数据时，该属性是必填的。类型为 String 时，支持多层访问：user.info.id，但不支持 user.info[0].id，此种情况请使用 Function。 | Function(row)/String | -- | --
|empty-text | 空数据时显示的文本内容，也可以通过 slot="empty" 设置 | string | -- |暂无数据
|default-expand-all | 是否默认展开所有行，当 Table 包含展开行存在或者为树形表格时有效 | Boolean | -- | false
|expand-row-keys | 可以通过该属性设置 Table 目前的展开行，需要设置 row-key 属性才能使用，该属性为展开行的 keys 数组。 | array | -- | --
default-sort| 默认的排序列的 prop 和顺序。它的prop属性指定默认的排序的列，order指定默认排序的顺序 | object | order: ascending, descending |如果只指定了prop, 没有指定order, 则默认顺序是ascending
| tooltip-effect | tooltip effect 属性 | string | dark/light | --
|show-summary | 是否在表尾显示合计行 | Boolean | -- | false
| sum-text | 合计行第一列的文本 | string |-- |合计
|summary-method | 自定义的合计计算方法 | Function({ columns, data }) | -- | --
|span-method | 合并行或列的计算方法 | Function({ row, column, rowIndex, columnIndex }) |-- |--
|select-on-indeterminate | 在多选表格中，当仅有部分行被选中时，点击表头的多选框时的行为。若为 true，则选中所有行；若为 false，则取消选择所有行 |Boolean | -- |true
| indent | 展示树形数据时，树节点的缩进 | number | -- | 16
|lazy | 是否懒加载子节点数据 | boolean | -- | --
|load | 加载子节点数据的函数，lazy 为 true 时生效，函数第二个参数包含了节点的层级信息 | Function(row, treeNode, resolve) | -- | --
| tree-props | 渲染嵌套数据的配置选项 | object | -- | { hasChildren: 'hasChildren', children: 'children' }
| (ref函数)isloadingTime | 自定义是否主动关闭Loading | time\<Number\>: 延时时间长度；isTimeout\<Boolean\> 是否开启延时关闭Loading， true: 开启， false: 关闭 | [ `见详细参数说明` ] | -- |
        | showSummary | 是否在表尾显示合计行 | Boolean | true或false | false |

        ### 详细参数说明

        ---
        ** `zeroTypes` 支持两种对象：**

        ```js
        {
        label: '多选',
        type: 'selection',
        width: '50',
        align: 'center',
        fixed: 'left'
        }, {
        label: '序号',
        type: 'index',
        width: '50',
        align: 'center',
        fixed: 'left'
        }
```

---
** `rowbtns` 示例：**

```js
{
    label: '新增',
    value: 'add',
    type: 'normal'
}, {
    label: '删除',
    value: 'del',
    type: 'primary',
    disabled: false
}, {
    label: '编辑',
    value: 'edit',
    isIcon: true,
    icon: 'to-icon-warning'
}
```

---
** `actionQuery` 默认配置：**

```js
{
    label: '操作',
    width: '300',
    minWidth: '300',
    align: 'left',
    fixed: 'right'
}
```

---
** `tooltipConfig` 默认配置：**

```js
{
    effect: 'dark',
    placement: 'top-start'
}
```

---
** `actions` 如：**

```js
// 某个单元格被点击
handleCellClick(row, column) {
        let property = column.property;
        let query = {
            key: 'cellClick',
            obj: {
                row,
                property
            }
        };
        return this.actions(query);
    },
    sortMethod(val1, val2) {
        let query = {
            key: 'sortMethod',
            obj: {
                val1,
                val2
            }
        };
        return this.actions(query);
    },
```

---
** `paginationConfig` 默认配置：**

```js
{
    currentPage: 1, // 当前页
    currentSize: 10, // 共多少页
    pageSizes: [10, 20, 30, 40, 50],
    total: 0, // 总条数
    layout: 'total, sizes, prev, pager, next, jumper'
}
```

---
** `rowKey` 默认配置：**

* rowKey：配置为哪一列设置展开/折叠层
* children：设置展开显示的项

```js
tableData: [{
        id: '001',
        name: '测试用户名超长是否显示tooltip内容123',
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
    },
    {
        id: '006',
        name: '李斯22',
        propertyId: '2',
        propertyName: '机要通信用车2',
        gender: 'femal',
        children: [{
                id: 31,
                name: '王小虎',
                propertyId: '31',
                propertyName: '应急保障用车31',
                gender: 'femal'
            },
            {
                id: 32,
                name: '王小虎2',
                propertyId: '32',
                propertyName: '应急保障用车32',
                gender: 'meal'
            }
        ]
    },
],
```

---
** `isloadingTime` 自定义是否主动关闭Loading**

```js
// 使用示例：
this.$refs.baseTableDemoRef.isloadingTime(5000, true || false)
```

### Table Events

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

### Table Slot

|name | 说明
|------------|----------
|empty | 自定义内容（无数据展示）

### Table-column Attributes

|参数	|说明	|类型	|可选值	|默认值
|------|--------|------|-------|-----
|type	|对应列的类型。如果设置了 selection 则显示多选框；如果设置了 index 则显示该行的索引（从 1 开始计算）；如果设置了 expand 则显示为一个可展开的按钮	|string	|selection/index/expand|	—
|index	|如果设置了 type=index，可以通过传递 index 属性来自定义索引|	number, Function(index)|	-	|-
|column-key	|column 的 key，如果需要使用 filter-change 事件，则需要此属性标识是哪个 column 的筛选条件|	string|	—|	—
|label	|显示的标题|	string|	—|	—
|prop	|对应列内容的字段名，也可以使用 property 属性	|string|	—|	—
|width	|对应列的宽度	|string	|—	|—
|min-width|	对应列的最小宽度，与 width 的区别是 width 是固定的，min-width 会把剩余宽度按比例分配给设置了 min-width 的列	|string	|—|	—
|fixed	|列是否固定在左侧或者右侧，true 表示固定在左侧	|string/boolean	|true, left, right|	—
|render-header|	列标题 Label 区域渲染使用的 |Function	|Function(h, { column, $index })	|—	|—
|sortable	|对应列是否可以排序，如果设置为 'custom'，则代表用户希望远程排序，需要监听 Table 的 sort-change 事件	|boolean/string	|true/ false, 'custom'	|false
|sort-method	|对数据进行排序的时候使用的方法，仅当 sortable 设置为 true 的时候有效，需返回一个数字，和 Array.sort 表现一致	|Function(a, b)	|—|	—
|sort-by	|指定数据按照哪个属性进行排序，仅当 sortable 设置为 true 且没有设置 sort-method 的时候有效。如果 sort-by 为数组，则先按照第 1 个属性排序，如果第 1 个相等，再按照第 2 个排序，以此类推	|String/Array/Function(row, index)	|—|	—
|sort-orders|	数据在排序时所使用排序策略的轮转顺序，仅当 sortable 为 true 时有效。需传入一个数组，随着用户点击表头，该列依次按照数组中元素的顺序进行排序	|array	|数组中的元素需为以下三者之一：ascending 表示升序，descending 表示降序，null 表示还原为原始顺序	['ascending', 'descending', null]
|resizable|	对应列是否可以通过拖动改变宽度（需要在 el-table 上设置 border 属性为真）|	boolean	|—|	true
|formatter|	用来格式化内容	|Function(row, column, cellValue, index)	|—|	—
|show-overflow-tooltip|	当内容过长被隐藏时显示 tooltip	|Boolean|	—	|false
|align|	对齐方式	|String	|left/center/right	|left
|header-align|	表头对齐方式，若不设置该项，则使用表格的对齐方式|	String|	left/center/right|	—
|class-name	|列的 className	|string|	—|	—
|label-class-name	|当前列标题的自定义类名	|string|	—	|—
|selectable	|仅对 type=selection 的列有效，类型为 Function，Function 的返回值用来决定这一行的 CheckBox 是否可以勾选|	Function(row, index)|	—	|—
|reserve-selection	|仅对 type=selection 的列有效，类型为 Boolean，为 true 则会在数据更新之后保留之前选中的数据（需指定 row-key）	|Boolean	|—|	false
|filters	|数据过滤的选项，数组格式，数组中的元素需要有 text 和 value 属性。	|Array[{ text, value }]	|—|	—
|filter-placement	|过滤弹出框的定位	|String	|与 Tooltip 的 placement 属性相同|	—
|filter-multiple	|数据过滤的选项是否多选	|Boolean|	—	|true
|filter-method	|数据过滤使用的方法，如果是多选的筛选项，对每一条数据会执行多次，任意一次返回 true 就会显示。|	Function(value, row, column)	|—|	—
|filtered-value	|选中的数据过滤项，如果需要自定义表头过滤的渲染方式，可能会需要此属性。	|Array	|—	|—

### Table-column Scoped Slot

|name	|说明
|--------|----
|—	|自定义列的内容，参数为 { row, column, $index }
|header	|自定义表头的内容. 参数为 { column, $index }
