/*
gulp
1. 当我们的项目开发完成以后.
   并不是这直接就上线. 测试.

   正式上线之前,最起码还应该有一个工作: 项目构建

   我们写的html css js中有大量的换行 空白 注释.
   如果连这些一起发布.无疑会增大文件的体积.进而影响服务器和浏览器的性能.
   我们应该将这些对于浏览器无意义的东西删除掉.

   sass
   less
   还要将预处理的css代码转换为css

   这个工作就叫做项目构建.


2. 项目构建的工作:
   2.1 完全手动.
   2.2 使用一些自动化的构建工具.
       Grunt、Gulp、F.I.S（百度出品）、webpack


3. 安装gulp这个工具
   3.1 gulp这个软件是用nodejs写的.
   3.2 所以,你要先保证你的电脑上安装了nodejs
   
   安装:
   > 先全局安装gulp
     npm install gulp -g 全局安装.将其安装在系统目录中.
                         这个软件可以直接使用.

     使用 gulp -v 命名查看安装的gulp的版本,以确定是否安装成功.


   > 再做1个本地安装
     npm install gulp --save
     
4. 使用gulp来做自动化的构建工具
   4.1 在根目录中创建1个gulpfile.js文件.

   4.2 引入gulp模块.
       var gulp = require("gulp");
    
   4.3 gulp是以任务的形式来做自动化构建工作.
       每一个工作就是一个任务
       要做一个工作 我们就要先创建对应的任务.
       任务创建好了之后 再去执行这个任务.
        
   4.4 调用gulp对象的task方法创建任务.
       参数1: 任务名称
       参数2: 回调.就是这个任务要做的事情.
       

   4.5 执行任务
       在cmd中,切换到项目根目录.使用命令  gulp 任务名称
       这个时候 对应的任务就会被执行.
       
5. 使用gulp来压缩css代码.
   



*/


//1.引入gulp模块.
var gulp = require("gulp");

var cssmin = require("gulp-cssmin"); //cssmin是1个函数.

var uglify = require("gulp-uglify");//函数

var concat = require("gulp-concat");//函数

var htmlmin = require("gulp-htmlmin"); //函数 

var imagemin = require("gulp-imagemin");

//2.创建1个任务.
gulp.task("test",function(){
    console.log("这是1个任务仅供测试.");
});

gulp.task("yscss",function(){
    //压缩css代码的事情.
    //gulp的src方法指定要处理的文件的路径.
    //压缩css代码的关卡 gulp本身是没有的.
    //是以插件的形式存在的. gulp-cssmin
    gulp.src("./src/assets/css/wap.css")
        .pipe(cssmin())
        .pipe(gulp.dest("./dist"));
});

//文件监视:
//gulp可以监视文件的内容的变化.一旦文件的内容发生了变化 就可以去执行指定的任务.
gulp.task("watchcss",function(){
    //要监视文件的变化.
    gulp.watch("./src/assets/css/wap.css",["yscss"]);
});

//压缩js代码.
// gulp-uglify
// 压缩混淆js代码还将注释也去掉了.
gulp.task("ysjs",function(){
    gulp.src("./src/movie_list/movie_list.js")
        .pipe(uglify())
        .pipe(gulp.dest("./dist"));
});

//合并文件
//可以将多个文件合并成1个文件.
//gulp-concat
//使用src方法指定路径的时候,可以使用通配符来选择多个符合条件的文件.
// "./src/*.js" 只能选中src目录下的js文件 不能选中子目录中的js
//  "./src/**/*.js" 选中src下的所有的js文件 包括子目录.
gulp.task("concat",function(){
    gulp.src(["./src/**/*.js","!./src/assets/js/prefixfree.min.js"]) 
    .pipe(concat("all.js"))
    .pipe(uglify())
    .pipe(gulp.dest("./dist"));
});

//压缩html文件.
//gulp-htmlmin
gulp.task("yshtml",function(){
    gulp.src("./src/index.html")
    .pipe(htmlmin({
        removeComments: true,
        collapseWhitespace: true
    }))
    .pipe(gulp.dest("./dist"));
});


//压缩
//
gulp.task("ysimage",function(){
    gulp.src("./src/assets/img/*.*")
    .pipe(imagemin())
    .pipe(gulp.dest("./dist"));
});