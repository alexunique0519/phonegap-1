'use strict';

/**
 * @ngdoc function
 * @name phonegapApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the phonegapApp
 */
var App = angular.module('phonegapApp')

App.controller("MainCtrl", ['$scope', '$location', 'news',
    function ($scope, $location, news) {

        $scope.data = [];
        news.getAllData().then(function (data) {
            $scope.data = data.data;
        });

        $scope.redirect = function (id) {
            $location.path('/detail/' + id);
        }

    }
]);