/*
  正在热映模块.

  豆瓣的api 支持jsonp
  但是回调函数的名字不允许包含 .
  而AngularJS自动生成的callback的名字是带点.


  2.自己写1个jsonp服务.保证函数名不包括小数点.

  3.分页功能.
    向服务器请求数据的时候,重要的两个参数
    count:
    start:
    


*/

(function (angular) {
    //1.创建1个模块.
    var app = angular.module("moviecat_in_theaters", ["ngRoute", "heima"]);

    //2.配置路由.
    app.config(["$routeProvider", function ($routeProvider) {
        //                     /in_theaters/1
        //                      /in_theaters
        $routeProvider.when("/in_theaters/:page?", {
            templateUrl: "./in_theaters/in_theaters.html",
            controller: "in_theatersCtrl"
        });
    }]);



    //3.创建控制器
    app.controller("in_theatersCtrl", [
        "$scope", 
        "heimaJsonp",
        "$window",
        "$routeParams",
        "$route",
        function ($scope, heimaJsonp,$window,$routeParams,$route) {
        
        $scope.isShow = true;
            //1.拿到页码.
        $scope.pageIndex = ($routeParams.page || 1) - 0;
        //2.定义页容量
        $scope.pageSize = 10;
        //3.向服务器请求指定页码的数据.
        //1    0
        //2    10
        //3    20
        //4    30
        //5    40  (index-1)*size

        heimaJsonp.hmJsonp({
            url: "http://api.douban.com/v2/movie/in_theaters",
            params: {
                count: $scope.pageSize,
                start:($scope.pageIndex - 1)*$scope.pageSize
            },
            callback: function (data) {
                $scope.movies = data;
                //总页数
                $scope.pageCount = $window.Math.ceil((data.total / $scope.pageSize)); //36
                $scope.isShow = false;
                $scope.$apply();//告诉视图 数据模型发生了变化 赶紧刷新你的视图.
            }
        });

        //传入的是第几页,那么就显示第几页的内容.
        $scope.getPage = function(pageIndex){
            if(pageIndex < 1 || pageIndex >  $scope.pageCount) return;
            //1. pageIndex = 2
            //  最简单的方式就是将地址栏的page参数的值改成2.
            //  $route
            $route.updateParams({page:pageIndex});

        }

        
    }]);

})(angular);