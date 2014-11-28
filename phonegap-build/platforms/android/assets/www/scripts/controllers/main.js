'use strict';

/**
 * @ngdoc function
 * @name phonegapApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the phonegapApp
 */
var App = angular.module('phonegapApp')

App.controller("MainCtrl", ['$scope', '$location', function($scope, $location) {

       $scope.redirect= function(){
        $location.path('/detail/10')
       }
       
    }
]);