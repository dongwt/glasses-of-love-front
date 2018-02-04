/**
 * created by:dongwt
 * create date:2015/06/04
 * module:dashÄ£¿é
 */
define(['app'],
    function (app) {
        app.registerController('welcomeCtrl', ["$scope","$rootScope","$state","$log",function ($scope,$rootScope,$state,$log) {
            $rootScope.getFunctionList($state.current.name);
        }]);
    })


