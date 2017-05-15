angular.module('huatekApp.router', [])
.config(function($stateProvider, $urlRouterProvider,$ionicConfigProvider) {
    $ionicConfigProvider.platform.ios.tabs.style('standard');
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.android.tabs.position('standard');

    $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.navBar.alignTitle('left');

    $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
    $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

    $ionicConfigProvider.platform.ios.views.transition('ios');
    $ionicConfigProvider.platform.android.views.transition('android');

  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
        url: '/tab',
        abstract: true,
        templateUrl: 'templates/tabs.html'
    })

    //首页
    .state('tab.home', {
        url: '/home',
        views: {
          'tab-home': {
            templateUrl: 'modules/business/home/index.html',
            controller: 'HomeCtrl'
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
    })

    //登录页
    .state('login', {
      url: '/login',
      templateUrl: 'modules/business/login/index.html',
      controller: 'LoginCtrl',
      css:'modules/business/login/css/login.css'
    })
    //办理托运模块
    .state('handleConsign', {
      url: '/handleConsign',
      templateUrl: 'modules/business/handleConsign/index.html',
      controller: 'handleConsignCtrl'
    })
    //办理托运模块  托运详情
    .state('consignDetail', {
      url: '/consignDetail',
      templateUrl: 'modules/business/handleConsign/views/consignDetail.html',
      controller: 'consignDetailCtrl'
    })
    //办理托运模块  用户办理
    .state('consignUser', {
      url: '/consignUser',
      templateUrl: 'modules/business/handleConsign/views/consignUser.html',
      controller: 'consignUserCtrl'
    })
    //办理托运模块  用户办理完后才能
    .state('consignComplete', {
      url: '/consignComplete',
      templateUrl: 'modules/business/handleConsign/views/consignComplete.html',
      controller: 'consignCompleteCtrl'
    })
    //运价查询
    .state('fareQuery', {
      url: '/fareQuery',
      templateUrl: 'modules/business/fareQuery/index.html',
      controller: 'FareQueryCtrl'
    })
    //封签扫描
    .state('sealScan', {
      url: '/sealScan',
      templateUrl: 'modules/business/sealScan/index.html',
      controller: 'SealScanCtrl'
    })
    //消息中心
    .state('messageCenter', {
      url: '/messageCenter',
      templateUrl: 'modules/business/messageCenter/index.html',
      controller: 'MessageCenterCtrl'
    })
    //投诉录入  查询页
    .state('complaintsQuery', {
      url: '/complaintsQuery',
      templateUrl: 'modules/business/complaintsEntry/index.html',
      controller: 'complaintsQueryCtrl'
    })
    //投诉录入  查询列表页
    .state('complaintsList', {
      url: '/complaintsList',
      templateUrl: 'modules/business/complaintsEntry/views/complaintsList.html',
      controller: 'complaintsListCtrl'
    })
    //投诉录入  明细页
    .state('complaintsDetail', {
      url: '/complaintsDetail',
      templateUrl: 'modules/business/complaintsEntry/views/complaintsDetail.html',
      controller: 'complaintsDetailCtrl'
    })

    //员工管理
    .state('employeeManage', {
      url: '/employeeManage',
      templateUrl: 'modules/business/employeeManage/index.html',
      controller: 'employeeManageCtrl'
    })
    //员工管理  员工信息页面
    .state('employeeManageDetail', {
      url: '/employeeManageDetail',
      templateUrl: 'modules/business/employeeManage/views/employeeManageDetail.html',
      controller: 'employeeManageDetailCtrl'
    })

    //高保上报
    .state('hifReport', {
      url: '/hifReport',
      templateUrl: 'modules/business/hifReport/index.html',
      controller: 'hifReportCtrl'
    })

    //禁用品查询
    .state('contrabandQuery', {
      url: '/contrabandQuery',
      templateUrl: 'modules/business/contrabandQuery/index.html',
      controller: 'contrabandQueryCtrl'
    })

    //货物查询
    .state('goodsQuery', {
      url: '/goodsQuery',
      templateUrl: 'modules/business/goodsQuery/index.html',
      controller: 'goodsQueryCtrl'
    })

    //货物查询 明细页面
    .state('goodsQueryDetail', {
      url: '/goodsQueryDetail',
      templateUrl: 'modules/business/goodsQuery/views/goodsQueryDetail.html',
      controller: 'goodsQueryDetailCtrl'
    })

   //进仓管理
    .state('warehousingManage', {
      url: '/warehousingManage',
      templateUrl: 'modules/business/warehousingManage/index.html',
      controller: 'warehousingManageCtrl'
    })

    //入仓扫描
    .state('warehousingScan', {
      url: '/warehousingScan',
      templateUrl: 'modules/business/warehousingScan/index.html',
      controller: 'warehousingScanCtrl'
    })

    //送货签收
    .state('deliveryReceipt', {
      url: '/deliveryReceipt',
      templateUrl: 'modules/business/deliveryReceipt/index.html',
      controller: 'deliveryReceiptCtrl'
    })

    //送货签收  明细页面
    .state('deliveryReceiptDetail', {
      url: '/deliveryReceiptDetail',
      templateUrl: 'modules/business/deliveryReceipt/views/deliveryReceiptDetail.html',
      controller: 'deliveryReceiptDetailCtrl'
    })

    //网点查询
    .state('websiteQuery', {
      url: '/websiteQuery',
      templateUrl: 'modules/business/websiteQuery/index.html',
      controller: 'websiteQueryCtrl'
    })

    //网点查询  地图查询
    .state('websiteQueryMap', {
      url: '/websiteQueryMap',
      templateUrl: 'modules/business/websiteQuery/views/websiteQueryMap.html',
      controller: 'websiteQueryMapCtrl'
    })

    //网点查询  详情页
    .state('websiteQueryDetail', {
      url: '/websiteQueryDetail',
      templateUrl: 'modules/business/websiteQuery/views/websiteQueryDetail.html',
      controller: 'websiteQueryDetailCtrl'
    })


    //装车扫描
    .state('scanLoading', {
      url: '/scanLoading',
      templateUrl: 'modules/business/scanLoading/index.html',
      controller: 'scanLoadingCtrl'
    })

    //装车扫描
    .state('scanLoadingNext', {
      url: '/scanLoadingNext',
      templateUrl: 'modules/business/scanLoading/views/scanLoadingNext.html',
      controller: 'scanLoadingNextCtrl'
    })

    //装车扫描
    .state('scanLoadingDetail', {
      url: '/scanLoadingDetail',
      templateUrl: 'modules/business/scanLoading/views/scanLoadingDetail.html',
      controller: 'scanLoadingDetailCtrl'
    })

    //路线库存管理
    .state('pathReserveQuery', {
      url: '/pathReserveQuery',
      templateUrl: 'modules/business/pathReserveQuery/index.html',
      controller: 'pathReserveQueryCtrl'
    })

    //禁用车查询
    .state('disabledCarQuery', {
      url: '/disabledCarQuery',
      templateUrl: 'modules/business/disabledCarQuery/index.html',
      controller: 'disabledCarQueryCtrl'
    })

    //禁用车查询详情
    .state('disabledCarQueryDetail', {
      url: '/disabledCarQueryDetail',
      templateUrl: 'modules/business/disabledCarQuery/views/disabledCarQueryDetail.html',
      controller: 'disabledCarQueryDetailCtrl'
    })

    //禁用司机查询
    .state('disabledDriverQuery', {
      url: '/disabledDriverQuery',
      templateUrl: 'modules/business/disabledDriverQuery/index.html',
      controller: 'disabledDriverQueryCtrl'
    })


    //办理提货
    .state('handleDelivery', {
      url: '/handleDelivery',
      templateUrl: 'modules/business/handleDelivery/index.html',
      controller: 'handleDeliveryCtrl'
    })

    //搜索历史页面
    .state('searchHistory', {
      url: '/searchHistory',
      templateUrl: 'modules/business/handleDelivery/views/search.html',
      controller: 'searchHistoryCtrl'
    })

    //经营分析
    .state('businessAnalysis', {
      url: '/businessAnalysis',
      templateUrl: 'modules/business/businessAnalysis/index.html',
      controller: 'businessAnalysisCtrl'
    })

    //签单扫描
    .state('signScan', {
      url: '/signScan',
      templateUrl: 'modules/business/signScan/index.html',
      controller: 'signScanCtrl'
    })

    //签单扫描  上传图谱按
    .state('uploadImg', {
      url: '/uploadImg',
      templateUrl: 'modules/business/signScan/views/upload.html',
      controller: 'uploadImgCtrl'
    })

    //进仓单扫描
    .state('enterWarehouseScan', {
      url: '/enterWarehouseScan',
      templateUrl: 'modules/business/enterWarehouseScan/index.html',
      controller: 'enterWarehouseScanCtrl'
    })


    //装车质量跟踪
    .state('loadingQuality', {
      url: '/loadingQuality',
      templateUrl: 'modules/business/loadingQuality/index.html',
      controller: 'loadingQualityCtrl'
    })

    //装车质量跟踪  详情页面
    .state('loadingQualityDetail', {
      url: '/loadingQualityDetail',
      templateUrl: 'modules/business/loadingQuality/views/loadingQualityDetail.html',
      controller: 'loadingQualityDetailCtrl'
    })

    //指标管理
    .state('targetManage', {
      url: '/targetManage',
      templateUrl: 'modules/business/targetManage/index.html',
      controller: 'targetManageCtrl'
    })

  $urlRouterProvider.otherwise('/tab/home');
});
