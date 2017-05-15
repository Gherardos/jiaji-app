/*define(function(require){
 'use strict';
 var services = require('services/services');
 var controllers = angular.module('huatekApp.controllers',[]);
 controllers.controller('HomeCtrl',require('controllers/homeController'));
 return controllers;
 });*/
angular.module('huatekApp.controllers', ['ionic'])
  .controller('HomeCtrl', ['$scope','$state','$timeout',function ($scope, $state, $timeout) {
    $scope.doRefresh = function () {
      console.log('Refreshing!');
      $timeout(function () {
        //simulate async response

        //Stop the ion-refresher from spinning
        $scope.$broadcast('scroll.refreshComplete');
      }, 3000);
    };
    /*$scope.sharedata = shareData.getVal('data');*/
  }])

  .controller('SlideMenuCtrl', function ($scope, $state, $ionicSideMenuDelegate) {
    $scope.goLogin = function () {
      $ionicSideMenuDelegate.toggleLeft();
      $state.go('login');
    };
  })

  .controller('LoginCtrl',['$scope','$ionicPopup','$state', '$timeout',function ($scope, $ionicPopup, $state, $timeout) {

    //  alert（警告） 对话框
    $scope.showPopup = function(parmes){
      if(parmes ==1){
        $scope.tips = "用户名输入错误!";
      }else if(parmes ==2){
        $scope.tips = "密码错误!"
      }
      // An elaborate, custom popup
      var myPopup = $ionicPopup.show({
        /*template: '<input type="password" ng-model="data.wifi">',*/
        title: $scope.tips,
        /*subTitle: 'Please use normal things',*/
        scope: $scope
        /*buttons: [
          { text: 'Cancel' },
          {
            text: '<b>Save</b>',
            type: 'button-positive',
            onTap: function(e) {
              if (!$scope.data.wifi) {
                //don't allow the user to close unless he enters wifi password
                e.preventDefault();
              } else {
                return $scope.data.wifi;
              }
            }
          }
        ]*/
      });
      myPopup.then(function(res) {
        console.log('Tapped!', res);
      });
      $timeout(function() {
        myPopup.close(); //close the popup after 3 seconds for some reason
      }, 5000);
    };

    $scope.goLogin = function (user) {
      if(!user.name){
        $scope.showPopup(1);
      }else if(!user.password){
        $scope.showPopup(2);
      }else{
        $state.go('tab.home');
      }

    };

  }])

  .controller('ChatsCtrl', function ($scope) {

    $scope.showTransprotProduct = undefined;
    $scope.isShowAllProductInfo = undefined;
    $scope.goQueryInfo = function () {
      if (1 == 1) {
        $scope.tipDate = [{
          "title": "3.60特惠价",
          "date": "3天",
          "money": "340.3"
        }, {
          "title": "3.60特惠价",
          "date": "3天",
          "money": "340.3"
        }, {
          "title": "3.60特惠价",
          "date": "3天",
          "money": "340.3"
        }];
        $scope.isShowAllProductInfo = true;
      }
    };

    $scope.selectTransportProduct = function () {
      if ($scope.showTransprotProduct) {
        $scope.showTransprotProduct = undefined;
        return;
      }
      $scope.transprotProduct = [{
        "title": "电子类"
      }, {
        "title": "食品类"
      }, {
        "title": "日常用品类"
      }];
      if ($scope.transprotProduct) {
        $scope.showTransprotProduct = true;
      }
    }
  })

  .controller('ChatDetailCtrl', function ($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  })

/****************************** 办理托运*******************************/
  .controller('handleConsignCtrl', function ($scope, $state) {
    $scope.handleConsign = [{
      "order": "012345678",
      "receiver": "上海经发北京",
      "sender": "上海经发北京",
      "flag": 1
    }, {
      "order": "012345678",
      "receiver": "上海经发北京",
      "sender": "上海经发北京",
      "flag": 0
    }, {
      "order": "012345678",
      "receiver": "上海经发北京",
      "sender": "上海经发北京",
      "flag": 1
    }, {
      "order": "012345678",
      "receiver": "上海经发北京",
      "sender": "上海经发北京",
      "flag": 1
    }, {
      "order": "012345678",
      "receiver": "上海经发北京",
      "sender": "上海经发北京",
      "flag": 0
    }];
    $scope.handleConsignList = $scope.handleConsign.length;
    $scope.goConsignDetail = function () {
      $state.go('consignDetail');
    }
  })


/****************************** 办理托运 详情页面*******************************/
  .controller('consignDetailCtrl', function ($scope, $state) {

    //选择地区
    var vm = $scope.vm = {};
    vm.cb = function () {
      console.log(vm.CityPickData2.areaData);
    };

    //例2
    vm.CityPickData2 = {
      areaData: ['请选择省市区'],
      /*title: '卸货点',*/
      hardwareBackButtonClose: false
    };

    $scope.goConsignUser = function () {
      var parmas = angular.element(document.getElementById('search_parmas')).scope().user;
      $state.go('consignUser');
    }
  })

/****************************** 办理托运 用户办理*******************************/
  .controller('consignUserCtrl', function ($scope, $state) {
    $scope.goNext = function () {
      $state.go('consignComplete');
    }
  })

/****************************** 办理托运 完成页*******************************/
  .controller('consignCompleteCtrl', function ($scope, $state) {
  })

  .controller('AccountCtrl', function ($scope) {
    $scope.toCarData = [{
      "no": "12800",
      "status": "已扫描",
      "flag": 0
    }, {
      "no": "12800",
      "status": "未扫描",
      "flag": 1
    }, {
      "no": "12800",
      "status": "已扫描",
      "flag": 0
    }];
  })

