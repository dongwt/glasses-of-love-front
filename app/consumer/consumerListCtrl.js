/**
 * created by:dongwt
 * create date:2015/06/04
 * module:dashÄ£¿é
 */
define(['app'],
    function (app) {
        app.registerController('consumerListCtrl', ['$rootScope','$scope', '$log', '$http', '$uibModal',
            function ($rootScope,$scope, $log, $http, $uibModal) {

                function isEmpty(str) {
                    if(null == str || "" == str || "" == str.split(" ").join("")){
                        return true;
                    }
                    return false;
                }

                $scope.query = function () {
                    $rootScope.loading = true;
                    $http.post(
                        "http://localhost:8080/consumer/queryForPage",
                        $scope.consumer
                    ).then(
                        function (response) {
                            $rootScope.loading = false;
                            if (response.data.status == 1) {
                                $scope.data = response.data.data;
                            }else{
                                $rootScope.addAlert(response.data.message);
                            }

                        },
                        function (data) {
                            $rootScope.loading = false;
                            $rootScope.addAlert("操作失败!");
                            $log.error(data);
                        }
                    )
                }

                $scope.add = function () {
                    var modalInstance = $uibModal.open({
                        animation: true,
                        ariaLabelledBy: 'modal-title-top',
                        ariaDescribedBy: 'modal-body-top',
                        templateUrl: 'addConsumerModal.html',
                        size: 'lg',
                        controller: function ($scope, $uibModalInstance) {

                            $scope.consumer = {"name": null, "phone": null};

                            $scope.ok = function () {

                                if (isEmpty($scope.consumer.name)) {
                                    $scope.isNameError = true;
                                    return;
                                }
                                $scope.isNameError = false;

                                if (isEmpty($scope.consumer.phone)) {
                                    $scope.isPhoneError = true;
                                    return;
                                }
                                $scope.isPhoneError = false;


                                $rootScope.loading = true;
                                $http.post(
                                    "http://localhost:8080/consumer/add",
                                    $scope.consumer
                                ).then(
                                    function (response) {
                                        $rootScope.loading = false;
                                        if (response.data.status == 1) {
                                            $uibModalInstance.close();
                                            $rootScope.addAlert("新增成功!");
                                        }else {
                                            $rootScope.addAlert(response.data.message);
                                        }

                                    },
                                    function (data) {
                                        $rootScope.loading = false;
                                        $rootScope.addAlert("新增失败!");
                                        $log.error(data)
                                    }
                                )
                            };

                            $scope.cancel = function () {
                                $uibModalInstance.dismiss('cancel');
                            };
                        }
                    });

                    modalInstance.result.then(function () {
                        $scope.data.page.pageIndex = $scope.data.page.total;
                        $scope.consumer.pageIndex = $scope.data.page.pageIndex;
                        $scope.query();
                    }, function () {
                    });
                }


                $scope.pageChanged = function() {
                    $scope.consumer.pageIndex = $scope.data.page.pageIndex;
                    $scope.query();

                };

                $scope.update = function (item) {
                    var modalInstance = $uibModal.open({
                        animation: true,
                        ariaLabelledBy: 'modal-title-top',
                        ariaDescribedBy: 'modal-body-top',
                        templateUrl: 'updateConsumerModal.html',
                        size: 'lg',
                        controller: function ($scope, $uibModalInstance) {

                            $scope.consumer = angular.copy(item);

                            $scope.ok = function () {

                                if (isEmpty($scope.consumer.name)) {
                                    $scope.isNameError = true;
                                    return;
                                }
                                $scope.isNameError = false;

                                if (isEmpty($scope.consumer.phone)) {
                                    $scope.isPhoneError = true;
                                    return;
                                }
                                $scope.isPhoneError = false;


                                $rootScope.loading = true;
                                $http.post(
                                    "http://localhost:8080/consumer/update",
                                    $scope.consumer
                                ).then(
                                    function (response) {
                                        $rootScope.loading = false;
                                        if (response.data.status == 1) {
                                            $uibModalInstance.close();
                                            $rootScope.addAlert("修改成功!");
                                        }else {
                                            $rootScope.addAlert(response.data.message);
                                        }

                                    },
                                    function (data) {
                                        $rootScope.loading = false;
                                        $rootScope.addAlert("修改失败!");
                                        $log.error(data);
                                    }
                                )
                            };

                            $scope.cancel = function () {
                                $uibModalInstance.dismiss('cancel');
                            };
                        }
                    });

                    modalInstance.result.then(function () {
                        $scope.query();
                    }, function () {
                    });
                }

                $scope.delete = function (item) {
                    var modalInstance = $uibModal.open({
                        animation: true,
                        ariaLabelledBy: 'modal-title-top',
                        ariaDescribedBy: 'modal-body-top',
                        templateUrl: 'deleteConsumerModal.html',
                        size: 'sm',
                        controller: function ($scope, $uibModalInstance) {

                            $scope.consumer = angular.copy(item);

                            $scope.ok = function () {
                                $rootScope.loading = true;
                                $http.post(
                                    "http://localhost:8080/consumer/delete",
                                    $scope.consumer
                                ).then(
                                    function (response) {
                                        $rootScope.loading = false;
                                        if (response.data.status == 1) {
                                            $uibModalInstance.close();
                                            $rootScope.addAlert("删除成功!");
                                        }else {
                                            $rootScope.addAlert(response.data.message);
                                        }

                                    },
                                    function (data) {
                                        $rootScope.loading = false;
                                        $rootScope.addAlert("删除失败!");
                                        $log.error(data);
                                    }
                                )
                            };

                            $scope.cancel = function () {
                                $uibModalInstance.dismiss('cancel');
                            };
                        }
                    });

                    modalInstance.result.then(function () {
                        //如果是尾页且是最后一条
                       if($scope.data.page.total == $scope.data.page.pageIndex && $scope.data.page.pageIndex > 1 && $scope.data.items.length <= 1){
                           $scope.consumer.pageIndex = $scope.consumer.pageIndex-1;
                       }
                        $scope.query();
                    }, function () {
                    });
                }


                function init() {
                    $scope.consumer = {"name": null, "phone": null,"pageIndex":1,"pageSize" :10};
                    $scope.currentPage = 1;
                    $scope.query();
                }

                init();

            }]);
    })


