## Upload 上传

通过点击或拖拽上传文件

### 图片上传

使用 `type` 属性来设置组件的风格，默认为'default',更多类型参考下面的参数表格。
payload参数用于回显数据，默认上传操作不需要传入payload。

:::demo
```html
<yxt-upload
  action="https://jsonplaceholder.typicode.com/posts/"
  :payload="data1"
  :events="events"
  :limit="3"
  multiple
/>
<script>
  export default {
    data() {
      return {
        data1: [
        { uid: 1, url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg1.baidu.com%2Fit%2Fu%3D3788606852%2C2363382091%26fm%3D253%26app%3D120%26f%3DJPEG%3Fw%3D800%26h%3D800&refer=http%3A%2F%2Fimg1.baidu.com&app=2002&size=w300&q=a80&n=0&g=0n&fmt=jpeg?sec=1645243229&t=4b6f417cb8665f1b8dbc00b1ad699d87'},
        { uid: 2, url: 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg2.baidu.com%2Fit%2Fu%3D1723555149%2C284120447%26fm%3D253%26app%3D120%26f%3DJPEG%3Fw%3D1200%26h%3D798&refer=http%3A%2F%2Fimg2.baidu.com&app=2002&size=w300&q=a80&n=0&g=0n&fmt=jpeg?sec=1645244352&t=a070e07ed736ba65c7a320c4be930559'}
      ],
        events: {
          uploadSuccess: this.uploadSuccess,
          uploadError: this.uploadError
        },
      };
    },
    methods: {
      uploadSuccess(res, file, fileList) {
        console.log(res, file, fileList);
      },
      uploadError(err, file, fileList) {
        console.log(err, file, fileList);
      }
    }
  }
</script>
```
:::

### 用户头像上传

 `type` 类型为avatar，通过设置`circle`使头像切换为圆形风格。

:::demo
```html
<yxt-upload
  action="https://jsonplaceholder.typicode.com/posts/"
  type="avatar"
  :events="events"
  :payload="avatar"
/>
<script>
  export default {
    data() {
      return {
        avatar: "https://img2.baidu.com/it/u=2955499920,3807435344&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400",
        events: {
          uploadSuccess: this.uploadSuccess,
          uploadError: this.uploadError
        },
      };
    },
    methods: {
      uploadSuccess(res, file, fileList, payload) {
        console.log(res, file, fileList, payload, '---------success----');
      },
      uploadError(err, file, fileList) {
        console.log(err, file, fileList);
      }
    }
  }
</script>
```
:::
:::demo
```html
<yxt-upload
  action="https://jsonplaceholder.typicode.com/posts/"
  type="avatar"
  circle
  payload="https://img2.baidu.com/it/u=2955499920,3807435344&fm=253&fmt=auto&app=138&f=JPEG?w=400&h=400"
/>
```
:::

### 文件上传

 `type` 类型为file，可通过设置`limit`来限制上传文件的个数,通过设置`size`来限制上传文件的大小，指定类型为数字，1代表1MB，默认不限制`size`。

:::demo
```html
<yxt-upload
  action="https://jsonplaceholder.typicode.com/posts/"
  type="file"
  :limit="1"
  :size="1"
  :file-list="fileList"
/>
<script>
  export default {
    data() {
      return {
        events: {
          fileList: [],
          uploadSuccess: this.uploadSuccess,
          uploadError: this.uploadError,
          // 默认有内容超出大小提示 需要自定义提示内容，写入这个事件
          uploadExceeds: this.uploadExceeds
        }
      };
    },
    methods: {
      uploadSuccess(res, file, fileList) {
        // console.log(res, file, fileList);
        this.fileList = [...fileList];
      },
      uploadError(err, file, fileList) {
        // console.log(err, file, fileList);
      },
      uploadExceeds(file, size){
        return this.$message.error(`内容大小不可超过${size}MB`);
      }
    }
  }
</script>
```
:::


### 拖拽上传

 `type` 类型为drag，通过拖动文件到目标框内即可上传。

