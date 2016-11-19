'use strict';

angular.module('GraphApi')

    .factory('configFactory', function($http) {

        var serviceObj = {
            "serverAddress" : "http://localhost:3000",
            "IP" : "localhost"
        }
        serviceObj.postSearchResult = function(data){
            return $http.post(serveradd+'/searchresults' , data);
        }
        return serviceObj;
    });