/************************  消息中心 ******************************/
  .controller('MessageCenterCtrl', function ($scope, $ionicListDelegate) {
    $scope.shouldShowDelete = false;
    $scope.shouldShowReorder = false;
    $scope.listCanSwipe = true;
    $scope.deleteRecord = function ($index, item) {
      var a = $scope.data.indexOf(item);
      if (a != -1) {
        $scope.data.splice($index, 1);
      }
    };
    $scope.closeDelBtn = function () {
      $ionicListDelegate.$getByHandle('messageCenter').closeOptionButtons();
    };




    $scope.vm = {
      moredata: false,
      messages: [],
      pagination: {
        perPage: 5,
        currentPage: 1
      },
      init: function () {
        /*services.getMessages({perPage: vm.pagination.perPage, page: vm.pagination.currentPage}, function (data) {
         vm.messages = data;
         })*/
        $scope.data = [
          {
            "title": "质量管理类",
            "detail": "2016年2月投诉处理未处理",
            "date": "2016/06/23"
          }, {
            "title": "质量管理类",
            "detail": "2016年2月投诉处理未处理",
            "date": "2016/06/23"
          }, {
            "title": "质量管理类",
            "detail": "2016年2月投诉处理未处理",
            "date": "2016/06/23"
          }, {
            "title": "质量管理类",
            "detail": "2016年2月投诉处理未处理",
            "date": "2016/06/23"
          }
        ];
        $scope.vm.messages = $scope.data;
      }
    };
    $scope.vm.init();
    //上拉加载更多
    $scope.closeMore = false;
    $scope.upInfinite = function(){
      $scope.vm.pagination.currentPage += 1;
      // ajax request后的数据
      $scope.newData = [{
        "title": "人事管理类",
        "detail": "2016年2月投诉处理未处理",
        "date": "2016/06/23"
      },{
        "title": "人事管理类",
        "detail": "2016年2月投诉处理未处理",
        "date": "2016/06/23"
      },{
        "title": "人事管理类",
        "detail": "2016年2月投诉处理未处理",
        "date": "2016/06/23"
      },{
        "title": "人事管理类",
        "detail": "2016年2月投诉处理未处理",
        "date": "2016/06/23"
      },{
        "title": "人事管理类",
        "detail": "2016年2月投诉处理未处理",
        "date": "2016/06/23"
      },{
        "title": "人事管理类",
        "detail": "2016年2月投诉处理未处理",
        "date": "2016/06/23"
      },{
        "title": "人事管理类",
        "detail": "2016年2月投诉处理未处理",
        "date": "2016/06/23"
      },{
        "title": "人事管理类",
        "detail": "2016年2月投诉处理未处理",
        "date": "2016/06/23"
      },{
        "title": "人事管理类",
        "detail": "2016年2月投诉处理未处理",
        "date": "2016/06/23"
      }];
      $scope.vm.messages =  $scope.newData;
      setTimeout(function(){
        if(!$scope.vm.messages.length >0){
          $scope.closeMore = true;
        }
        $scope.$broadcast('scroll.infiniteScrollComplete');
      },2000);
    }
  })


/***************运价查询 ***********************/
  .controller('FareQueryCtrl', function ($scope) {

    $scope.showTransprotProduct = undefined;
    $scope.isShowAllProductInfo = undefined;
    $scope.goQueryInfo = function () {
      if (1 == 1) {
        $scope.tipDate = [{
          "title": "3.60特惠价",
          "date": "3天",
          "money": "340.3"
        }, {
          "title": "3.60特惠价",
          "date": "3天",
          "money": "340.3"
        }, {
          "title": "3.60特惠价",
          "date": "3天",
          "money": "340.3"
        }];
        $scope.isShowAllProductInfo = true;
      }
    };

    $scope.selectTransportProduct = function () {
      if ($scope.showTransprotProduct) {
        $scope.showTransprotProduct = undefined;
        return;
      }
      $scope.transprotProduct = [{
        "title": "电子类"
      }, {
        "title": "食品类"
      }, {
        "title": "日常用品类"
      }];
      if ($scope.transprotProduct) {
        $scope.showTransprotProduct = true;
      }
    }
  })

/***********************封签扫描 ********************************/
  .controller('SealScanCtrl', function ($scope) {
    $scope.selectAll = true;
    $scope.selectL = undefined;
    $scope.selectM = undefined;
    $scope.selectD = undefined;

    $scope.toCarData = [{
      "no": "12800",
      "status": "已扫描",
      "flag": 0
    }, {
      "no": "12800",
      "status": "未扫描",
      "flag": 1
    }, {
      "no": "12800",
      "status": "已扫描",
      "flag": 0
    }];
    $scope.queryType = function (m, n) {
      if (n == 'A') {
        $scope.toCarData = [{
          "no": "12800",
          "status": "已扫描",
          "flag": 0
        }, {
          "no": "12800",
          "status": "未扫描",
          "flag": 1
        }, {
          "no": "12800",
          "status": "已扫描",
          "flag": 0
        }];
        $scope.selectAll = true;
        $scope.selectL = undefined;
        $scope.selectM = undefined;
        $scope.selectD = undefined;
      } else if (n == 'L') {
        $scope.toCarData = [{
          "no": "12800",
          "status": "已扫描",
          "flag": 0
        }, {
          "no": "12800",
          "status": "未扫描",
          "flag": 1
        }];
        $scope.selectL = true;
        $scope.selectAll = undefined;
        $scope.selectM = undefined;
        $scope.selectD = undefined;
      } else if (n == 'M') {
        $scope.toCarData = [{
          "no": "12800",
          "status": "已扫描",
          "flag": 0
        }];
        $scope.selectM = true;
        $scope.selectAll = undefined;
        $scope.selectL = undefined;
        $scope.selectD = undefined;
      } else if (n == 'D') {
        $scope.toCarData = [{
          "no": "12800",
          "status": "已扫描",
          "flag": 1
        }];
        $scope.selectD = true;
        $scope.selectAll = undefined;
        $scope.selectL = undefined;
        $scope.selectM = undefined;
      }
    }
  })

/******************** 投诉录入   查询页 *******************/
  .controller('complaintsQueryCtrl', function ($scope, $state, ionicDatePicker) {
    $scope.startTime = '请选择时间起点';
    $scope.endTime = '请选择时间终点';
    var selDate = {
      callback: function (val, f) {
        var date = new Date(val);
        var year = date.getFullYear();//获取年
        var month = date.getMonth() + 1;//获取月
        var day = date.getDate();//获取日
        $scope.userSelectDate = year + "/" + month + "/" + day;
        if (f == 1) {
          $scope.startTime = $scope.userSelectDate;
        } else {
          $scope.endTime = $scope.userSelectDate;
        }
      },
      from: new Date(2012, 1, 1),
      to: new Date(2017, 1, 1),
      inputDate: new Date(),
      mondayFirst: false,
      // disableWeekdays: [],
      closeOnSelect: false,
      templateType: 'popup'
    };
    $scope.openDatePicker = function (flag) {
      if (flag == 1) {
        ionicDatePicker.openDatePicker(selDate, flag);
      } else {
        ionicDatePicker.openDatePicker(selDate, flag);
      }
    };

    $scope.goQueryComplaints = function () {
      var params = angular.element(document.getElementById('complaints_content')).scope().user;
      $state.go('complaintsList');
    }
  })
