'use strict';

/**
 * @ngdoc directive
 * @name phonegapApp.directive:loading
 * @description
 * # loading
 */
angular.module('phonegapApp')
  .directive('loading',   ['$http' ,function ($http)
    {
        return {
            restrict: 'E',
            link: function (scope, elm, attrs)
            {
                scope.isLoading = function () {
                    return $http.pendingRequests.length > 0;
                };

                scope.$watch(scope.isLoading, function (v)
                {
                    if(v){
                        elm.show();
                    }else{
                        elm.hide();
                    }
                });
            }
        };

    }]);
