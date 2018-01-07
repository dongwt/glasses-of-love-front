/**
 * created by:dongwt
 * create date:2015/06/04
 * module:dashÄ£¿é
 */
define(['app'],
    function (app) {
        app.registerController('frameCtrl', ["$scope","$state","$log","$http",function ($scope,$state,$log,$http) {

            $scope.showUserMenu = false;


            $http.post(
                "http://localhost:8080/user/checkLoginStatus",
                $scope.loginUser
            ).then(
                function (response) {
                    $scope.loading = false;
                    if(response.data.status == 0){
                        $state.go("login");
                    }

                },
                function (data) {
                    $scope.loading = false;
                }
            )

        }]);
    })


