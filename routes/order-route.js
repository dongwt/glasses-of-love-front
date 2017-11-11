/**
 * 商品路由配置
 */
define(['app'],
    function (app) {
        app.registerProvider(
            'order-route',
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
                        .state('frame.orderList', {//订单路由
                            url: '/orderList',
                            templateUrl: 'app/order/orderList.html',
                            controller: 'orderListCtrl',
                            resolve: {
                                dummy: $couchPotatoProvider.resolveDependencies(['app/order/orderListCtrl'])
                            }
                        })
                }
            ]
        );

    });
