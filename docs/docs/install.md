# 安装

----

## ~~使用 npm 安装（此方式暂时未发布，等组件库稳定后使用）~~
~~推荐使用 npm 的方式进行开发，享受 node 生态圈和 webpack 工具链带来的便利。通过 npm 安装的模块包，我们可以轻松的使用 import 或者 require 的方式引用~~

## 安装组件库

1、在`yxtui-lib`组件库`dev`分支

2、打开命令行工具进入yxtui-lib项目根目录，执行 `npm run lib`，执行成功之后，会在项目根目录生成`lib`目录

3、拷贝`lib`目录到需要用到的项目（目前仅限于vue2.x项目）

4、在具体项目中使用：

```js
// 此处@ 代表项目src目录，具体可根据项目实际情况引用
import YXTUI from '@/lib/yxt-ui.common.js';
import '@/lib/yxt-ui.css';
Vue.use(YXTUI);
```

5、因为`YXTUI`组件库暂未配置`按需引用`，所以暂时只支持`全量引用`

6、因为`YXTUI`库已经包含`ElementUI`组件库所有组件，所以对于一个新建项目，可以不用再次单独引入`ElementUI`。

7、所有原`ElementUI`所有的组件，仍可以通过特定前缀`to-xxx`的方式继续使用

8、所有基于`ElementUI`二次封装的组件，以`yxt-xxx`的方式使用