:::demo
```html
<yxt-upload
  action="https://jsonplaceholder.typicode.com/posts/"
  type="drag"
  :file-list="[]"
/>
<script>
  export default {
    data() {
      return {
        events: {
          uploadSuccess: this.uploadSuccess,
          uploadError: this.uploadError,
        },
      };
    },
    methods: {
      uploadSuccess(res, file, fileList) {
        // console.log(res, file, fileList);
      },
      uploadError(err, file, fileList) {
        // console.log(err, file, fileList);
      }
    }
  }
</script>
```
:::


### 自定义上传

 `type` 类型为custom，自由配置样式风格，自由配置httpRequest。

:::demo
```html
<yxt-upload type="custom" :httpRequest="httpRequest"  :events="events">
  <div>自由配置</div>
</yxt-upload>
<script>
  export default {
    data() {
      return {
        fileList:[],
        events: {
          uploadSuccess: this.uploadSuccess,
          uploadError: this.uploadError
        },
      };
    },
    methods: {
      async httpRequest(req) {
        // const file = req.file;
        // const fileName = Date.now() + file.name;
        // const data = new FormData();
        // data.append("name", fileName);
        // data.append("file", file);

        // try {
        //   await Axios.post("http://localhost:5000/api/upload", data);
        // } catch (error) {
        //   new Error(error);
        // }
      },
      uploadSuccess(res, file, fileList) {
        // console.log(res, file, fileList);
      },
      uploadError(err, file, fileList) {
        // console.log(err, file, fileList);
      }
    }
  }
</script>
```
:::

### Attribute
| 参数      | 说明          | 类型      | 可选值                           | 默认值  |
|---------- |-------------- |---------- |--------------------------------  |-------- |
| type | 组件风格 | string | default/avatar/file/drag/custom | default |
| payload | 默认不用传，只是为了业务上的页面回显 | [string,array] | ''/[] | '' |
| circle | 仅对type为avatar生效，设置头像为圆形风格 | boolean | — | false |
| action | 必选参数，上传的地址 | string | — | — |
| headers | 设置上传的请求头部 | object | — | — |
| multiple | 是否支持多选文件 | boolean | — | — |
| data | 上传时附带的额外参数 | object | — | — |
| name | 上传的文件字段名 | string | — | file |
| with-credentials | 支持发送 cookie 凭证信息 | boolean | — | false |
| show-file-list | 是否显示已上传文件列表 | boolean | — | true |
| drag | 是否启用拖拽上传 | boolean | — | false |
| accept | 接受上传的[文件类型]（thumbnail-mode 模式下此参数无效）| string | — | — |
| list-type | 仅对type为custom有效，文件列表的类型 | string | text/picture/picture-card | text |
| auto-upload | 是否在选取文件后立即进行上传 | boolean | — | true |
| file-list | 上传的文件列表, 例如: [{name: 'food.jpg', url: 'https://xxx.cdn.com/xxx.jpg'}] | array | — | [] |
| http-request | 覆盖默认的上传行为，可以自定义上传的实现 | function | — | — |
| disabled | 是否禁用 | boolean | — | false |
| limit | 最大允许上传个数,0为不可上传，默认上传1个 |  number | — | 1 |
| events | 详见下方 |  - | — | — |

### Slot
| name | 说明 |
|------|--------|
| - | 自定义配置 |

### Events （处理组件的钩子函数）
| 方法名      | 说明          | 参数 |
|----------- |-------------- | -- |
| uploadExceeds | 文件超出个数限制时的钩子	 | function(file, size) |
| uploadSuccess | 文件上传成功时的钩子	 | function(response, file, fileList, payload)	 |
| uploadChange | 文件状态改变时的钩子，添加文件、上传成功和上传失败时都会被调用	 | function(file, fileList)	 |
| uploadError | 文件上传失败时的钩子 | function(err, file, fileList)		 |
| uploadProgress | 文件上传时的钩子	 | function(event, file, fileList)	 |
| uploadBeforeRemove | 删除文件之前的钩子，参数为上传的文件和文件列表，若返回 false 或者返回 Promise 且被 reject，则停止删除。	 | function(file, fileList) |
| uploadRemove | 文件列表移除文件时的钩子	 | function(file, fileList)	 |
