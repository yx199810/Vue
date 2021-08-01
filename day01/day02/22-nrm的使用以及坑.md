# 下载nrm指令

`npm i nrm -g`
# 查看下载源
`nrm ls`
## 解决`nrm ls`出错
在node_moudles中找到`cli.js`文件
修改`//const NRMRC = path.join(process.env.HOME, '.nrmrc');`
为`const NRMRC = path.join(process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'], '.nrmrc');`
