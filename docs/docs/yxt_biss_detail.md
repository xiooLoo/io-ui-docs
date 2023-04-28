## YxtBissDetails 详情页

YxtBissDetails是一个通过对数据集进行配置以实现兼容YXT大多数组件的超级组件  
每个组件的属性充分隔离   
通过对插槽名的扩展实现插槽隔离
通过对数据集的配置可拓展YXT组件


### 

带有`card`风格的超级组件

:::demo YxtBissDetails是由一个`sectionProps`控制,数据驱动视图,每个节点成员是一个section
```html
<div class="demo-block1">
  <yxt-biss-details
        :section-props="detailsData"
        :actions = "handleFormActions"
      >
      <template slot="text-extra">
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
            <div class="handleTableSotp" v-if="slotProps.data.data.row.status == 0">停用</div>
            <div class="start" v-else>启用</div>
        </div>
        <div v-if="slotProps.data.data.rowKey === 'propertyId'">{{slotProps.data.data.row.propertyName}}</div>
      </template>
      <template slot="customTableColHead">
        模板code
        <to-tooltip>
           <div slot="content">模版的唯一标识，可在业务侧<br/>配置模版CODE，调用模版信息。</div>
            <i class="to-icon-warning-outline"></i>
        </to-tooltip>
      </template>
    </yxt-biss-details>
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
              detailsData: [
                {
                  type: 'text',
                  title: '用户信息',
                  textItems: [
                    {
                      span: 1,
                      label: '整改单位',
                      value: '陕西省住建局'
                    },
                    {
                      span: 1,
                      label: '联系地址1',
                      value: '江苏省苏州市吴中区吴中大道 1188 号'
                    },
                    {
                      span: 2,
                      label: '联系地址1',
                      value: '江苏省苏州市吴中区吴中大道 1188 号'
                    },
                    {
                      span: 1,
                      label: '联系地址1',
                      value: '江苏省苏州市吴中区吴中大道 1188 号'
                    },
                    {
                      labelSlot: 'label123',
                      span: 1,
                      label: '联系地址2',
                      value: '江苏省苏州市吴中区吴中大道 1188 号'
                    }
                  ]
                },
                {
                  type: 'text',
                  title: '用户信息',
                  textItems: [
                    {
                      span: 1,
                      label: '整改单位',
                      value: '陕西省住建局'
                    },
                    {
                      span: 1,
                      label: '关联巡检记录',
                      value: '202107071650003100001'
                    },
                    {
                      span: 1,
                      label: '关联巡检记录',
                      value: '202107071650003100001'
                    },
                    {
                      span: 1,
                      label: '关联巡检记录',
                      value: '202107071650003100001'
                    },
                    {
                      span: 2,
                      label: '整改日期',
                      value: '曲丽丽 18100000000 浙江省杭州市西湖区黄姑山路工专路交叉路口曲丽丽 18100000000 浙江省杭州市西湖区黄姑山路工专路交叉路口18100000000 浙江省杭州市西湖区黄姑山路工专路交叉路口'
                    },
                    {
                      span: 1,
                      label: '联系地址1',
                      value: '江苏省苏州市吴中区吴中大道 1188 号'
                    },
                    {
                      labelSlot: 'label123',
                      span: 1,
                      label: '联系地址2',
                      value: '2022-01-11'
                    }
                  ]
                },
                {
                  type: 'tabel',
                  showAction: true,
                  isShowSuffix: false,
                  tableBorder: false,
                  title: '表格基础信息',
                  data: [{
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
                      key: 'gender',
                      title: '模版名称',
                      customTableColHead: true
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
                      key: 'mode',
                      title: '模板code'
                    },
                    {
                      key: 'status',
                      title: '状态',
                      isscope: true,
                      sortable: true
                    },
                    {
                      key: 'propertyName',
                      title: '操作人'
                    }
                  ]
                },
                {
                  type: 'flow',
                  title: '流程进度',
                  flowItems: [{
                    content: '住房申请-王三天-发起',
                    timestamp: '2018-04-12 20:46',
                    color: '#0bbd87'
                  }, {
                    content: '材料审核-张科长，王科长，李科长-审批中',
                    timestamp: '2018-04-03 20:46',
                    color: '#2E78FF'
                  }, {
                    content: '材料审核-王处长-审批中',
                    timestamp: '2018-04-03 20:46'
                  }]
                }
              ]
            }
        },
        methods: {
            handleTableSotp() {
              console.log('handleTableSotp')
            },
            actions(key,data) {
              console.log('事件触发的回调===', key,data);
            },
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
<style>
  .demo-block1 {
    padding: 24px;
    background: #F0F2F5;
  }
</style>
```

