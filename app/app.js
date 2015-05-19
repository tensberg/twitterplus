'use strict';

// Declare app level module which depends on views, and components
angular.module('twitterplus', [
  'ngRoute',
  'twitterplus.controllers',
  'twitterplus.services'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider
      .when('/select', {
          templateUrl: 'partials/select.html',
          controller: 'SelectAccountsCtrl'
      })
      .when('/show', {
          templateUrl: 'partials/show.html',
          controller: 'ShowStreamsCtrl'
      })
      .otherwise({redirectTo: '/select'});
}]);
