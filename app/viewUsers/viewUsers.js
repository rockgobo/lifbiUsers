'use strict';

angular.module('usersApp.viewUsers', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/viewUsers', {
    templateUrl: 'viewUsers/viewUsers.html',
    controller: 'viewUsersCtrl'
  });
}])

.controller('viewUsersCtrl', [function() {
  this.loadUsers = function(){return ["Person 1", "Person 2"]}
}]);