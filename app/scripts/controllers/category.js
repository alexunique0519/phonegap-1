'use strict';

/**
 * @ngdoc function
 * @name phonegapApp.controller:CategoryCtrl
 * @description
 * # CategoryCtrl
 * Controller of the phonegapApp
 */

var App = angular.module('phonegapApp')

App.controller("CategoryCtrl", ['$scope', '$location', 'news','$rootScope', '$routeParams',
    function ($scope, $location, news,$rootScope,$routeParams) {
          $scope.data = _.where($rootScope.Alldata, {categoryId: $routeParams.categoryID});
    }
]);