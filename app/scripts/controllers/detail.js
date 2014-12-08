'use strict';

/**
 * @ngdoc function
 * @name phonegapApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the phonegapApp
 */
var App = angular.module('phonegapApp')

App.controller("DetailCtrl", ['$scope', '$routeParams', '$rootScope', 'news',
    function ($scope, $routeParams, $rootScope, news) {
        $rootScope.Alldata.map(function (doc) {
            if (doc.id == $routeParams.newsID) {
                $scope.data = doc;
            }
        });
    }
]);