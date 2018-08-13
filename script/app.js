//创建app模块
var  app =angular.module("app",["ctrls","ngRoute"]);
//调用run方法,该模块创建之后可以直接执行
//该模块依赖的是根作用域,子作用域通常是与控制器绑定的
app.run(["$rootScope",function($rootScope){
        // alert("111");
        //给头部的a标签绑定toggle方法
        //点击a标签,页面左右滑动
     $rootScope.left = false; //设置初始值表示不移动,取反,原值为true的为false,为false的取值为true
     $rootScope.toggle = function(){     
            $rootScope.left = !$rootScope.left;
            //对导航栏中的dd进行移动设置
            var dd = document.querySelectorAll("dd");
            //遍历dd,对每一个dd设置位移
            //当$rootScope.left为true时,需要向右移动
            if($rootScope.left){  //导航栏向右显示(位移量0)
                for(var i=0; i<dd.length; i++) {
                    dd[i].style.transitionDuration = (i + 1) * 0.15 + 's';
                    dd[i].style.transitionProperty = 'all';
                    dd[i].style.transitionDelay = '0.2s';
                    dd[i].style.transitionTimingFunction = 'ease-out';
                    dd[i].style.transform = 'translate(0)';
                }
            }else{
                for(var i=dd.length - 1; i>=0; i--) {
                    dd[i].style.transitionDuration = (dd.length - i + 1) * 0.05 + 's';
                    dd[i].style.transitionProperty = 'all';
                    dd[i].style.transitionDelay = '';
                    dd[i].style.transitionTimingFunction = 'ease-out';
                    dd[i].style.transform = 'translate(-100%)';
                }
            }
     }
}]);
//修复锚点值的改变
app.config(["$locationProvider",function($locationProvider){
           $locationProvider.hashPrefix("");
}]);
//配置路由
app.config(["$routeProvider",function($routeProvider){
     $routeProvider.when("/",{
         redirectTo:"/index"  //跳转index处理
     }).when("/index",{
       templateUrl:"./views/test.html",     
       controller:"index" 
    }).when("/older",{
        templateUrl:"./views/test.html",     
        controller:"older" 
     })
}]);

 







