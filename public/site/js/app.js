'use strict';


// Declare app level module which depends on filters, and services
angular.module('LingSyncWebSiteApp', []).
config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('', {
        templateUrl: 'site/partials/home.html'
      })
      .when('/applications', {
        templateUrl: 'site/partials/applications.html'
      })
      .when('/spreadsheet', {
        templateUrl: 'site/partials/spreadsheet.html'
      })
      .when('/dative', {
        templateUrl: 'site/partials/dative.html'
      })
      .when('/people', {
        templateUrl: 'site/partials/people.html'
      })
      .when('/contact', {
        templateUrl: 'site/partials/contact.html'
      })
      .when('/tutorial', {
        templateUrl: 'site/partials/tutorial.html'
      })
      .when('/dativetutorial', {
        templateUrl: 'site/partials/dativetutorial.html'
      })
      .otherwise({
        templateUrl: 'site/partials/home.html'
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
      window.location.assign("");
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
