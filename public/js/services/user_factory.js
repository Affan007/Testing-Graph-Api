'use strict';

angular.module('GraphApi')

    .factory('User',['$http', '$location' , 'configFactory','$q', function($http , $location , configFactory,$q) {

		var ServerAdress = configFactory.serverAddress;
		var domain = configFactory.serverAddress;
		


		return {


		}
    }]);