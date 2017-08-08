//1.引入gulp模块.
var gulp = require("gulp");

var cssmin = require("gulp-cssmin"); //cssmin是1个函数.

var uglify = require("gulp-uglify");//函数

var concat = require("gulp-concat");//函数

var htmlmin = require("gulp-htmlmin"); //函数 

var imagemin = require("gulp-imagemin");


//2.任务.压缩html
//  如果你是使用通配符选择多个文件,就会在目标文件夹中生成同级目录.
gulp.task("yshtml",function(){
    gulp.src("./src/**/*.html")
    .pipe(htmlmin({
        removeComments: true,
        collapseWhitespace: true
    })).pipe(gulp.dest("./dist"));
});

//3.压缩js
gulp.task("ysjs",function(){
    gulp.src(["./src/**/*.js","!./src/assets/js/prefixfree.min.js"])
    .pipe(concat("all.js"))
    .pipe(uglify())
    .pipe(gulp.dest("./dist/assets/js"));
});

//4.压缩css代码.
gulp.task("yscss",function(){
    gulp.src("./src/**/*.css")
    .pipe(cssmin())
    .pipe(gulp.dest("./dist"));
})

gulp.task("yshtml1",function(){
    gulp.src("./src/index.html")
    .pipe(htmlmin({
        removeComments: true,
        collapseWhitespace: true
    })).pipe(gulp.dest("./dist"));
});