/**
 * 商品路由配置
 */
define(['app'],
    function (app) {
        app.registerProvider(
            'shopCar-route',
            [
                '$stateProvider',
                '$urlRouterProvider',
                '$couchPotatoProvider',
                function ($stateProvider, $urlRouterProvider, $couchPotatoProvider) {

                    this.$get = function () {
                        return {};
                    };

                    //2.配置公共路由
                    $stateProvider
                        .state('frame.shopCarList', {//购物车路由
                            url: '/shopCarList',
                            templateUrl: 'app/shopCar/shopCarList.html',
                            controller: 'shopCarListCtrl',
                            resolve: {
                                dummy: $couchPotatoProvider.resolveDependencies(['app/shopCar/shopCarListCtrl'])
                            }
                        })
                }
            ]
        );

    });
