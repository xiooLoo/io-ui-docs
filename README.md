# library-YXT-UI

> 基于vue+webpack+npm搭建个人组件库

# YXT-UI

`YXT-UI` 是一款基于 `Vue.js 2.0` 的企业前端 UI 组件库，[测试地址](http://114.116.145.114:8088/yxt-vehicle/yxt-ui.git)

## Build Setup

``` bash
# 安装依赖包
npm install

# 启动项目（serve with hot reload at） localhost:8080
npm run dev | npm run start

# 打包本地dist
npm run build

# 单元测试(unit、e2e)
npm run test

# 单元测试(unit)
npm run unit

# 单元测试(e2e)
npm run e2e

# ESLint全局格式化检查
npm run lint

# stylelint全局格式化检查
npm run stylelint

# git标记tag节点进行发布前准备
npm run tag

# npm包打包发布
npm run publish
```

---
####  **项目结构：**
```
    ┏━ build #构建配置
    ┣━ config #环境变量
    ┣━ node_modules
    ┣━ docs ━┳━ assets #静态资源文件
    ┣        ┣━ components  #Markdown项目组件（非对外组件）
    ┣        ┣━ docs #Markdown文档
    ┣        ┣━ pages #Markdown项目入口
    ┣        ┣━ router #Markdown文档路由
    ┣        ┣━ App.vue
    ┃        ┗━ main.js
    ┣━ frameworks 
    ┣━ static 
    ┣━ test
    ┣━ .babelrc
    ┣━ .editorconfig
    ┣━ .eslintignore
    ┣━ .eslintrc.js
    ┣━ .gitignore
    ┣━ .postcssrc.js
    ┣━ index.html
    ┣━ package-lock.json
    ┣━ package.json
    ┗━ README.md
```

---
### **注释的目的**：提高代码的可读性，从而提高代码的可维护性

### **注释的原则**：如无必要，勿增注释；如有必要，尽量详尽。

---
### **ESLint + stylelint配置自动化修复流程：**

1、安装vscode 插件 `stylelint`;

2、vscode `setting.json`文件中添加以下配置：

```
"editor.codeActionsOnSave": {
    "source.fixAll": true,
    "source.fixAll.stylelint": true,
},
"editor.defaultFormatter": "dbaeumer.vscode-eslint",
"editor.formatOnSave": true,
"editor.formatOnType": true,
"stylelint.enable": true,
"css.validate": true,
"less.validate": true,
"scss.validate": true,

"eslint.format.enable": true,
"eslint.alwaysShowStatus": true,
"eslint.codeAction.showDocumentation": {
    "enable": true
},
```