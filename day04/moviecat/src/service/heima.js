/*
 自定义服务的.

*/

(function(angular){
    //1.创建自定义模块.
    var app = angular.module("heima",[]);

    //2.自定义服务
    app.service("heimaJsonp",["$window",function($window){
        this.hmJsonp = function(opts){
            ///这个方法可以发起跨域请求.
            //1.拼接url
            var url = opts.url + "?";
            for(var key in opts.params){
                url += (key+"="+opts.params[key]+"&");
            }
            //2.保存回调函数.
            //3 $window === window
            //  将回调函数保存到 window全局对象的hmCallback
            //  生成1个随机的函数名.
            var callbackName = "hmjsonp_"+$window.Math.random().toString().slice(2);
             $window[callbackName] = opts.callback;
            // 继续拼接
            url += "callback="+callbackName;

            //4 创建script标签.
            var script = $window.document.createElement("script");
            script.src = url;

            $window.document.body.appendChild(script);

            opts.gcScript = script;

        };
    }]);

})(angular);