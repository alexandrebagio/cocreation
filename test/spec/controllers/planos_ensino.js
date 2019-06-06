'use strict';

describe('Controller: PlanosEnsinoCtrl', function () {

  // load the controller's module
  beforeEach(module('avaApp'));

  var PlanosEnsinoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PlanosEnsinoCtrl = $controller('PlanosEnsinoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PlanosEnsinoCtrl.awesomeThings.length).toBe(3);
  });
});
