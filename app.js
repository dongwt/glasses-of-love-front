/**
 * 模块注入和懒加载设置
 */
define(
    ['angular','angular-couch-potato'],
    function(angular,couchPotato) {

        //模块注入
        var app = angular.module('app', ['scs.couch-potato']);

        //懒加载设置
        couchPotato.configureApp(app);
        app.run(["$couchPotato",function ($couchPotato) {
            app.lazy = $couchPotato;
        }
        ]);

        return app;
    }

);