/******************** 投诉录入   查询列表页 *******************/
  .controller('complaintsListCtrl', function ($scope, $state) {
    $scope.complaintsData = [{
      "no": "2050482110001",
      "organization": "上海 徐泾办 刘某人",
      "type": "工作推诿"
    }, {
      "no": "2050482110001",
      "organization": "上海 徐泾办 刘某人",
      "type": "工作推诿"
    }, {
      "no": "2050482110001",
      "organization": "上海 徐泾办 刘某人",
      "type": "工作推诿"
    }, {
      "no": "2050482110001",
      "organization": "上海 徐泾办 刘某人",
      "type": "工作推诿"
    }, {
      "no": "2050482110001",
      "organization": "上海 徐泾办 刘某人",
      "type": "工作推诿"
    }];
    $scope.goCheckDetail = function () {
      $state.go('complaintsDetail');
    }
  })

/******************** 投诉录入  明细页*******************/
  .controller('complaintsDetailCtrl', function ($scope, $state, ionicDatePicker, ionicTimePicker) {

    $scope.userSelectDate = '请选择投诉日期';
    $scope.userSelectTime = '请选择投诉时间';

    var selDate = {
      callback: function (val) {
        var date = new Date(val);
        var year = date.getFullYear();//获取年
        var month = date.getMonth() + 1;//获取月
        var day = date.getDate();//获取日
        $scope.userSelectDate = year + "/" + month + "/" + day;
      },
      from: new Date(2012, 1, 1),
      to: new Date(2017, 1,1),
      inputDate: new Date(),
      mondayFirst: false,
      // disableWeekdays: [],
      closeOnSelect: false,
      templateType: 'popup'
    };
    $scope.openDatePicker = function () {
      ionicDatePicker.openDatePicker(selDate);
    };
    var selTime = {
      callback: function (val) {
        if (typeof (val) === 'undefined') {
          console.log('Time not selected');
        } else {
          var selectedTime = new Date(val * 1000);
          var h = selectedTime.getUTCHours();
          var m = selectedTime.getUTCMinutes();
          var s = selectedTime.getUTCMilliseconds();
          /*var userSelectTime = selectedTime.getUTCHours()+":"+selectedTime.getUTCMinutes()+":"+selectedTime.getUTCSeconds();*/
          /*   console.log('点击事件返回值 : ', val, 'and the time is ', selectedTime.getUTCHours(), 'H :', selectedTime.getUTCMinutes(), 'M',selectedTime.getUTCSeconds(),'S');*/
          $scope.userSelectTime = h + ":" + m + ":" + "s";
        }
      },
      inputTime: 50400,
      format: 12,
      step: 10
    };
    $scope.openTimePicker = function () {
      ionicTimePicker.openTimePicker(selTime);
    };

    $scope.complaintsData = [{
      "no": "2050482110001",
      "organization": "上海 徐泾办 刘某人",
      "type": "工作推诿"
    }, {
      "no": "2050482110001",
      "organization": "上海 徐泾办 刘某人",
      "type": "工作推诿"
    }, {
      "no": "2050482110001",
      "organization": "上海 徐泾办 刘某人",
      "type": "工作推诿"
    }, {
      "no": "2050482110001",
      "organization": "上海 徐泾办 刘某人",
      "type": "工作推诿"
    }, {
      "no": "2050482110001",
      "organization": "上海 徐泾办 刘某人",
      "type": "工作推诿"
    }];
  })


/******************** 员工管理 *******************/
  .controller('employeeManageCtrl', function ($scope, $state, $ionicScrollDelegate) {
    $scope.employeeData = [{
      "name": "李某某",
      "no": "501243",
      "sex": "男",
      "post": "电脑主管",
      "organization": "无锡（无锡开发区办）",
      "flag": 1
    }, {
      "name": "王某某",
      "no": "501111",
      "sex": "男",
      "post": "电脑主管",
      "organization": "无锡（无锡开发区办）",
      "flag": 0
    }, {
      "name": "张某某",
      "no": "502222",
      "sex": "男",
      "post": "电脑主管",
      "organization": "无锡（无锡开发区办）",
      "flag": 0
    }, {
      "name": "赵某某",
      "no": "503333",
      "sex": "男",
      "post": "电脑主管",
      "organization": "无锡（无锡开发区办）",
      "flag": 1
    }, {
      "name": "王麻子",
      "no": "5044444",
      "sex": "男",
      "post": "电脑主管",
      "organization": "无锡（无锡开发区办）",
      "flag": 2
    }];

    $scope.goEmployeeDetails = function () {
      $state.go('employeeManageDetail')
    }
  })

/******************** 员工管理 *******************/
  .controller('employeeManageDetailCtrl', function ($scope, $state) {
    $scope.employeeDetailData = [{
      "name": "李某某",
      "no": "501243",
      "sex": "男",
      "post": "电脑主管",
      "organization": "无锡（无锡开发区办）",
      "flag": 1
    }, {
      "name": "王某某",
      "no": "501111",
      "sex": "男",
      "post": "电脑主管",
      "organization": "无锡（无锡开发区办）",
      "flag": 0
    }, {
      "name": "张某某",
      "no": "502222",
      "sex": "男",
      "post": "电脑主管",
      "organization": "无锡（无锡开发区办）",
      "flag": 0
    }, {
      "name": "赵某某",
      "no": "503333",
      "sex": "男",
      "post": "电脑主管",
      "organization": "无锡（无锡开发区办）",
      "flag": 1
    }, {
      "name": "王麻子",
      "no": "5044444",
      "sex": "男",
      "post": "电脑主管",
      "organization": "无锡（无锡开发区办）",
      "flag": 2
    }];
  })

/******************** 高保上报 *******************/
  .controller('hifReportCtrl', function ($scope, $state) {
    $scope.hifReportData = [{
      "name": "配件",
      "address": "上海-无锡",
      "money": "20万",
      "much": "10件",
      "no": "021020150427001",
      "flag": 1
    }, {
      "name": "配件",
      "address": "上海-无锡",
      "money": "20万",
      "much": "10件",
      "no": "021020150427001",
      "flag": 1
    }, {
      "name": "配件",
      "address": "上海-无锡",
      "money": "20万",
      "much": "10件",
      "no": "021020150427001",
      "flag": 0
    }, {
      "name": "配件",
      "address": "上海-无锡",
      "money": "20万",
      "much": "10件",
      "no": "021020150427001",
      "flag": 1
    }, {
      "name": "配件",
      "address": "上海-无锡",
      "money": "20万",
      "much": "10件",
      "no": "021020150427001",
      "flag": 1
    }];
  })


