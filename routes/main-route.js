/**
 * 主路由配置
 */
define(['app'],
    function (app) {
        app.registerProvider(
            'main-route',
            [
                '$stateProvider',
                '$urlRouterProvider',
                '$couchPotatoProvider',
                function ($stateProvider, $urlRouterProvider, $couchPotatoProvider) {

                    this.$get = function () {
                        return {};
                    };

                    //1.默认路由跳转
                    $urlRouterProvider.otherwise("login");


                    //2.配置公共路由
                    $stateProvider

                        .state('login', {//登录路由
                            url: "/login",
                            templateUrl: "app/login/login.html",
                            controller: 'loginCtrl',
                            resolve: {
                                dummy: $couchPotatoProvider.resolveDependencies(['app/login/loginCtrl'])
                            }
                        })

                        .state('frame', {//框架布局路由
                            url: "/frame",
                            templateUrl: "app/frame/frame.html",
                            controller: 'frameCtrl',
                            resolve: {
                                dummy: $couchPotatoProvider.resolveDependencies(['app/frame/frameCtrl'])
                            }
                        })

                        .state('frame.consumer', {//客户路由
                            url: '/consumer',
                            templateUrl: 'app/common/welcome.html',
                            controller: 'welcomeCtrl',
                            resolve: {
                                dummy: $couchPotatoProvider.resolveDependencies(['app/common/welcomeCtrl'])
                            }
                        })
                        .state('frame.goods', {//商品路由
                            url: '/goods',
                            templateUrl: 'app/common/welcome.html',
                            controller: 'welcomeCtrl',
                            resolve: {
                                dummy: $couchPotatoProvider.resolveDependencies(['app/common/welcomeCtrl'])
                            }
                        })
                        .state('frame.shopCar', {//购物车路由
                            url: '/shopCar',
                            templateUrl: 'app/common/welcome.html',
                            controller: 'welcomeCtrl',
                            resolve: {
                                dummy: $couchPotatoProvider.resolveDependencies(['app/common/welcomeCtrl'])
                            }
                        })
                        .state('frame.order', {//订单路由
                            url: '/order',
                            templateUrl: 'app/common/welcome.html',
                            controller: 'welcomeCtrl',
                            resolve: {
                                dummy: $couchPotatoProvider.resolveDependencies(['app/common/welcomeCtrl'])
                            }
                        })
                }
            ]
        );

    });
