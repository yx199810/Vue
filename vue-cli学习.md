# 1.第一个vue-cli脚手架项目

##  1.1创建第一个vue项目

### `vue init webpack 项目名`

## 1.2项目结构


-build-----------------用来使用webpack打包使用的依赖
-config----------------用来做整个项目配置目录
-node_modules----------用来管理项目中的使用依赖
-src-------------------用来书写vue的源代码【重点】
	+assets------------用来存放静态资源//img css【重点】
	+components--------用来书写vue组件【重点】
	+router------------用来配置项目路由【重点】
	+App.vue-----------项目中的根组件【重点】
	+main.js-----------项目主入口【重点】
-static----------------其他静态
-babelrc---------------将es6语法转为es5语法
-editorconfig----------项目编辑配置
-gitignore-------------git 项目忽略文件
-postcssrc.js----------源码相关js
-index.html------------项目主页
-package-lock.json-----对package.json的锁文件
-package.json----------类似于pom.xml文件，依赖管理，不建议手动修改  
-README.md-------------项目说明文件

## 运行项目
npm start

## vue cli开发方式
一切皆组件    组件中  -js代码  -html代码  -css样式
  1.VueCli开发方式是在项目中开发一个一个组件对应一个业务功能模块，再组件组合到一起形成一个前端系统
  2.日后在开发时，都是编写一个一个的组件，日后打包时vue cli会将组件编译


## 如何开发Vue脚手架

## 在脚手架中使用axios
	1.1 安装
	```
	npm install axios --save-dev
	```
	1.2 导入
	```language
	import axios from 'axios'
	```
	1.3 修改内部的$http为axios
	````
	Vue.prototype.$http = axios
	```

## 使用axios
	在需要发送异步请求的位置：`this.$http.get("url").then((res)=>{})`