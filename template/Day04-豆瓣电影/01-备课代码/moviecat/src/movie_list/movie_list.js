(function (angular) {
    var app = angular.module("moviecat.movie_list", ["ngRoute", "moviecat.highven"]);
    app.config(["$routeProvider", function ($routeProvider) {
        $routeProvider.when('/:movieType/:page?', {
            templateUrl: './movie_list/movie_list.html',
            controller: 'movie_listController'
        });
    }]);
    app.controller("movie_listController", ["$scope", "$routeParams", "$window", "$route", "highven_jsonp", function ($scope, $routeParams, $window, $route, highven_jsonp) {
        $scope.pageIndex = ($routeParams.page || "1") - 0;
        $scope.pageSize = 10;
        $scope.isPrev = true;
        $scope.isNext = true;
        $scope.isLoadingShow = true;
        highven_jsonp.jsonp({
            url: "http://api.douban.com/v2/movie/"+$routeParams.movieType,
            params: {
                count: $scope.pageSize,
                start: ($scope.pageIndex - 1) * $scope.pageSize,
                q:$routeParams.q
            },
            callback: function (response) {
                $scope.movieData = response;
                $scope.pageCount = $window.Math.ceil(response.total / $scope.pageSize);
                $scope.checkButton();
                $scope.isLoadingShow = false;
                $scope.$apply();
            }
        });
        $scope.getPage = function (pageIndex) {
            if (pageIndex < 1 || pageIndex > $scope.pageCount) return;
            $route.updateParams({ page: pageIndex });
        };
        $scope.checkButton = function () {
            if ($scope.pageIndex == 1) {
                $scope.isPrev = true;
                $scope.isNext = false;
            } else if ($scope.pageIndex == $scope.pageCount) {
                $scope.isPrev = false;
                $scope.isNext = true;
            } else {
                $scope.isPrev = false;
                $scope.isNext = false;
            }
        };
    }]);
})(angular);