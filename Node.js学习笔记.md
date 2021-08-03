# **Node.js学习笔记**

## 1.nvm多版本控制，方便开发切换

![image-20210725105808488](C:\Users\杨旭\AppData\Roaming\Typora\typora-user-images\image-20210725105808488.png)

## 2.REPL

### read 读取

### eval 执行

### print 打印

### loop 循环

## 3. 使用.exit退出

## 4.切入目录，可以执行js文件

### `node xx.js`

## 5.node.js模块化开发

### 传统非模块化缺点：

#### 1.命名冲突

#### 2.文件依赖

### 前端标准的模块化规范

#### 1.AMD - requiresjs

#### 2.CMD - seajs

### 服务器端的模块化规范

#### Commonjs - Node.js

### 模块化相关规则

#### 1.如何定义模块：一个js文件就是一个模块，模块内部成员相互独立

#### 2.模块成员的导出和引入



### 导出模块成员

1. exports.sum=sum

2. module.exports = sum

3. 通过global导出：global.flag = flag

   require('');global.flag

   已经加载的模块会缓存，不会重新加载

### 引入的时候js后缀可以省略

#### 1.模块文件的后缀3种情况：.js .json .node

node.js 是用c++编写的，可以调用获取返回值

优先加载js、其次json、最后node

## ES6

/*
	申明变量let和const
*/
//let 申明的变量不存在预解析
// console.log(flag);
// let flag = 456;

### //let 申明的变量不能重复(在同一个作用域)

### //ES6引入了块级作用域,块内部定义的变量，外部不可以访问

#### for循环括号中申明的变量只能在循环体中使用

#### 在块级作用域内部，变量只能先申明再使用



//**********************************************************

#### const用来申明常量，不可改变值，申明的时候就必须初始化

-------------------------------------------------------------------------------------------------------------------------------------------

/*

​		变量的解构赋值

*/

##### 1.对象属性别名

let {foo:abc,bar},访问时要用abc,不能有foo，原来的名字无效了

##### 2.math对象

let{cos,sin,random} = Math;

##### 3.字符串

let [a,b,c,d,e] = "hello";hello分别拆开为字符。

let{length} = "hi",可以打印长度



---------------------------------------------------------------------------------------------------------------------------

/*

​	字符串相关扩展

​	includes()、startsWith()、endsWith()

​	模板字符串

*/

##### includes()判断字符串中是否包含指定字符串，有返回true，否则false。两个参数：一表示匹配的字符串，二表示开始的地方

##### startsWith()判断开头是否是’XX‘开始

##### endsWith()判断开头是否是’XX‘结束

#### 模板字符串:	`表示模板，末班内容可以有格式，通过${}填充数据

let tpl = `

	<div>
	    <span>${obj.username}</span>
	</div>
` 



## npm

### 常用命令

### 全局安装  -g    本地安装不需要

### 1.安装包：`npm install -g 包名称`	`npm install 包名称`

### 2.安装包的时候可以指定版本 `npm -install -g 包名称@版本号`

### 3.卸载包：`npm uninstall -g 包名`    

### 4.更新包 `npm update -g 包名`最新版本

### 5.本地安装的包在当前目录下的node_modules里面，本地安装的包一般用于实际的开发工作。

### 6.`--save`  `--save-dev`

​	(1)开发环境 平时开发使用的环境  --save-dev向开发环境添加依赖 DevDependencies

​	(2)生产环境：项目部署上线之后的服务器环境   --save向生产环境添加依赖加载到dependencies 

## yarn

### 1.安装 `npm install -g yarn`

### 2.常见命令

#### （1）初始化包 `npm init`  --> `yarn init`

#### （2）安装包`npm install xxx --save` -->`yarn add xxx`

#### （3）移除包`npm uninstall xxx`-->`yarn remove xxx`

#### （4）更新包 `npm update xxx`-->`yarn upgrade xxx`

#### （5）安装开发环境依赖的包 `npm install xxx --save-dev`-->`yarn 		add xxx --dev`

#### （6）全局安装`npm install -g xxx`-->`yaen global add xxx`

#### （7）设置下载镜像的地址`npm config set registry url`-->``yarn config set registry url`

#### （8）安装所有依赖 `npm install`-->`yarn install`

#### （9）执行包 `npm run`-->`yarn run`









