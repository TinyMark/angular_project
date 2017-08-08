# 01. ngAnimate插件

```
这是AngularJS封装的一个动画插件
实现动画分为两种方式
> 使用CSS3的方式
> 使用JS的方式
```

## 1.1 使用CSS3的方式实现动画

* 使用这种方式实现动画.
* 不需要对html或者js做任何的操作.

### 1.1.1 创建/销毁元素的动画

* 只需要新增一些CSS的样式就可以轻松实现动画.

  * ng-enter 开始进入
  * ng-enter-active 完全进入
  * ng-leave
  * ng-leave-active

* 代码示例

  ```css
  /*
  1. 依赖ngAnimate模块.
  2. 为需要添加动画的元素添加以下CSS样式
     无须其它操作,就可以实现动画效果
  3. ng-enter: 元素显示开始.
     ng-enter-active:元素显示完成.
     ng-leave: 元素开始消失
     ng-leave-active：元素消失完成
  */
  .one{
    width: 100px;
    height: 100px;
    background-color: hotpink;
    transition: 1s all;
  }
  .one.ng-enter{
    opacity: 0;
  }
  .one.ng-enter-active{
    opacity: 1;
  }
  .one.ng-leave{
    opacity: 1;
  }
  .one.ng-leave-active{
    opacity: 0;
  }
  ```

  * 支持这种动画的指令 都是销毁或者创建
    * ng-if
    * ng-view 案例演示
    * ng-repeat 案例演示
    * ng-include
    * ng-switch


### 1.1.2 显示/隐藏元素的动画

* CSS样式
  * ng-hide-add     
  * ng-hide-add-active
  * ng-hide-remove   
  * ng-hide-remove-active
* 针对的指令 dom存在这个元素 只是使用css的方式隐藏或者显示.
  * ng-show
  * ng-hide
* 针对show或者hide表示的意思

## 1.2 使用JS的方式实现动画

* 模块对象的animate方法可以选中元素进行动画操作.

* 针对创建/删除元素的指令.

  ```javascript
  var app = angular.module("hmApp",["ngAnimate"]);
  app.animation(".box",function(){
      return {
          leave:function(element,done){
          	element.animate({width:0,height:0},1000,done);
       	},
          enter:function(element,done){
            element.css({width:0,height:0});
            element.animate({width:100,height:100},1000,done);
      	}
      }
  });
  ```

* 针对显示/隐藏元素的指令.

  ```javascript
  var app = angular.module("hmApp",["ngAnimate"]);
  app.animation(".box",function(){
      return {
          addClass:function(element,sClass,done){
          	element.animate({width:0,height:0},1000,done);
       	},
          removeClass:function(element,sClass,done){
            element.css({width:0,height:0});
            element.animate({width:100,height:100},1000,done);
      	}
      }
  });
  ```

  ​







