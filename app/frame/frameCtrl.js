/**
 * created by:dongwt
 * create date:2015/06/04
 * module:dashÄ£¿é
 */
define(['app'],
    function (app) {
        app.registerController('frameCtrl', ["$scope","$rootScope","$state","$log",function ($scope,$rootScope,$state,$log) {

            $rootScope.getFunctionList = function(stateName) {
                var functionList = [];
                angular.forEach($scope.allFunctionList,function (item) {
                    if(item.currentState.substring(0,9) == stateName.substring(0,9)){
                        functionList = item.childStateList;
                    }
                })

                $rootScope.functionList =  functionList;
            }


            $scope.allFunctionList = [
                {
                    'currentState':'frame.consumer',
                    'childStateList':[
                        {'key':'客户列表','value':'frame.consumerList'},
                        {'key':'验光单列表','value':'frame.consumerOptometryList'}
                    ]
                },
                {
                    'currentState':'frame.goods',
                    'childStateList':[
                        {'key':'商品列表','value':'frame.goodsList'}
                    ]
                },
                {
                    'currentState':'frame.shopCar',
                    'childStateList':[
                        {'key':'购物车列表','value':'frame.shopCarList'}
                    ]
                },
                {
                    'currentState':'frame.order',
                    'childStateList':[
                        {'key':'订单列表','value':'frame.orderList'}
                    ]
                }
            ];

            $rootScope.getFunctionList($state.current.name);

            $rootScope.loading = false;

            $rootScope.alerts = [];

            $rootScope.addAlert = function (message) {
                $scope.alerts.push({msg: message});
            };

            $scope.closeAlert = function(index) {
                $scope.alerts.splice(index, 1);
            };

        }]);
    })


