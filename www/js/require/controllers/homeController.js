define([],function(){
  'use strict';
  function ctrl($scope,$state,$timeout){
    var services = require('services');

    $scope.doRefresh = function() {

      console.log('Refreshing!');
      $timeout( function() {
        //simulate async response

        //Stop the ion-refresher from spinning
        $scope.$broadcast('scroll.refreshComplete');

      }, 3000);

    };
  }
  ctrl.$inject = ['$scope','$state','$timeout'];
  return ctrl;
});
