# meetingTime 组件
----
### 基础用法

<script>
export default {
  /* eslint-disable */
  data() {
    return {
      items: [
        {
          id: "782966048726061056",
          meetRecordVos: [
            {
              description: "",
              endTime: "2021-10-12 17:00:00",
              id: "897452558333906944",
              meetingRoomId: "782966048726061056",
              meetingRoomName: "会议室1",
              sponsor: "651026675223629824",
              sponsorName: "王军",
              startTime: "2021-10-12 15:00:00",
              status: "0",
              statusName: "已预约",
              theme: "12324",
              userIds: ["895962366459777024"],
              userNames: ["test01"],
            },
          ],
          name: "会议室1",
        },
      ],
      queryBusyTime: [
        {
          description: "",
          endTime: "2021-10-12 17:00:00",
          id: "897452558333906944",
          meetingRoomId: "782966048726061056",
          meetingRoomName: "会议室1",
          sponsor: "651026675223629824",
          sponsorName: "王军",
          startTime: "2021-10-12 15:00:00",
          status: 0,
          statusName: "已预约",
          theme: "12324",
          userIds: ["895962366459777024"],
          userNames: ["test01"],
        },
      ],
    };
  },
  methods: {
    bookingCb(opt) {
      console.log(opt);
    },
    busyFn(item) {
      let items = JSON.parse(item);
      console.log("items==>", items);
    },
    disableTimeRangeTips() {
      this.$message.error("不可跨占用时段预约会议");
    },
    queryValidTimeCell(opt = {}) {
        console.log(opt);
        return new Promise((resolve, reject) => {
          resolve(this.queryBusyTime)
        })
    }
  }
};
</script>

::: demo

```html
<div>
   <yxt-meeting-time
      v-for="(item, index) in items"
      :item="item"
      :key="index"
      :book="bookingCb"
      :busyFn="busyFn"
      :disableTimeRangeTips="disableTimeRangeTips"
      :queryValidTimeCell="queryValidTimeCell"
    /> 
</div>
<script>
export default {
  /* eslint-disable */
  data() {
    return {
      items: [
        {
          id: "782966048726061056",
          meetRecordVos: [
            {
              description: "",
              endTime: "2021-10-12 17:00:00",
              id: "897452558333906944",
              meetingRoomId: "782966048726061056",
              meetingRoomName: "会议室1",
              sponsor: "651026675223629824",
              sponsorName: "王军",
              startTime: "2021-10-12 15:00:00",
              status: "0",
              statusName: "已预约",
              theme: "12324",
              userIds: ["895962366459777024"],
              userNames: ["test01"],
            },
          ],
          name: "会议室1",
        },
      ],
      queryBusyTime: [
        {
          description: "",
          endTime: "2021-10-12 17:00:00",
          id: "897452558333906944",
          meetingRoomId: "782966048726061056",
          meetingRoomName: "会议室1",
          sponsor: "651026675223629824",
          sponsorName: "王军",
          startTime: "2021-10-12 15:00:00",
          status: 0,
          statusName: "已预约",
          theme: "12324",
          userIds: ["895962366459777024"],
          userNames: ["test01"],
        },
      ],
    };
  },
  methods: {
    bookingCb(opt) {
      console.log(opt);
    },
    busyFn(item) {
      let items = JSON.parse(item);
      console.log("items==>", items);
    },
    disableTimeRangeTips() {
      this.$message.error("不可跨占用时段预约会议");
    },
    queryValidTimeCell(opt = {}) {
        console.log(opt);
        return new Promise((resolve, reject) => {
          resolve(this.queryBusyTime)
        })
    }
  }
};
</script>

```
:::


### 参数说明
#### meetingTime Attributes

| 参数  | 说明          | 类型      | 可选值                           | 默认值  |
|------ |-------------- |---------- |--------------------------------  |-------- |
| item | 指定数据源  |  Array | -- | -- |



#### Events
| 事件名称  | 说明          | 回调参数 |
|---------- |-------------- |-------- |
|disableTimeRangeTips | 当选择会议时间跨越占用时间的时候给出的回调函数 | 无参数 |
|bookingCb | 选择会议确认按钮之后的回调函数 | 选择会议时间之后的回调数据 |
|queryValidTimeCell | 查询会议占用的时间的回调函数需要传入数组类型格式的数据 | { endTime: '',meetingRoomId: '' ,startTime: '' }|
|busyFn | 选择被占用会议之后的回调函数 | 选择被占用会议之后的回调数据 |
 


 