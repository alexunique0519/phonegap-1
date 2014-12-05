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

        news.getAllData().then(function (data) {

            data.data.map(function (doc) {
                if (doc.id == $routeParams.newsID) {
                    $scope.data = doc;
                }
            });



            //$scope.data=data.data;
        });

    }
]);