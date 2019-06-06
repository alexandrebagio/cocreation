'use strict';

angular.module('coCreationApp').factory('$login', function ($resource, API) {
  return {
    authentic: $resource(API),
  };
});