# Browser-sync
## 1.Browser-sync简介
* 当代码发生改变以后,浏览器就自动刷新.
* 这是`browser-sync`提供的最主要的功能

## 2.browser-sync安装
* `npm install browser-sync -g` 使用该命令全局安装.
    * `-dev`参数作用: 代表该插件是供开发阶段使用,并不是给用户使用的.
## 3.browser-sync使用
* 在项目文件夹中执行命令`browser-sync start --server --files "指定要监视的文件"`
* 这个时候,会启动服务 自动打开网页
* 当我们修改代码 保存的时候 浏览器就会自动刷新.
* files参数可以使用通配符,也可以指定多个需要监视的文件.文件名之间使用逗号分隔.

## 4.浏览器兼容性测试.
* 浏览器操作将会被同步.

## 5.browser-sync后台
* 可以设置具体的同步参数.