/******************** 禁用品查询 *******************/
  .controller('contrabandQueryCtrl', function ($scope, $state) {
    $scope.contrabandData = [{
      "name": "火柴",
      "reason": "容易自然"
    }, {
      "name": "玻璃",
      "reason": "容易破碎"
    }, {
      "name": "鞭炮",
      "reason": "容易引燃爆炸"
    }, {
      "name": "炮竹",
      "reason": "容易引燃爆炸"
    }, {
      "name": "硫酸",
      "reason": "容易腐蚀其他货物"
    }];
  })


/******************** 货物查询 *******************/
  .controller('goodsQueryCtrl', function ($scope, $state) {
    $scope.goodsData = [{
      "order": "50427-02012345-6789-12345-4",
      "receiver": "张三",
      "sender": "李四",
      "money": "50.00元",
      "total": "120.00元"
    }, {
      "order": "50427-02012345-6789-12345-4",
      "receiver": "张三",
      "sender": "李四",
      "money": "50.00元",
      "total": "120.00元"
    }, {
      "order": "50427-02012345-6789-12345-4",
      "receiver": "张三",
      "sender": "李四",
      "money": "50.00元",
      "total": "120.00元"
    }, {
      "order": "50427-02012345-6789-12345-4",
      "receiver": "张三",
      "sender": "李四",
      "money": "50.00元",
      "total": "120.00元"
    }, {
      "order": "50427-02012345-6789-12345-4",
      "receiver": "张三",
      "sender": "李四",
      "money": "50.00元",
      "total": "120.00元"
    }];
    $scope.goGoodsQueryDetail = function () {
      $state.go('goodsQueryDetail');
    }
  })

/******************** 货物查询   明细页面*******************/
  .controller('goodsQueryDetailCtrl', function ($scope, $state) {
  })


/******************** 进仓管理  *******************/
  .controller('warehousingManageCtrl', function ($scope, $state) {
    $scope.warehousingManageData = [{
      "address": "天津佳吉塘沽办",
      "tip": "羊山港需单独确认联系",
      "warehouse": "天津塘沽港汉英路58号7库107间",
      "little_info": "<=1吨   150元（超区超吨增加50元/吨）",
      "over_info": "<=4立方  200元（超区超方增加50元/吨）"
    }, {
      "address": "天津佳吉塘沽办",
      "tip": "羊山港需单独确认联系",
      "warehouse": "天津塘沽港汉英路58号7库107间",
      "little_info": "<=1吨   150元（超区超吨增加50元/吨）",
      "over_info": "<=4立方  200元（超区超方增加50元/吨）"
    }, {
      "address": "天津佳吉塘沽办",
      "tip": "羊山港需单独确认联系",
      "warehouse": "天津塘沽港汉英路58号7库107间",
      "little_info": "<=1吨   150元（超区超吨增加50元/吨）",
      "over_info": "<=4立方  200元（超区超方增加50元/吨）"
    }, {
      "address": "天津佳吉塘沽办",
      "tip": "羊山港需单独确认联系",
      "warehouse": "天津塘沽港汉英路58号7库107间",
      "little_info": "<=1吨   150元（超区超吨增加50元/吨）",
      "over_info": "<=4立方  200元（超区超方增加50元/吨）"
    }, {
      "address": "天津佳吉塘沽办",
      "tip": "羊山港需单独确认联系",
      "warehouse": "天津塘沽港汉英路58号7库107间",
      "little_info": "<=1吨   150元（超区超吨增加50元/吨）",
      "over_info": "<=4立方  200元（超区超方增加50元/吨）"
    }];

    $scope.queryListNum = $scope.warehousingManageData.length;
  })


/******************** 入仓扫描  *******************/
  .controller('warehousingScanCtrl', function ($scope, $state) {

    $scope.selectAll = true;
    $scope.selectL = undefined;
    $scope.selectM = undefined;
    $scope.selectD = undefined;

    $scope.storageScanData = [{
      "no": "L02101150409001"
    }, {
      "no": "L02101150409002"
    }, {
      "no": "L02101150409003"
    }, {
      "no": "L02101150409004"
    }];
    $scope.inventoryScanData = [{
      "no": "L02101150409004"
    }, {
      "no": "L02101150409005"
    }, {
      "no": "L02101150409006"
    }];

    $scope.queryType = function (m, n) {
      if (m == 0) {
        if (n == 'A') {
          $scope.storageScanData = [{
            "no": "L02101150409001"
          }, {
            "no": "L02101150409001"
          }, {
            "no": "L02101150409001"
          }, {
            "no": "L02101150409003"
          }];
          $scope.selectAll = true;
          $scope.selectL = undefined;
          $scope.selectM = undefined;
          $scope.selectD = undefined;
        } else if (n == 'L') {
          $scope.storageScanData = [{
            "no": "L02101150409001"
          }, {
            "no": "L02101150409001"
          }, {
            "no": "L02101150409003"
          }];
          $scope.selectL = true;
          $scope.selectAll = undefined;
          $scope.selectM = undefined;
          $scope.selectD = undefined;
        } else if (n == 'M') {
          $scope.storageScanData = [{
            "no": "L02101150409003"
          }, {
            "no": "L02101150409003"
          }];
          $scope.selectM = true;
          $scope.selectAll = undefined;
          $scope.selectL = undefined;
          $scope.selectD = undefined;
        } else if (n == 'D') {
          $scope.storageScanData = [{
            "no": "L02101150409003"
          }];
          $scope.selectD = true;
          $scope.selectAll = undefined;
          $scope.selectL = undefined;
          $scope.selectM = undefined;
        }
      } else {
        if (n == 'A') {
          $scope.inventoryScanData = [{
            "no": "L02101150409001"
          }, {
            "no": "L02101150409001"
          }, {
            "no": "L02101150409001"
          }, {
            "no": "L02101150409003"
          }];
          $scope.selectAll = true;
          $scope.selectL = undefined;
          $scope.selectM = undefined;
          $scope.selectD = undefined;
        } else if (n == 'L') {
          $scope.inventoryScanData = [{
            "no": "L02101150409001"
          }, {
            "no": "L02101150409001"
          }, {
            "no": "L02101150409003"
          }];
          $scope.selectL = true;
          $scope.selectAll = undefined;
          $scope.selectM = undefined;
          $scope.selectD = undefined;
        } else if (n == 'M') {
          $scope.inventoryScanData = [{
            "no": "L02101150409003"
          }, {
            "no": "L02101150409003"
          }];
          $scope.selectM = true;
          $scope.selectAll = undefined;
          $scope.selectL = undefined;
          $scope.selectD = undefined;
        } else if (n == 'D') {
          $scope.inventoryScanData = [{
            "no": "L02101150409003"
          }];
          $scope.selectD = true;
          $scope.selectAll = undefined;
          $scope.selectL = undefined;
          $scope.selectM = undefined;
        }
      }
    };
  })

