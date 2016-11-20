'use strict';
angular.module('GraphApi')
    .factory('configFactory', function($http) {
        var serviceObj = {
            "serverAddress" : "http://localhost:3000",
            "IP" : "localhost",
        }
        return serviceObj;
    });