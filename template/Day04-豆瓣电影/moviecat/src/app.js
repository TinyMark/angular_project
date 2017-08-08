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

    app.controller("searchCtrl",["$scope","$window",function($scope, $window){
        $scope.query = function(){
           var kw = $scope.keyword;
           $window.location.hash = "#/search?q="+kw;
        }
    }]);

})(angular);