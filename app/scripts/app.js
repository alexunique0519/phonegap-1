'use strict';

/**
 * @ngdoc overview
 * @name phonegapApp
 * @description
 * # phonegapApp
 *
 * Main module of the application.
 */
angular
  .module('phonegapApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'mobile-angular-ui',
    'ngCordova'
  ])
  .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .when('/about', {
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
        }).when('/detail/:newsID', {
            templateUrl: 'views/detail.html',
            controller: 'DetailCtrl'
        })
      
        .otherwise({
            redirectTo: '/'
        });
    
    
  });
