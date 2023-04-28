# yxt-biss-base-table 

### 基础用法

::: demo  $attrs接收除props之外的其他参数, $listeners接收事件

```html
<template>
    <yxt-biss-base-table :pagination-config="paginationConfig" :data="tableData" :table-columns="tableColumns" :actions="handleTableActions" :zero-types="[{ label: '多选', type: 'selection', width: '50', align: 'center', fixed: 'left' }]" :pagerCount="7" :is-loading="false" :table-border="false" show-action :rowbtns="[{ label: '撤回', value: 'revocation', type: 'text', code: 'btn_dispose_recall' }]" @selection-change="handleSelectionChange">

        <span>
            <to-button type="text" size="small" class="changeAccount-box">
                停用
            </to-button>
        </span>
        <span slot="isscope" slot-scope="item">
            自定义节点内容
        </span>
    </yxt-biss-base-table>
</template>
<script>
    export default {
        data() {
            return {
                paginationConfig: {
                    currentPage: 1, // 当前页
                    currentSize: 10, // 共多少页
                    pageSizes: [10, 20, 30, 40, 50],
                    total: 300, // 总条数
                    layout: 'total, sizes, prev, pager, next, jumper'
                },
                slotNames: ['empty-amend', 'expand', 'isscope', 'default'],
                tableData: [{
                    businessId: 0,
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    businessId: 1,
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1517 弄'
                }, {
                    businessId: 2,
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1519 弄'
                }, {
                    businessId: 3,
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1516 弄'
                }],
                tableColumns: [{
                        title: '姓名',
                        key: 'name',
                        tooltip: true,
                        businessId: 'businessId'
                    },
                    {
                        title: '时间',
                        key: 'date',
                        businessId: 'businessId'
                    }, {
                        title: '地址',
                        key: 'address',
                        tooltip: true,
                        businessId: 'businessId'
                    },
                ]
            }
        },
        methods: {
            handleTableActions(data) {

            },
            handleSelectionChange(e) {

            }
        }
    }
</script>
```

:::

### Attributes

| 参数      | 说明    | 类型      
|----------|-------- |---------- 
| paginationConfig   | 分页配置参数  | Nmuber  
|onlyDiyPagination| 特殊样式
|actions | 事件绑定
