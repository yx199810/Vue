const path = require('path')
//这个·配置文件木九十一个js文件通过mode中的模块操作，向外暴露了一个配置对象
moudle.export = {
    entry:path.join(__dirname,'./webpack/src/main.js'),//入口，表示要使用webpack打包那个文件
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    }
}