'use strict';

/**
 * @ngdoc service
 * @name phonegapApp.service
 * @description
 * # service
 * Service in the phonegapApp.
 */
var App = angular.module('phonegapApp')


App.factory('news', ['$http',
    function ($http) {
        return {
            getAllData: function () {
                var promise = $http.get(baseURL + "/query_temp.php");


                return promise;
            }

        };
}]);