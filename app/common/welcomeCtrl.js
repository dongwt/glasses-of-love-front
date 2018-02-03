/**
 * created by:dongwt
 * create date:2015/06/04
 * module:dashÄ£¿é
 */
define(['app'],
    function (app) {
        app.registerController('welcomeCtrl', ["$scope","$rootScope","$state","$log",function ($scope,$rootScope,$state,$log) {

            function getFunctionList(stateName) {
                var functionList = [];
                angular.forEach($scope.allFunctionList,function (item) {
                    if(item.currentState.substring(0,9) == stateName.substring(0,9)){
                        functionList = item.childStateList;
                    }
                })

                return functionList;
            }


            $scope.allFunctionList = [
                {
                    'currentState':'frame.consumer',
                    'childStateList':[
                        {'key':'客户列表','value':'frame.consumerList'}
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

            $rootScope.functionList = getFunctionList($state.current.name);


        }]);
    })


