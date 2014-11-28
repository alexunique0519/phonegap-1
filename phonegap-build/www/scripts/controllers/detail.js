'use strict';

/**
 * @ngdoc function
 * @name phonegapApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the phonegapApp
 */
var App = angular.module('phonegapApp')

App.controller("DetailCtrl", ['$scope', '$routeParams', function($scope, $routeParams) {

       
        $scope.data = 
            {
                newsID:$routeParams.newsID,
                image: "http://i.cbc.ca/1.2525800.1391706268!/fileImage/httpImage/image.jpg_gen/derivatives/original_300/macdougall-steel.jpg",
                description: 'Canada\'s gross domestic product expanded at a 2.8 per cent annual pace in the past three months, Statistics Canada said today, much better than expected by economists.An increase in exports and an uptick in household spending were the two main drivers of the increase, the data agency said Friday.The 2.8 per cent figure is well ahead of the 2.1 per cent that economists had been expecting — but still not as good as the 3.9 per cent pace of growth posted by the U.S. earlier this week."Note that while this is a solid growth figure, this is still underperformance relative to the U.S," Scotiabank said after the numbers came out.Exports increased by 1.7 per cent. In the previous quarter, they rose by 4.4 per cent. Canada shipped out 2.2. per cent more crude oil during the period, the data agency said.Fridays numbers cover July, August and September — for the most part, the three-month period before oil prices began their precipitous decline. So it should be interesting to monitor if oil exports stay strong even after prices have cratered.Another key Canadian industry, the auto sector, posted strong growth figures.Canada exported 2.2 per cent more cars and trucks during the period, down from the 10 per cent gain in the previous quarter, but still a solid showing.',
                title: "Canada's GDP growing at 2.8% pace"
            };
    }
]);