/******************** 送货签收  *******************/
  .controller('deliveryReceiptCtrl', function ($scope, $state) {
    $scope.goDeliverReceiptDetail = function () {
      $state.go('deliveryReceiptDetail');
    }

  })

/******************** 送货签收   明细页面*******************/
  .controller('deliveryReceiptDetailCtrl', function ($scope, $state) {
    $scope.undoData = [{
      "order": "50427-02011234-6789-12345-4",
      "name": "张三",
      "address": "江苏省无锡市锡山开发区",
      "num": "1件"
    }, {
      "order": "50427-02011234-6789-12345-4",
      "name": "张三",
      "address": "江苏省无锡市锡山开发区",
      "num": "2件"
    }, {
      "order": "50427-02011234-6789-12345-4",
      "name": "张三",
      "address": "江苏省无锡市锡山开发区",
      "num": "3件"
    }];
    $scope.deliverReceiptDetail = function () {
      $state.go('')
    }

  })


/******************** 网点查询  *******************/
  .controller('websiteQueryCtrl', function ($scope, $state) {
    $scope.websiteQueryData = [{
      "depart": "上海佳吉（徐泾办）",
      "people": "张三",
      "address": "上海北青松路2999号"
    }, {
      "depart": "上海佳吉（徐泾办）",
      "people": "张三",
      "address": "上海北青松路2999号"
    }, {
      "depart": "上海佳吉（徐泾办）",
      "people": "张三",
      "address": "上海北青松路2999号"
    }, {
      "depart": "上海佳吉（徐泾办）",
      "people": "张三",
      "address": "上海北青松路2999号"
    }, {
      "depart": "上海佳吉（徐泾办）",
      "people": "张三",
      "address": "上海北青松路2999号"
    }];
    $scope.goQueryMap = function () {
      $state.go('websiteQueryMap');
    }
  })
/******************** 网点查询  地图查询  *******************/
  .controller('websiteQueryMapCtrl', function ($scope, $state) {
    $scope.goWebsiteDetail = function () {
      $state.go('websiteQueryDetail');
    }
  })

/******************** 网点查询  网点详情*******************/
  .controller('websiteQueryDetailCtrl', function ($scope, $state) {
  })

/******************** 扫描装车*******************/
  .controller('scanLoadingCtrl', function ($scope, $state) {
    $scope.selectAll = true;
    $scope.selectL = undefined;
    $scope.selectM = undefined;
    $scope.selectD = undefined;

    $scope.scanLoadingData = [{
      "no": "L02101150409001"
    }, {
      "no": "L02101150409001"
    }, {
      "no": "M02101150409002"
    }, {
      "no": "D02101150409003"
    }];
    $scope.queryType = function (n) {
      if (n == 'A') {
        $scope.scanLoadingData = [{
          "no": "L02101150409001"
        }, {
          "no": "L02101150409001"
        }, {
          "no": "M02101150409002"
        }, {
          "no": "D02101150409003"
        }];
        $scope.selectAll = true;
        $scope.selectL = undefined;
        $scope.selectM = undefined;
        $scope.selectD = undefined;
      } else if (n == 'L') {
        $scope.scanLoadingData = [{
          "no": "L02101150409001"
        }, {
          "no": "L02101150409001"
        }];
        $scope.selectL = true;
        $scope.selectAll = undefined;
        $scope.selectM = undefined;
        $scope.selectD = undefined;
      } else if (n == 'M') {
        $scope.scanLoadingData = [{
          "no": "M02101150409002"
        }];
        $scope.selectM = true;
        $scope.selectAll = undefined;
        $scope.selectL = undefined;
        $scope.selectD = undefined;
      } else if (n == 'D') {
        $scope.scanLoadingData = [{
          "no": "D02101150409003"
        }];
        $scope.selectD = true;
        $scope.selectAll = undefined;
        $scope.selectL = undefined;
        $scope.selectM = undefined;
      }
    };
    $scope.goScanLoadingNext = function () {
      $state.go('scanLoadingNext');
    }
  })

/******************** 扫描装车  下一页*******************/
  .controller('scanLoadingNextCtrl', function ($scope, $state) {

    //初始化件数为1
    $scope.input = {'total': '1'};
    $scope.clickBtn = true;
    $scope.inputBtn = undefined;


    $scope.scanLoadingNextData = [{
      "labelID": "0123456789-1",
      "id": "50409-02105100-0101-5678-1"
    }, {
      "labelID": "0123456789-2",
      "id": "50409-02105100-0101-5678-2"
    }, {
      "labelID": "0123456789-3",
      "id": "50409-02105100-0101-5678-3"
    }];


    // 点击- - -
    $scope.minus = function (n) {
      if ($scope.input.total == 1) {
        return;
      } else {
        var n = parseInt(n);
        $scope.input.total = --n;
      }
    };
    // 点击+++++
    $scope.adds = function (n) {
      var n = parseInt(n);
      $scope.input.total = ++n;
    };

    $scope.scanLoadingData = [{
      "no": "L02101150409001"
    }, {
      "no": "L02101150409002"
    }, {
      "no": "L02101150409003"
    }];


    //选择地区
    var vm = $scope.vm = {};
    vm.cb = function () {
      console.log(vm.CityPickData2.areaData);
    };

    //例2
    vm.CityPickData2 = {
      areaData: ['请选择城市'],
      /*title: '卸货点',*/
      hardwareBackButtonClose: false
    };

    $scope.goDelete = function (item, $index) {
      var a = $scope.scanLoadingNextData.indexOf(item);
      if (a != -1) {
        $scope.scanLoadingNextData.splice($index, 1);
      }
    };

    $scope.goScanLoadingPre = function () {
      $state.go('scanLoading');
    };
    $scope.goScanLoadingDetail = function () {
      var city = vm.CityPickData2.areaData;
      $state.go('scanLoadingDetail')
    }
  })

/******************** 扫描装车  详情页*******************/
  .controller('scanLoadingDetailCtrl', function ($scope, $state) {
    $scope.scanLoadingDetailData = [{
      "no": "012345678-1",
      "order": "50409-02105100-0101-5678-3"
    }, {
      "no": "012345678-1",
      "order": "50409-02105100-0101-5678-3"
    }, {
      "no": "012345678-1",
      "order": "50409-02105100-0101-5678-3"
    }];
  })


