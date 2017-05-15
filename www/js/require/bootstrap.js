define(['app'],function(app) {
  'use strict';

  angular.element(document).ready(function () {
    console.log('bootstrap ready');

    angular.bootstrap(document, [app.name]);

    //其他的启动方式
    /*var startApp = function () {
     angular.bootstrap(document, [app.name]);
     };

     var onDeviceReady = function () {
     console.log("on deviceready");
     angular.element().ready(function () {
     startApp();
     })
     };

     if (typeof cordova == 'undefined') {
     startApp();
     } else {
     document.addEventListener("deviceready", onDeviceReady, false);
     }
     //方案2的代码
     });*/
  })
});
