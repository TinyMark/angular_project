(function (angular) {
    var app = angular.module("moviecat.highven", []);
    app.service("highven_jsonp", ["$window", function ($window) {
        this.jsonp = function (opts) {
            //1.拼接url
            var url = opts.url + "?";
            for (var key in opts.params) {
                url += (key + "=" + opts.params[key] + "&");
            }
            //2.生成随机的回调函数名.
            var callbackName = "jsonp_";
            callbackName += ($window.Math.random().toString().slice(2));
            url += ("callback=" + callbackName);
            $window[callbackName] = opts.callback;
            //3.创建script标签.
            var script = document.createElement("script");
            script.src = url;
            $window.document.body.appendChild(script);

        }
    }]);
    app.directive("hmActive", function () {
        return {
            restrict: "A",
            link: function (scope, element, attrs) {
                element.on("click",function(){
                     element.parent().children().removeClass("active");
                     element.addClass("active");
                });
            }
        };
    });
})(angular);