/******************** 路线库存查询*******************/
  .controller('pathReserveQueryCtrl', function ($scope, $ionicModal) {
    $scope.pathReserveQueryData = [{
      "order": "012345678",
      "no": "50922-51000210-0101-0789-10",
      "day": "4天",
      "goodsSum": "10件",
      "weight": "100kg",
      "volume": "1立方"
    }, {
      "order": "012345678",
      "no": "50922-51000210-0101-0789-10",
      "day": "4天",
      "goodsSum": "10件",
      "weight": "100kg",
      "volume": "1立方"
    }, {
      "order": "012345678",
      "no": "50922-51000210-0101-0789-10",
      "day": "4天",
      "goodsSum": "10件",
      "weight": "100kg",
      "volume": "1立方"
    }, {
      "order": "012345678",
      "no": "50922-51000210-0101-0789-10",
      "day": "4天",
      "goodsSum": "10件",
      "weight": "100kg",
      "volume": "1立方"
    }, {
      "order": "012345678",
      "no": "50922-51000210-0101-0789-10",
      "day": "4天",
      "goodsSum": "10件",
      "weight": "100kg",
      "volume": "1立方"
    }];

    $ionicModal.fromTemplateUrl('modal.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function (modal) {
      $scope.modal = modal;
    });
    $scope.openModal = function () {
      $scope.modal.show();
    };
    $scope.closeModal = function () {
      $scope.modal.hide();
    };
    //当我们用完模型时，清除它！
    $scope.$on('$destroy', function () {
      $scope.modal.remove();
    });
    // 当隐藏模型时执行动作
    $scope.$on('modal.hide', function () {
      // 执行动作
    });
    // 当移动模型时执行动作
    $scope.$on('modal.removed', function () {
      // 执行动作
    });

    $scope.pathReserveResult = function (n) {

      $scope.pathReserveQueryData = [{
        "order": "012345678",
        "no": "50922-51000210-0101-0789-10",
        "day": "4天",
        "goodsSum": "10件",
        "weight": "100kg",
        "volume": "1立方"
      }];
      $scope.modal.hide();
    }
  })


/******************** 禁用车查询 *******************/
  .controller('disabledCarQueryCtrl', function ($scope, $state) {

    $scope.goQueryDisabledCar = function (user) {
      $scope.disabledCarQueryData = [{
        "carId": "沪A 12345",
        "engineId": "1578425w",
        "frameId": "LWJIDJI15465A54EF",
        "flag": 1
      }, {
        "carId": "沪A 12345",
        "engineId": "1578425w",
        "frameId": "LWJIDJI15465A54EF",
        "flag": 0
      }, {
        "carId": "沪A 12345",
        "engineId": "1578425w",
        "frameId": "LWJIDJI15465A54EF",
        "flag": 1
      }];
    }

    $scope.goDetail = function (index, data) {
      $state.go('disabledCarQueryDetail');

    }
  })

/******************** 禁用车查询  明细页面 *******************/
  .controller('disabledCarQueryDetailCtrl', function ($scope, $state) {

  })

/******************** 禁用司机查询 *******************/
  .controller('disabledDriverQueryCtrl', function ($scope, $state) {

    $scope.goQueryDisabledCar = function (user) {
      $scope.disabledDriverQueryData = [{
        "name": "李某某",
        "driveId": "230826*********1234",
        "id": "230826*********1234",
        "inducationId": "230826*********1234",
        "tips": "不配合公司安排，态度恶劣",
        "flag": 1
      }, {
        "name": "李某某",
        "driveId": "230826*********1234",
        "id": "230826*********1234",
        "inducationId": "230826*********1234",
        "tips": "不配合公司安排，态度恶劣",
        "flag": 0
      }, {
        "name": "李某某",
        "driveId": "230826*********1234",
        "id": "230826*********1234",
        "inducationId": "230826*********1234",
        "tips": "不配合公司安排，态度恶劣",
        "flag": 1
      }];
    }

  })


/******************** 办理提货 *******************/
  .controller('handleDeliveryCtrl', function ($scope, $state) {
    $scope.deliveryData = [{
      "order": "701259846",
      "address": "上海-无锡",
      "goodsNo": "50427-02105100-0101-4567-10",
      "receipter": "上海经发公司",
      "flag": 1
    }, {
      "order": "701259846",
      "address": "上海-无锡",
      "goodsNo": "50427-02105100-0101-4567-10",
      "receipter": "上海经发公司",
      "flag": 0
    }, {
      "order": "701259846",
      "address": "上海-无锡",
      "goodsNo": "50427-02105100-0101-4567-10",
      "receipter": "上海经发公司",
      "flag": 1
    }];


    $scope.goSearchHistory = function () {
      $state.go('searchHistory');
    }
  })


/******************** 办理提货 搜索历史页面 *******************/
  .controller('searchHistoryCtrl', function ($scope, $rootScope, $state, locals) {
    $scope.defaultType = {
      'type': '0',
      'name': '运单号'
    };
    $scope.selectSearchType = undefined;
    $scope.searchHistory = [];

    $scope.selectType = [{
      'type': '1',
      'name': '货物编码'
    }, {
      'type': '2',
      'name': '发货人'
    }, {
      'type': '3',
      'name': '收货人'
    }, {
      'type': '4',
      'name': '电话'
    }, {
      'type': '5',
      'name': '提货密码'
    }];
    $scope.UserSelectTypeItem = function (index, data) {
      $scope.defaultType = data;
      $scope.selectSearchType = undefined;
    };
    $scope.goSearch = function (type, keyWord) {
      $scope.searchHistory.push(keyWord);


    };

    /*$scope.searchHistory = locals.get('SEARCH_HISTORY');
     if(!$scope.searchHistory){
     $scope.searchHistory = [];
     locals.set('SEARCH_HISTORY',$scope.searchHistory);
     }*/

    $scope.cancle = function () {
      $state.go('handleDelivery');
    };

    $scope.selectTypeItem = function () {
      $scope.selectSearchType = true;
    };

    $scope.deliveryData = [{
      "order": "701259846",
      "address": "上海-无锡",
      "goodsNo": "50427-02105100-0101-4567-10",
      "receipter": "上海经发公司",
      "flag": 1
    }, {
      "order": "701259846",
      "address": "上海-无锡",
      "goodsNo": "50427-02105100-0101-4567-10",
      "receipter": "上海经发公司",
      "flag": 0
    }, {
      "order": "701259846",
      "address": "上海-无锡",
      "goodsNo": "50427-02105100-0101-4567-10",
      "receipter": "上海经发公司",
      "flag": 1
    }];
  })