:::
<br>

### 详情展示 YxtBissDetails组件目前的内置目三种section，分别是`text`、`table`、`flow`,支持可拓展
### Attributes

| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|----------|-------- |---------- |-------------  |-------- |
|section-props| 组件接受的数据 | Array | 详情见下面属性| --

### section-props-items
section-prop是一个数组，每个数组成员是一个对象，每个对象决定了每个卡片的样式，
目前组件内置了三种section，分别是`text`、`table`、`flow`,
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|----------|-------- |---------- |-------------  |-------- |
|title| section标题 | string | -- | --
|type| section类型 | string |必填项| --
### section-flow
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|----------|-------- |---------- |-------------  |-------- |
|reverse| 	指定节点排序方向，默认为正序 | boolean | -- | false
|is-show-left	| 是否在左侧显示时间戳 | array |--| --
### section-flow-item
| 参数  | 说明          | 类型      | 可选值                           | 默认值  |
|------ |-------------- |---------- |--------------------------------  |-------- |
| timestamp | 时间戳 | string | - | — |
| hideTimestamp | 是否隐藏时间戳 | boolean | —	 | false | 
| placement   | 时间戳位置 | string | top/bottom | bottom |
| type   | 节点类型 | string | top/bottom | primary / success / warning / danger / info | - |
| color  | 节点颜色 | string |hsl / hsv / hex / rgb |
| size |	节点尺寸 | string | normal / large | normal |
| icon   | 节点图标 | string | — | - |
| isDot   | 节点是否自定义 | boolean | — | false |
| class | 节点自定义类名 | string | — | — |
#### text Attributes

| 参数  | 说明          | 类型      | 可选值                           | 默认值  |
|------ |-------------- |---------- |--------------------------------  |-------- |
| reverse | 指定节点排序方向，默认为正序 | boolean | -- | false |
|border	|是否带有边框	|boolean|	—	|false|
|column	|一行 |Descriptions Item 的数量	|number|	—	3|
|direction|	排列的方向|	string	|vertical / horizontal|	horizontal|
|size	|列表的尺寸	|string|	medium / small / mini	|—|
|title|	标题文本，显示在左上方	|string|	—	—|
|extra	|操作区文本，显示在右上方|	string	|—	—|
|colon|	是否显示冒号	|boolean|	—	|true|
|labelClassName|	自定义标签类名|	string	|—	—|
|contentClassName|	自定义内容类名	|string	—	—|
|labelStyle	|自定义标签样式	|object	—	—|
|contentStyle|	自定义内容样式	|object	|—	—|
#### text-item Attributes

| 参数  | 说明          | 类型      | 可选值                           | 默认值  |
|------ |-------------- |---------- |--------------------------------  |-------- |
|参数|	说明|	类型	|可选值	|默认值|
|label	|标签文本|	string|	—	|—|
|span	|列的数量	|number	|—	|1|
|labelClassName	|自定义标签类名	|string	|—	|—|
|contentClassName|	自定义内容类名|	string	|—|	—|
|labelStyle|	自定义标签样式|	object	|—	|—|
|contentStyle|	自定义内容样式|	object	|—|	—|
数据驱动视图
每个section项都兼容着UI组件库的所有视图，根据视图的不同可以自定义所有属性


## slots
__组件继承所有Element-UI插槽，为了提高组件插槽的可塑性，确定每个section与自己插槽对应，避免插槽名重复，在使用插槽时需要注意，如slot='label'需要变为slot='text-label',即type+sltoName。注意格式一定正确，不然匹配不到插槽__
需要注意的是table组件保持一致

### Methods

| 参数      | 说明    |   参数
|----------|-------- |----------
| actions   | 所有事件触发的回调函数


### Slot
| Name      | 说明    |   
|----------|-------- |----------
| isscope   | yxt-table的插槽透传


