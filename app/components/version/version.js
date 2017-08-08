'use strict';

angular.module('usersApp.version', [
  'usersApp.version.interpolate-filter',
  'usersApp.version.version-directive'
])

.value('version', '0.1');
