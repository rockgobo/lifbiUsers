'use strict';

describe('usersApp.viewUsers module', function() {

  beforeEach(module('usersApp.viewUsers'));

  describe('viewUsers controller', function(){

    it('should load users', inject(function($controller) {
      //spec body
      var viewUsersCtrl = $controller('viewUsersCtrl');
      var users = viewUsersCtrl.loadUsers()
      expect(users).toBeDefined();
      expect(users.length).toBeGreaterThan(0);
    }));

  });
});