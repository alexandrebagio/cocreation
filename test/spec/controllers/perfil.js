'use strict';

describe('Controller: PerfilCtrl', function () {

  // load the controller's module
  beforeEach(module('avaApp'));

  var PerfilCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PerfilCtrl = $controller('PerfilCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PerfilCtrl.awesomeThings.length).toBe(3);
  });
});
