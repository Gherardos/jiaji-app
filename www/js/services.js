/*define(function(require){
  'use strict';
  var services = angular.module('huatekApp.services',[]);
     services.factory('Chats',require('services/ChatsService'));
  return services;
});*/
angular.module('huatekApp.services', [])
.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'img/ben.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'img/max.png'
  }, {
    id: 2,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'img/adam.jpg'
  }, {
    id: 3,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'img/perry.png'
  }, {
    id: 4,
    name: 'Mike Harrington',
    lastText: 'This is wicked good ice cream.',
    face: 'img/mike.png'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  };
})

//本地化存储数据
.factory('locals',['$window',function($window){
  return{
    //存储单个属性
    set :function(key,value){
      $window.localStorage[key]=value;
    },
    //读取单个属性
    get:function(key,defaultValue){
      return  $window.localStorage[key] || defaultValue;
    },
    //存储对象，以JSON格式存储
    setObject:function(key,value){
      $window.localStorage[key]=JSON.stringify(value);
    },
    //读取对象
    getObject: function (key) {
      return JSON.parse($window.localStorage[key] || '{}');
    }

  }
}]);

/*//共享数据服务
.factory('shareData', ['$http','$q', function($http,$q) {
    var factory = {};
    var storage = {};
    factory.getList = function(){
      return $http.get("");
    };
    factory.storage = {
      setVal:function(name,value){
        if(value && name){
          storage[name] = value;
        }
      },
      getVal:function(){
        if(!storage[name] && !name){
          return;
        }
        return storage[name];
      },
      removeVal:function(){
        if(storage[name] && name){
          delete storage[name];
        }
      }
    }
}]);*/
