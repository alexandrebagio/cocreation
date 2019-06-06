'use strict';

var prot = document.location.protocol;
var host = document.location.host;

/**
 * @ngdoc overview
 * @name coCreationApp
 * @description
 * # coCreationApp
 *
 * Main module of the application.
 */
angular
  .module('coCreationApp', [
    'ngResource',
    'ngStorage',
    'ngAnimate',
    'ngFileUpload',
    'ngSanitize',
    'ui.router',
    'angular-loading-bar',
    'ui.utils.masks'
  ])
  .constant('API', ' {enderco da api } ')
  .run(function($rootScope, $http, $localStorage, $location) {
   
    if($localStorage.profile) {
      $http.defaults.headers.common.Authorization = $localStorage.profile.token_type+' '+$localStorage.profile.access_token;
    }

    $rootScope.$on('$locationChangeStart', function() {
      if($localStorage.profile) {
        $http.defaults.headers.common.Authorization = $localStorage.profile.token_type+' '+$localStorage.profile.access_token;
      } else {
        $location.path('/login');
      }
    });
  })
  .config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
    cfpLoadingBarProvider.includeSpinner = false;
  }])
  .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');

    $stateProvider   
    .state('home',{
      url:'/inscricao',
      controller: 'HomeCtrl',
      templateUrl:'views/home.html'
    })
    
    .state('login',{
      url:'/login',
      controller: 'LoginCtrl',
      templateUrl:'views/login.html'
    });
  }]
);