/**
 * created by:dongwt
 * create date:2015/06/04
 * module:dashÄ£¿é
 */
define(['app'],
    function (app) {
        app.registerController('loginCtrl', ['$scope', '$log', '$http','$state',
            function ($scope, $log, $http,$state) {
            angular.element(document).find('body').addClass("bg-color");

            $scope.loginUser = {userName: "", password: ""};

            $scope.loading = false;

            $scope.login = function () {
                $scope.loading = true;
                $http.post(
                    "http://localhost:8080/user/login",
                    $scope.loginUser
                ).then(
                    function (response) {
                        $scope.loading = false;
                        if(response.data.status == 1){
                            $state.go("frame");
                        }else{
                            addAlert(response.data.message);
                        }

                    },
                    function (data) {
                        $scope.loading = false;
                        addAlert(response.data.message);
                    }
                )
            }



            $scope.alerts = [];

            function addAlert(message) {
                $scope.alerts.push({msg: message});
            };

            $scope.closeAlert = function(index) {
                $scope.alerts.splice(index, 1);
            };






        }]);
    })


