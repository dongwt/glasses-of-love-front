/**
 * 模块注入和懒加载设置
 */
define(
    ['angular','angular-couch-potato','angular-loading-bar','ui-bootstrap-tpls','angular-ui-router','jquery','bootstrap'],
    function(angular,couchPotato,cfpLoadingBarProvider) {

        //模块注入
        var app = angular.module('app', ['ui.router','scs.couch-potato','ui.bootstrap','ui.bootstrap.tpls','angular-loading-bar']);

        //懒加载设置
        couchPotato.configureApp(app);
        app.run(["$couchPotato",'$state', '$stateParams', '$rootScope',function ($couchPotato,$state, $stateParams, $rootScope) {
            app.lazy = $couchPotato;
            $rootScope.$state = $state;
            $rootScope.$stateParams = $stateParams;
        }
        ]);


        app.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
            cfpLoadingBarProvider.includeSpinner = false;
            cfpLoadingBarProvider.spinnerTemplate = '<div><span class="fa fa-spinner">Loading...</div>';
        }])

        return app;
    }

);
