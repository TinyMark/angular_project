/*
   

 1. 项目文件夹的目录结构
    dist
    src
    node_modules

 2. 模块分析.
    功能就是模块

    首页模块
    正在热映模块
    即将上映模块
    top250模块
    电影详情模块
    分模块开发.

    新建了五个文件夹.分别来保存每一个模块的相关信息.
    为了方便后期的维护和管理.

3. 主模块
   模块的名称和ng-app的值是一样的.这样的模块我们就叫做主模块.
   主模块负责来管理ng-pp标签

   从模块: 模块的名称和ng-app的值是不一样的。
   计算你讲从模块的js代码引入到页面 这个从模块的逻辑也不会生效的.

   你必须要让主模块依赖于从模块才可以.

-----------------------------------------------
1. AngularJS应用是以模块化的方式来构建的.
   1.1 首页模块
           视图.
           js: 创建了首页模块,并配置了和首页模块相关的路由.

       
   1.2 电影列表模块
          > 正在热映
          > 即将上映
          > top250
          视图
          模块代码.js 创建了电影列表模块,并配置了相关的路由.

   1.3 详情模块
   
   1.4 主模块.

2. 模块开发
   2.1 主模块.
       模块的名称和ng-app的值一致的时候,这个模块就叫做主模块.
       因为这个模块是直接来管理页面上的标签的.
       一个页面有且只能有一个主模块.
   2.2 从模块.
       模块的名称和ng-app的值不一样.

       如果仅仅是只是将从模块引入到页面.
       home.js
             alert("123");
       与页面相关的代码是不会执行.

       除非让主模块依赖于从模块.
        
   
--------------------------------------------
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
     
     


*/

(function (angular) {
    //1.创建模块.
    var app = angular.module("moviecat",[
        //  "moviecat_details",
        //#/details
        "moviecat_home",
        "moviecat_details",
        "moviecat_movie_list"
    ]);

    app.directive("hmActive",function(){
        return {
            restrict:"A",
            link:function(scope,element,attrs){
                // <li hm-active>111</li>
                //AngularJS在解析标签的时候 如果发现标签有这个么一个自定义指令。
                //就会调用这个link函数
                //element - 正在被解析的这个标签
                //attrs -  正在被解析的这个标签的所有的属性.
                element.on("click",function(){
                    element.parent().children().removeClass("active");
                    element.addClass("active");
                });
            }
        };
    });

    app.controller("searchCtrl",["$scope","$window",function($scope, $window){
        $scope.query = function(){
           var kw = $scope.keyword;
           $window.location.hash = "#/search?q="+kw;
        }
    }]);

})(angular);