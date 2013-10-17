'use strict';


// Declare app level module which depends on filters, and services
angular.module('LingSyncWebSiteApp', []).
config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'partials/home.html'
      })
      .when('/people', {
        templateUrl: 'partials/people.html'
      })
      .when('/contact', {
        templateUrl: 'partials/contact.html'
      })
      .otherwise({
        redirectTo: '/home'
      });
  }
])
  .controller('LingSyncWebSiteController', function($scope, $timeout) {
    $scope.navigateToRoute = function(route) {
      window.location.assign("#/" + route);
    };

    $scope.divToShow = function(div) {
      $scope.contentToShow = div;
    };

    $scope.navigateToHome = function() {
      $scope.pageLoaded = false;
      $scope.divToShow('welcome');
      window.location.assign("#/home");
      var hideInitialDivTransition = $timeout(function() {
        $scope.pageLoaded = true;
      }, 1000);
    };

    $scope.divToShow('welcome');

    $scope.$on('$viewContentLoaded', function() {
      var hideInitialDivTransition = $timeout(function() {
        $scope.pageLoaded = true;
      }, 1000);
    });
  });