/******************** 经营分析 *******************/
  .controller('businessAnalysisCtrl', function ($scope, $state) {
    $scope.businessAnalysisData = [{
      "order": "701259846",
      "address": "上海-无锡",
      "goodsNo": "50427-02105100-0101-4567-10",
      "receipter": "上海经发公司",
      "flag": 1
    }, {
      "order": "701259846",
      "address": "上海-无锡",
      "goodsNo": "50427-02105100-0101-4567-10",
      "receipter": "上海经发公司",
      "flag": 0
    }, {
      "order": "701259846",
      "address": "上海-无锡",
      "goodsNo": "50427-02105100-0101-4567-10",
      "receipter": "上海经发公司",
      "flag": 1
    }];
    $scope.goSearchHistory = function () {
      $state.go('searchHistory');
    }
  })


/******************** 签单扫描 *******************/
  .controller('signScanCtrl', function ($scope, $state, $ionicModal) {
    $scope.ionScrollHeight = (window.innerHeight - 44) + 'px';
    $scope.bigImage = false;
    $scope.signScanCtrlData = [{
      "order": "701259846",
      "phone": "12345678912",
      "status": "发货"
    }, {
      "order": "701259846",
      "phone": "12345678912",
      "status": "到货"
    }, {
      "order": "701259846",
      "phone": "12345678912",
      "status": "发货"
    }];


    //点击查看大图
    $ionicModal.fromTemplateUrl('bigImg.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function (modal) {
      $scope.modal = modal;
    });

    $scope.openModal = function () {
      $scope.modal.show();
    };
    $scope.closeModal = function () {
      $scope.modal.hide();
    };
    //当我们用完模型时，清除它！
    $scope.$on('$destroy', function () {
      $scope.modal.remove();
    });
    // 当隐藏模型时执行动作
    $scope.$on('modal.hide', function () {
      // 执行动作
    });
    // 当移动模型时执行动作
    $scope.$on('modal.removed', function () {
      // 执行动作
    });

    $scope.uploadImg = function () {
      $state.go('uploadImg');
    };


    $scope.shouBigImage = function (imageName) {  //传递一个参数（图片的URl）
      $scope.openModal();
      $scope.Url = imageName;                   //$scope定义一个变量Url，这里会在大图出现后再次点击隐藏大图使用
      $scope.bigImage = true;                   //显示大图
    };

    $scope.hideBigImage = function () {
      $scope.bigImage = false;
    };
    $scope.goSearchHistory = function () {
      $state.go('searchHistory');
    }
  })

/******************** 签单扫描   上传图片 *******************/
  .controller('uploadImgCtrl',['$scope','$state','$cordovaCamera','$ionicScrollDelegate','$ionicActionSheet' ,function ($scope, $state, $cordovaCamera, $ionicScrollDelegate, $ionicActionSheet,$cordovaDevice) {

    $scope.goSearchHistory = function () {
      $state.go('searchHistory');
    };

   /* $scope.isIOS = function(){
      var deviceInformation = ionic.Platform.device();
      var isIPad = ionic.Platform.isIPad();
      var isIOS = ionic.Platform.isIOS();
      var isAndroid = ionic.Platform.isAndroid();
      //Returns String — eg: "iOS", "Android", "WinCE"
      var platform = $cordovaDevice.getPlatform();
      platform = platform.toLowerCase();
      if(platform == "iOS"){
        return true;
      }else{
        return false;
      }
    };*/

    //点击照相机
    $scope.picture = function () {
      $ionicActionSheet.show({
        buttons: [
          {text: '相机'},
          {text: '图库'}
        ],
        cancelText: '关闭',
        cancel: function () {
          return true;
        },
        buttonClicked: function (index) {
          switch (index) {
            case 0:
              takePhoto();
              break;
            case 1:
              pickImage();
              break;
            default:
              break;
          }
          return true;
        }
      });
    };

    //image picker
    var pickImage = function () {
      var options = {
        destinationType: Camera.DestinationType.FILE_URI,
        sourceType: Camera.PictureSourceType.CAMERA
      };
      $cordovaCamera.getPicture(options).then(function(imageURI) {
        var image = document.getElementById('myImage');
        image.src = imageURI;
      }, function(err) {
        // error
      });
    };
    var takePhoto = function () {
      var options = {
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
        allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 100,
        targetHeight: 100,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false,
        correctOrientation:true
      };
      $cordovaCamera.getPicture(options).then(function(imageData) {
        var image = document.getElementById('myImage');
        image.src = "data:image/jpeg;base64," + imageData;
      }, function(err) {
        // error
      });
    };

    //图片上传upImage（图片路径）
    //http://ngcordova.com/docs/plugins/fileTransfer/  资料地址
    var upImage = function (imageUrl) {
      document.addEventListener('deviceready', function () {
        var url = "http://192.168.1.248/api/UserInfo/PostUserHead";
        var options = {};
        $cordovaFileTransfer.upload(url, imageUrl, options)
          .then(function (result) {
            alert(JSON.stringify(result.response));
            alert("success");
            alert(result.message);
          }, function (err) {
            alert(JSON.stringify(err));
            alert(err.message);
            alert("fail");
          }, function (progress) {
            // constant progress updates
          });

      }, false);
    };


    $scope.upload = function (n) {
      $scope.pathReserveQueryData = [{
        "order": "012345678",
        "no": "50922-51000210-0101-0789-10",
        "day": "4天",
        "goodsSum": "10件",
        "weight": "100kg",
        "volume": "1立方"
      }];
      $scope.modal.hide();
    };
  }])

