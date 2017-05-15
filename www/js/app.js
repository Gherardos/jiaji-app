/*define([
    'services/services',
  'controllers/controllers'],
  function(){
    'use strict';

// Ionic Starter App
var app = angular.module('huatekApp',['ionic','ngCordova','huatekApp.router', 'huatekApp.controllers', 'huatekApp.services','huatekApp.directive','ionic-datepicker','ionic-timepicker'])
    app.run(function ($ionicPlatform) {
      $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
          cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
          cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
          // org.apache.cordova.statusbar required
          StatusBar.styleDefault();
        }
      });
    })
      .config(function ($ionicConfigProvider, ionicTimePickerProvider, ionicDatePickerProvider) {
        var datePickerObj = {
          setLabel: '确定',
          todayLabel: '今天',
          closeLabel: '关闭',
          mondayFirst: false,
          inputDate: new Date(),
          weeksList: ["日", "一", "二", "三", "四", "五", "六"],
          monthsList: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
          templateType: 'modal',
          showTodayButton: true,
          dateFormat: 'dd-MM-yyyy',
          closeOnSelect: true
        };
        var timePickerObj = {
          inputTime: (((new Date()).getHours() * 60 * 60) + ((new Date()).getMinutes() * 60)),
          format: 12,
          step: 15,
          setLabel: '选择',
          closeLabel: '关闭'
        };
        ionicDatePickerProvider.configDatePicker(datePickerObj);
        ionicDatePickerProvider.configDatePicker(timePickerObj);
        $ionicConfigProvider.tabs.position('bottom');
      });
    return app;
  });*/

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('huatekApp', ['ionic','ngCordova','huatekApp.router', 'huatekApp.controllers', 'huatekApp.services','huatekApp.directive','ionic-datepicker','ionic-timepicker','ionic-citypicker'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
      StatusBar.styleLightContent();
    }
  });
})


  .config(function ($ionicConfigProvider, ionicTimePickerProvider,ionicDatePickerProvider) {
    var datePickerObj = {
      setLabel: '确定',
      todayLabel: '今天',
      closeLabel: '关闭',
      mondayFirst: false,
      inputDate: new Date(),
      weeksList: ["日", "一", "二", "三", "四", "五", "六"],
      monthsList: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"],
      templateType: 'popup',
      from: new Date(2012, 8, 1),
      to: new Date(2018, 8, 1),
      showTodayButton: true,
      dateFormat: 'dd-MM-yyyy',
      closeOnSelect: true
    };
    var timePickerObj = {
      inputTime: (((new Date()).getHours() * 60 * 60) + ((new Date()).getMinutes() * 60)),
      format: 12,
      step: 15,
      setLabel: '选择',
      closeLabel: '关闭'
    };
    ionicDatePickerProvider.configDatePicker(datePickerObj);
    ionicDatePickerProvider.configDatePicker(timePickerObj);
    $ionicConfigProvider.tabs.position('bottom');
  });



/*.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});*/
