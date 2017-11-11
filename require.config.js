/**
 * 项目入口
 */
require.config({

    baseUrl: '',

    paths: {
        "jquery":"lib/js/jquery/jquery",
        "angular": "lib/js/angular/angular",
        "angular-ui-router":"lib/js/angular/angular-ui-router",
        "angular-couch-potato": "lib/js/angular/angular-couch-potato",
        "bootstrap":"lib/js/bootstrap/bootstrap",
        "ui-bootstrap":"lib/js/bootstrap/ui-bootstrap",
        "ui-bootstrap-tpls":"lib/js/bootstrap/ui-bootstrap-tpls",
        "angular-loading-bar":"lib/js/angular/loading-bar"
    },

    //为那些没有使用define()来声明依赖关系、设置模块的"浏览器全局变量注入"型脚本做依赖和导出配置
    shim: {
        'jquery':{
            exports:'jquery'
        },
        'bootstrap': {
            deps: ['jquery']
        },
        'angular': {
            exports: 'angular'
        },
        'angular-ui-router': {
            deps: ['angular']
        },
        'ui-bootstrap': {
            deps: ['angular']
        },
        'ui-bootstrap-tpls': {
            deps: ['angular','ui-bootstrap']
        },
        'angular-loading-bar': {
            deps: ['angular']
        },
    },

    waitSeconds: 1000//加载1个js文件最多等待多长时间

});

require(['angular', 'app', 'app-init','config/config'], function (angular, app) {

    // 页面加载完成后,再加载模块
    angular.element(document).ready(function () {

        //模块的手动加载
        angular.bootstrap(document, [app['name'], function () {
            angular.element(document).find('html').addClass('ng-app');
        }]);

    });

});
