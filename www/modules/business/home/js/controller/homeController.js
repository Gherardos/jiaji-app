define(['ionic'],function(){
  'user strict';
  function ctrl($scope,$state,$timeout){

    $scope.doRefresh = function() {

      console.log('Refreshing!');
      $timeout( function() {
        //simulate async response

        //Stop the ion-refresher from spinning
        $scope.$broadcast('scroll.refreshComplete');

      }, 3000);

    };
    $scope.goMessageCenter = function(){
      $state.go('messageCenter');
    };


  }
  ctrl.$inject = ['$scope','$state','$timeout'];
  return ctrl;
});
