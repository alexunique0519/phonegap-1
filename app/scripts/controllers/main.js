'use strict';

/**
 * @ngdoc function
 * @name phonegapApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the phonegapApp
 */
var App = angular.module('phonegapApp')

App.controller("MainCtrl", ['$scope', '$location', 'news','$rootScope',
    function ($scope, $location, news,$rootScope) {

        $scope.data = [];
        news.getAllData().then(function (data) {
            $rootScope.Alldata=data.data;
            $scope.data = data.data;
        });

        $scope.redirect = function (id) {
            $location.path('/detail/' + id);
        }
        
        $scope.filter= function(category){
          $scope.data = _.where($scope.Alldata, {categoryId: category});

        }

    }
]);