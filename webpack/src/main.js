//这是main.js,是我们项目的js入口文件


//导入jquery
//import 是es6中导入模块的方式
//由于es6代码高级，浏览器解析不了
import $ from 'jquery'
$(function(){
    $('li:odd').css('background-color','red')
    $('li:even').css('background-color',function(){
    return '#'+'D97634'
    })
})



//经过刚才的，演示，webpack可以做
//1.webpack可以处理js文件的互相依赖关系
//2.webapck能够处理js的兼容问题，把高级的浏览器不是别的语法转为低级的，浏览器能正常识别的语法

//运行格式 webpack 打包文件路径  打包输出文件路径

//使用webpack-dev-server这个工具，来实现自动打包编译的功能
//1.运行npm i webpack-dev-server -D 把这个工具安装到项目的本地开发依赖
//2.安装完毕后，这个工具的用法和webpack命令的用法完全一样
//3.由于，我们是在项目中本地安装的webpack-dev-server，所以无法把它当做脚本命令，在powershell中直接运行，只全局安装的才行
//webpack-dev-server要在本地项目中，必须安装webpack