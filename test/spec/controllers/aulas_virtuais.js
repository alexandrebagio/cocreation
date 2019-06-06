'use strict';

describe('Controller: AulasVirtuaisCtrl', function () {

  // load the controller's module
  beforeEach(module('avaApp'));

  var AulasVirtuaisCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AulasVirtuaisCtrl = $controller('AulasVirtuaisCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AulasVirtuaisCtrl.awesomeThings.length).toBe(3);
  });
});
