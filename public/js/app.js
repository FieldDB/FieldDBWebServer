'use strict';


// Declare app level module which depends on filters, and services
angular.module('LingSyncWebSiteApp', []).
config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'partials/home.html'
      })
      .otherwise({
        redirectTo: '/home'
      });
  }
])
  .controller('LingSyncWebSiteController', function($scope) {
    $scope.navigateToRoute = function(route) {
      window.location.assign("#/" + route);
    }

    $scope.divToShow = function(div) {
      $scope.contentToShow = div;
    }

    $scope.divToShow('welcome');
  });