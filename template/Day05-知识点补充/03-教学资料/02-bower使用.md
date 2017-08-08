# Bower的使用

## 1 Bower简介
* [Bower官网](http:bower.io)
* 其功能和npm类似.利用bower可以管理插件/类库.是1个前端包管理工具.
* 其直接从github下载.其依赖于git和npm
* Bower是1个前端的插件市场 npm是1个前后端的插件市场.
* npm https://www.npmjs.com/
* bower  github

## 2. Bower安装
* 安装nodejs 拥有npm工具.
* 安装git
* 使用npm安装bower `npm install -g bower`

## 3. Bower使用
* 可以在git bash中使用使用bower,也可以直接在命令行工具中使用bower
* 一般使用步骤
    * 初始化bower `bower init` 该命令用来在项目文件夹中初始化bower环境,生成配置文件.
    * 使用`bower install xxx --save`命令来进行安装.
        * 会在当前项目目录下生成1个`bower_components`目录,将包存储在其中.
        * 指定下载目录的方式.
            * 新建`.bowerrc`文件
            * `{directory:"app/vendor"}`
    * 使用`bower uninstall xxx --save`命令来移除包
## 4. Bower的特点
* 如果A包依赖于B包.那么在下载A包的时候 会自动下载B包.
* 在A包没有删除的情况下,无法删除B包.
* 在删除A包的时候,如果无其他包依赖A 会连着A一起删除.否则不会删除A.
