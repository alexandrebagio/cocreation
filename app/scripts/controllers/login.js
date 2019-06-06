'use strict';

/**
 * @ngdoc function
 * @name coCreationApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the coCreationApp
 */
angular.module('coCreationApp').controller('LoginCtrl', function (
  $scope,
  $localStorage,
  $state,
  $login,
  $http
) {

  $scope.auth = function() {
    $scope.frmLogin.$submitted = true;
    if($scope.frmLogin.$valid) {
      $login
        .authentic
        .save($scope.obj)
        .$promise.then(
          function(response){
            $localStorage.profile = response;
            $http.defaults.headers.common.Authorization = response.token_type+' '+response.access_token;
            $state.go('home');
          }, function(error) {
            if (error.status === 401) {
              $scope.erro = 'Usuário ou senha incorretos!';
            }
          }
        );
    }
  };

});
