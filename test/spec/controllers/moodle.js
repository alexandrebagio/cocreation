'use strict';

describe('Controller: MoodleCtrl', function () {

  // load the controller's module
  beforeEach(module('avaApp'));

  var MoodleCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MoodleCtrl = $controller('MoodleCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(MoodleCtrl.awesomeThings.length).toBe(3);
  });
});
