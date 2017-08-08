(function (angular) {
    var app = angular.module("moviecat.details", ["ngRoute", "moviecat.highven"]);
    app.config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when("/details/:id", {
            templateUrl: "./details/details.html",
            controller: "detailsController"
        });
    }]);
    app.controller("detailsController", ["$scope", "$routeParams", "highven_jsonp", function ($scope, $routeParams, highven_jsonp) {
        $scope.isBoxShow = false;
        $scope.isLoadingShow = true;
        var id = $routeParams.id;
        highven_jsonp.jsonp({
            url: "http://api.douban.com/v2/movie/subject/" + id,//1292052
            params: {},
            callback: function (response) {
                $scope.movie = response;
                $scope.isBoxShow = true;
                $scope.isLoadingShow = false;
                $scope.$apply();
            }
        });
    }]);
})(angular);