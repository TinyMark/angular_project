/*
 1.首页模块相关的代码.

*/
(function(angular){
    //1.创建1个首页模块.
    var app = angular.module("moviecat_home",["ngRoute"]);

    //2.去掉路由的前置符号.
    app.config(["$locationProvider",function($locationProvider){
        $locationProvider.hashPrefix("");
    }]);

    //2.配置与首页相关的路由.
    app.config(["$routeProvider",function($routeProvider){
        $routeProvider.when("/home",{
            templateUrl:"./home/home.html"
        }).when("/",{
            redirectTo:"/home"
        });
    }]);


})(angular);