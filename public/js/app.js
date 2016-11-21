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
        'oc.lazyLoad',
        'ui.bootstrap',
        'ngSanitize',

    ])
    .config(['$stateProvider','$urlRouterProvider','$locationProvider','$ocLazyLoadProvider',function ($stateProvider,$urlRouterProvider,$locationProvider,$ocLazyLoadProvider) {
        //$ocLazyLoadProvider.config({
        //    debug:false,
        //    events:true,
        //});
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('FBLogin', {
                url:'/',
                controller: 'Graph',
                templateUrl: 'views/Fb_Auth.html',
                title: 'Graph|Basic',
                resolve: {
                    loadMyDirectives:function($ocLazyLoad){
                        return $ocLazyLoad.load(
                            {

                                files:[
                                    //'js/scripts.js'
                                ]
                            })

                    }
                }
            })
            .state('Data', {
                url:'/Data',
                controller: 'GraphData',
                templateUrl: 'views/Data.html',
                title: 'Graph|Data',
                resolve: {
                    loadMyDirectives:function($ocLazyLoad){
                        return $ocLazyLoad.load(
                            {

                                files:[
                                    //'js/scripts.js'
                                ]
                            })

                    }
                }
            })
        $locationProvider.html5Mode(true);
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
