/**
 * 项目的初始化配置
 */
define(['app'], function (app) {

    /**
     * 框架配置
     */
    app.config(['$httpProvider', function ($httpProvider) {

        $httpProvider.defaults.withCredentials = true;

    }]);


    /**
     * 路由状态的控制
     */
    app.run(['$rootScope',function ($rootScope) {

        //控制路由跳转
        $rootScope.$on('$stateChangeStart',
            function (event, toState, toParams, fromState, fromParams) {


            })
    }
    ]);

});
