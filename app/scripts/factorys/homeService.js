'use strict';

angular.module('coCreationApp').factory('$home', function ($resource, API) {
  return {
    get: $resource(API),
  };
});