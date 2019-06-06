'use strict';

describe('Controller: AvaliacoesCtrl', function () {

  // load the controller's module
  beforeEach(module('avaApp'));

  var AvaliacoesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AvaliacoesCtrl = $controller('AvaliacoesCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AvaliacoesCtrl.awesomeThings.length).toBe(3);
  });
});
