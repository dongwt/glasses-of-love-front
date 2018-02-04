/**
 * created by:dongwt
 * create date:2015/06/04
 * module:dashÄ£¿é
 */
define(['app'],
    function (app) {
        app.registerController('optometryListCtrl', ['$rootScope', '$scope', '$log', '$http', '$uibModal',
            function ($rootScope, $scope, $log, $http, $uibModal) {

                function isEmpty(str) {
                    if (null == str || "" == str) {
                        return true;
                    }
                    return false;
                }

                function changeKeyValue(scope) {

                    if (isEmpty(scope.optometry.consumerName)){
                        scope.isHideConsumerOption = true;
                        return;
                    }

                    $http.post(
                        "http://localhost:8080/consumer/query",
                        {"name":scope.optometry.consumerName}
                    ).then(
                        function (response) {
                            $rootScope.loading = false;
                            if (response.data.status == 1) {
                                scope.consumerList = response.data.data;
                                scope.isHideConsumerOption = false;
                            } else {
                                $rootScope.addAlert(response.data.message);
                                scope.isHideConsumerOption = true;
                            }

                        },
                        function (data) {
                            $rootScope.loading = false;
                            $rootScope.addAlert("操作失败!");
                            $log.error(data);
                            scope.isHideConsumerOption = true;
                        }
                    )
                }

                $scope.query = function () {
                    $rootScope.loading = true;
                    $http.post(
                        "http://localhost:8080/optometry/queryForPage",
                        $scope.optometry
                    ).then(
                        function (response) {
                            $rootScope.loading = false;
                            if (response.data.status == 1) {
                                $scope.data = response.data.data;
                            } else {
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
                        templateUrl: 'addOptometryModal.html',
                        size: 'lg',
                        controller: function ($scope, $uibModalInstance) {

                            $scope.optometry = {"consumerName": null, "consumerId": null};
                            $scope.isHideConsumerOption = true;

                            $scope.ok = function () {

                                if (null == $scope.optometry.consumerId) {
                                    $scope.isConsumerIdError = true;
                                    return;
                                }
                                $scope.isConsumerIdError = false;

                                if (isEmpty($scope.optometry.leftEyeDegree)) {
                                    $scope.isLeftEyeDegreeError = true;
                                    return;
                                }
                                $scope.isLeftEyeDegreeError = false;

                                if (isEmpty($scope.optometry.rightEyeDegree)) {
                                    $scope.isRightEyeDegreeError = true;
                                    return;
                                }
                                $scope.isRightEyeDegreeError = false;


                                $rootScope.loading = true;
                                $http.post(
                                    "http://localhost:8080/optometry/add",
                                    $scope.optometry
                                ).then(
                                    function (response) {
                                        $rootScope.loading = false;
                                        if (response.data.status == 1) {
                                            $uibModalInstance.close();
                                            $rootScope.addAlert("新增成功!");
                                        } else {
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


                            $scope.changeKeyValue = function () {
                                changeKeyValue($scope);
                            }

                            $scope.hideConsumerOption = function () {
                                $scope.isHideConsumerOption = true;
                            }
                            
                            $scope.selectConsumer = function (consumer) {
                                $scope.optometry.consumerName = consumer.name;
                                $scope.optometry.consumerId = consumer.id;
                            }
                        }
                    });

                    modalInstance.result.then(function () {
                        $scope.data.page.pageIndex = $scope.data.page.total;
                        $scope.optometry.pageIndex = $scope.data.page.pageIndex;
                        $scope.query();
                    }, function () {
                    });
                }


                $scope.pageChanged = function () {
                    $scope.optometry.pageIndex = $scope.data.page.pageIndex;
                    $scope.query();

                };

                $scope.update = function (item) {
                    var modalInstance = $uibModal.open({
                        animation: true,
                        ariaLabelledBy: 'modal-title-top',
                        ariaDescribedBy: 'modal-body-top',
                        templateUrl: 'updateOptometryModal.html',
                        size: 'lg',
                        controller: function ($scope, $uibModalInstance) {

                            $scope.optometry = item;
                            $scope.isHideConsumerOption = true;

                            $scope.ok = function () {

                                if (null == $scope.optometry.consumerId) {
                                    $scope.isConsumerIdError = true;
                                    return;
                                }
                                $scope.isConsumerIdError = false;

                                if (isEmpty($scope.optometry.leftEyeDegree)) {
                                    $scope.isLeftEyeDegreeError = true;
                                    return;
                                }
                                $scope.isLeftEyeDegreeError = false;

                                if (isEmpty($scope.optometry.rightEyeDegree)) {
                                    $scope.isRightEyeDegreeError = true;
                                    return;
                                }
                                $scope.isRightEyeDegreeError = false;


                                $rootScope.loading = true;
                                $http.post(
                                    "http://localhost:8080/optometry/update",
                                    $scope.optometry
                                ).then(
                                    function (response) {
                                        $rootScope.loading = false;
                                        if (response.data.status == 1) {
                                            $uibModalInstance.close();
                                            $rootScope.addAlert("修改成功!");
                                        } else {
                                            $rootScope.addAlert(response.data.message);
                                        }

                                    },
                                    function (data) {
                                        $rootScope.loading = false;
                                        $rootScope.addAlert("修改失败!");
                                        $log.error(data)
                                    }
                                )
                            };

                            $scope.cancel = function () {
                                $uibModalInstance.dismiss('cancel');
                            };


                            $scope.changeKeyValue = function () {
                                changeKeyValue($scope);
                            }

                            $scope.hideConsumerOption = function () {
                                $scope.isHideConsumerOption = true;
                            }

                            $scope.selectConsumer = function (consumer) {
                                $scope.optometry.consumerName = consumer.name;
                                $scope.optometry.consumerId = consumer.id;
                            }
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
                        templateUrl: 'deleteOptometryModal.html',
                        size: 'sm',
                        controller: function ($scope, $uibModalInstance) {

                            $scope.optometry = angular.copy(item);

                            $scope.ok = function () {
                                $rootScope.loading = true;
                                $http.post(
                                    "http://localhost:8080/optometry/delete",
                                    $scope.optometry
                                ).then(
                                    function (response) {
                                        $rootScope.loading = false;
                                        if (response.data.status == 1) {
                                            $uibModalInstance.close();
                                            $rootScope.addAlert("删除成功!");
                                        } else {
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
                        if ($scope.data.page.total == $scope.data.page.pageIndex && $scope.data.page.pageIndex > 1 && $scope.data.items.length <= 1) {
                            $scope.optometry.pageIndex = $scope.optometry.pageIndex - 1;
                        }
                        $scope.query();
                    }, function () {
                    });
                }


                function init() {
                    $scope.optometry = {"consumerName": null, "consumerPhone": null, "pageIndex": 1, "pageSize": 10};
                    $scope.query();
                }

                init();


            }]);
    })