/******************** 进仓单扫描 *******************/
  .controller('enterWarehouseScanCtrl', function ($scope, $state, $cordovaCamera, $ionicModal) {
    $scope.bigImage = false;
    $scope.signScanCtrlData = [{
      "order": "701259846",
      "phone": "12345678912",
      "status": "发货"
    }, {
      "order": "701259846",
      "phone": "12345678912",
      "status": "到货"
    }, {
      "order": "701259846",
      "phone": "12345678912",
      "status": "发货"
    }];


    var Camera = navigator.camera;
    $scope.takePhoto = function () {
      var options = {
        //这些参数可能要配合着使用，比如选择了sourcetype是0，destinationtype要相应的设置
        quality: 100,                                            //相片质量0-100
        destinationType: Camera.DestinationType.FILE_URI,        //返回类型：DATA_URL= 0，返回作为 base64 編碼字串。 FILE_URI=1，返回影像档的 URI。NATIVE_URI=2，返回图像本机URI (例如，資產庫)
        sourceType: Camera.PictureSourceType.CAMERA,             //从哪里选择图片：PHOTOLIBRARY=0，相机拍照=1，SAVEDPHOTOALBUM=2。0和1其实都是本地图库
        allowEdit: false,                                        //在选择之前允许修改截图
        encodingType: Camera.EncodingType.JPEG,                   //保存的图片格式： JPEG = 0, PNG = 1
        targetWidth: 200,                                        //照片宽度
        targetHeight: 200,                                       //照片高度
        mediaType: 0,                                             //可选媒体类型：圖片=0，只允许选择图片將返回指定DestinationType的参数。 視頻格式=1，允许选择视频，最终返回 FILE_URI。ALLMEDIA= 2，允许所有媒体类型的选择。
        cameraDirection: 0,                                       //枪后摄像头类型：Back= 0,Front-facing = 1
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: true                                   //保存进手机相册
      };

      $cordovaCamera.getPicture(options).then(function (imageData) {
        CommonJs.AlertPopup(imageData);
        var image = document.getElementById('myImage');
        image.src = imageData;
        //image.src = "data:image/jpeg;base64," + imageData;
      }, function (err) {
        // error
        CommonJs.AlertPopup(err.message);
      });

    };

    $ionicModal.fromTemplateUrl('uploadPic.html', {
      scope: $scope,
      animation: 'slide-in-up'
    }).then(function (modal) {
      $scope.modal = modal;
    });
    $scope.openModal = function () {
      $scope.modal.show();
    };
    $scope.closeModal = function () {
      $scope.modal.hide();
    };
    //当我们用完模型时，清除它！
    $scope.$on('$destroy', function () {
      $scope.modal.remove();
    });
    // 当隐藏模型时执行动作
    $scope.$on('modal.hide', function () {
      // 执行动作
    });
    // 当移动模型时执行动作
    $scope.$on('modal.removed', function () {
      // 执行动作
    });
    $scope.upload = function (n) {

      $scope.pathReserveQueryData = [{
        "order": "012345678",
        "no": "50922-51000210-0101-0789-10",
        "day": "4天",
        "goodsSum": "10件",
        "weight": "100kg",
        "volume": "1立方"
      }];
      $scope.modal.hide();
    };

    $scope.shouBigImage = function (imageName) {  //传递一个参数（图片的URl）
      $scope.Url = imageName;                   //$scope定义一个变量Url，这里会在大图出现后再次点击隐藏大图使用
      $scope.bigImage = true;                   //显示大图
    };

    $scope.hideBigImage = function () {
      $scope.bigImage = false;
    };


    $scope.goSearchHistory = function () {
      $state.go('searchHistory');
    }
  })


/******************** 装车质量跟踪 *******************/
  .controller('loadingQualityCtrl', function ($scope, $state, ionicDatePicker) {
    $scope.startTime = '请选择时间起点';
    $scope.endTime = '请选择时间终点';
    var selDate = {
      callback: function (val, f) {
        var date = new Date(val);
        var year = date.getFullYear();//获取年
        var month = date.getMonth() + 1;//获取月
        var day = date.getDate();//获取日
        $scope.userSelectDate = year + "/" + month + "/" + day;
        if (f == 1) {
          $scope.startTime = $scope.userSelectDate;
        } else {
          $scope.endTime = $scope.userSelectDate;
        }
      },
      from: new Date(2012, 1, 1),
      to: new Date(2017, 1, 1),
      inputDate: new Date(),
      mondayFirst: false,
      disableWeekdays: [],
      closeOnSelect: false,
      templateType: 'popup'
    };
    $scope.openDatePicker = function (flag) {
      if (flag == 1) {
        ionicDatePicker.openDatePicker(selDate, flag);
      } else {
        ionicDatePicker.openDatePicker(selDate, flag);
      }
    };

    $scope.goQueryInfo = function () {
      $scope.queryinfo = [{
        "loadingOrder": "L1226789701259846",
        "photoer": "李某某",
        "photoSys": "无锡",
        "carNo": "苏BR1234",
        "router": "无锡-上海-广州"
      }, {
        "loadingOrder": "L1226789701259846",
        "photoer": "李某某",
        "photoSys": "无锡",
        "carNo": "苏BR1234",
        "router": "无锡-上海-广州"
      }, {
        "loadingOrder": "L1226789701259846",
        "photoer": "李某某",
        "photoSys": "无锡",
        "carNo": "苏BR1234",
        "router": "无锡-上海-广州"
      }];
    }
    $scope.goLoadingQualityDetail = function (data) {
      $state.go('loadingQualityDetail');
    }
  })

/******************** 装车质量跟踪 详情页面 *******************/
  .controller('loadingQualityDetailCtrl', function ($scope, $state) {
    $scope.queryinfo = [{
      "loadingOrder": "L1226789701259846",
      "photoer": "李某某",
      "photoSys": "无锡",
      "carNo": "苏BR1234",
      "router": "无锡-上海-广州"
    }, {
      "loadingOrder": "L1226789701259846",
      "photoer": "李某某",
      "photoSys": "无锡",
      "carNo": "苏BR1234",
      "router": "无锡-上海-广州"
    }, {
      "loadingOrder": "L1226789701259846",
      "photoer": "李某某",
      "photoSys": "无锡",
      "carNo": "苏BR1234",
      "router": "无锡-上海-广州"
    }];

  })


/******************** 指标管理 *******************/
  .controller('targetManageCtrl', function ($scope, $state) {
    $scope.goQueryInfo = function () {
      //输入的查询条件
      var s = document.getElementById("org").value;
      var t = document.getElementById("type").value;
      var y = document.getElementById("year").value;


      $scope.trendData = [{
        "month": "1月",
        "expect": "20",
        "actual": "22"
      }, {
        "month": "2月",
        "expect": "22",
        "actual": "26"
      }, {
        "month": "3月",
        "expect": "24",
        "actual": "18"
      }, {
        "month": "4月",
        "expect": "18",
        "actual": "17"
      }, {
        "month": "5月",
        "expect": "20",
        "actual": "20"
      }, {
        "month": "6月",
        "expect": "35",
        "actual": "37"
      }, {
        "month": "7月",
        "expect": "38",
        "actual": "30"
      }, {
        "month": "8月",
        "expect": "30",
        "actual": "34"
      }, {
        "month": "9月",
        "expect": "32",
        "actual": "39"
      }]

    }
  })
