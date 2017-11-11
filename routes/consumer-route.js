/**
 * 客户路由配置
 */
define(['app'],
    function (app) {
        app.registerProvider(
            'consumer-route',
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
                        .state('frame.consumerList', {//商家路由
                            url: '/consumerList',
                            templateUrl: 'app/consumer/consumerList.html',
                            controller: 'consumerListCtrl',
                            resolve: {
                                dummy: $couchPotatoProvider.resolveDependencies(['app/consumer/consumerListCtrl'])
                            }
                        })
                }
            ]
        );

    });
