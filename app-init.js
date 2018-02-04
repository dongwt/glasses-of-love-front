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
    app.run(['$transitions','$http','$state','$log',function ($transitions,$http,$state,$log) {
        
        function checkLoginStatus() {
            $http.post(
                "http://localhost:8080/user/checkLoginStatus"
            ).then(
                function (response) {
                    if (response.data.status == 0) {
                        $state.go("login");
                    }
                    $log.info(response)
                },
                function (data) {
                    $state.go("login");
                    $log.info(data)
                }
            )
        }

        $transitions.onStart( {}, function(trans) {
            if(trans.router.globals.$current.name != 'login'){
                checkLoginStatus();
            }
        });
    }
    ]);

});
