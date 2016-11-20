'use strict';
/**
 * @ngdoc overview
 * Main module of the application.
 */
angular.
    module('GraphApi', [

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
            .state('FBLogin', {
                url:'/',
                controller: 'Graph',
                templateUrl: 'views/Fb_Auth.html',
                title: 'Graph|Basic',
                resolve: {
                }
            })
    }]);

    window.fbAsyncInit = function() {
        FB.init({
            appId      : '368800806794808',
            status: true,
            cookie: true,
            xfbml      : true,
            version    : 'v2.7'
        });
        FB.AppEvents.logPageView();
    };

    (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
