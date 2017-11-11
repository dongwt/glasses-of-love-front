/**
 * 商品路由配置
 */
define(['app'],
    function (app) {
        app.registerProvider(
            'goods-route',
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
                        .state('frame.goodsList', {//商家路由
                            url: '/goodsList',
                            templateUrl: 'app/goods/goodsList.html',
                            controller: 'goodsListCtrl',
                            resolve: {
                                dummy: $couchPotatoProvider.resolveDependencies(['app/goods/goodsListCtrl'])
                            }
                        })
                }
            ]
        );

    });
