'use strict';
/**
 * @ngdoc overview
 * @name imgserveApp
 * @description
 * # imgserveApp
 *
 * Main module of the application.
 */
angular.
	module('', [

        'ngTouch',
		'ui.bootstrap',
		'ngAnimate',
        'ui.router',
        'ui.bootstrap',
        'ngSanitize',

		])
  .config(['$stateProvider','$urlRouterProvider',function ($stateProvider,$urlRouterProvider) {


	$urlRouterProvider.otherwise('/');

        $stateProvider
            .state('login', {

                url:'/',
                controller: '',
                templateUrl: 'views/',
                title: '',
                resolve: {

                }
            })
  }]);


