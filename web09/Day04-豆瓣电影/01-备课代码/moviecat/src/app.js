(function (angular) {
   var app = angular.module("moviecat",[
       "moviecat.home",
       "moviecat.details",
       "moviecat.movie_list",
       "ngRoute"]);
   app.config(["$locationProvider",function($locationProvider){
       $locationProvider.hashPrefix('');
   }]);

   app.controller("searchController",["$scope","$window","$routeParams",function($scope,$window,$routeParams){
       $scope.query = function(){
           ///v2/movie/search?q={text}
           $window.location.hash = "#/search?q="+$scope.keyWords;
       }
   }]);
})(angular);