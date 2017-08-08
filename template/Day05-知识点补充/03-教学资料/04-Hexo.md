# Hexo 博客生成器

```
Hexo是1个工具,可以快速的将markdown文件转换为一个博客网站.
```

* [Hexo官网](https://hexo.io/)
* 台湾人开发. 有比较详尽的中文文档.
* hexo是基于nodejs开发的一个工具.

## 1. 简单使用

* 使用npm工具全局安装hexo环境

  * `npm install hexo-cli -g`
    * cli  --commandline 命令行. ping npm 
    * gui 图形界面.

* 初始化博客目录

  * 在需要创建博客的目录下.
  * `hexo init myBlog`   
  * 会在当前目录下创建1个myBlog文件夹. 并联网下载一些初始化文件

* 启动服务

  * `hexo server`
  * 打开提示的网页地址 就可以看见博客页面

  ***

  ​

## 2.发表新文章

* 使用命令来发表新文章

* `hexo new 学习使用hexo`

* 会生出一个.md文件

* 在这个文件中编辑.md文件. 该md文件的内容就是发布的博客.

* 重新启动`hexo s` 打开网页就可以看到新发表的文章.

  ***

  ​

## 3. 主题安装

* 许多第三方为hexo提供了主题, 我们可以搜索并使用.

* 其中`next`主题比较受欢迎

* next主题官网: [点击跳转](http://theme-next.iissnan.com/)

* 按照官方文档下载最新版本

* 将解压缩后的目录复制到博客目录下的themes目录下.

* 并将其改为1个较为简单的名字`next`

* 修改博客目录下的_config.yml文件.

* 修改theme: l配置项为next

* 重启服务

* 就可以看到新使用的主题效果了.

  ***

## 4. next主题配置

* 选择scheme
* 查看文档

## 5. 部署到github

* github pages
* 基于项目:
  * 在github上创建仓库.

  * 本地项目创建仓储.

  * 新建分支 gh-pages
    * 创建没有父节点的分支
    * git checkout --orphan gh-pages

  * 并在分支提交到github上的gh-pages分支.

  * setting查看网址.

    ***

    ​
* 基于用户的

## 6. 部署博客

* hexo g
* hexo d



## 7. 建目录

* hexo new page photo


***

#  以项目的方式将我们的网站部署到github上去.

*   在github上面创建1个远程的仓库

*   初始化本地网站目录为一个本地的git仓库

  *   `git init`

* 在本地创建分支 名字为gh-pages

  * **git checkout --orphan gh-pages**

* 然后在这个分支中,提交代码.

* 将本地仓库中的代码提交到git远程仓库的 gh-pages分支.

  ​