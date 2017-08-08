'use strict';

// Declare app level module which depends on views, and components
angular.module('usersApp', [
  'ngRoute',
  'usersApp.viewUsers',
  'usersApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/viewUsers'});
}]);
