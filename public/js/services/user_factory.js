'use strict';
angular.module('GraphApi')
	.factory('User',['$http', '$location' , 'configFactory','$q', function($http , $location , configFactory,$q) {
		var ServerAdress = configFactory.serverAddress;
		var domain = configFactory.serverAddress;
		var data ;
		return {
			getMyLastName: function(Userdata) {
				//var uid=Userdata;
				var deferred = $q.defer();
				//FB.api('{'+uid+'}'+'/photos', {
				FB.api('/me',{scope: 'email,user_likes,public_profile,user_about_me,user_relationships',return_scopes: true}, {
					fields: 'last_name,first_name,cover,about,email,picture,gender,hometown,education,devices,currency,interested_in,languages,link,locale,location,meeting_for,political,relationship_status,religion,security_settings,timezone,verified,accounts'
				}, function(response) {
					if (!response || response.error) {
						deferred.reject('Error occured');
						console.log("error")
					} else {
						 deferred.resolve(response);
						//data=response

						console.log(data);
					}
				});
				data=deferred.promise;
				return data
				//console.log("response2")
			},

			Data : function() {

				return data
					console.log(data);

			}
			//Feed: function(Userdata) {
			//	var deferred = $q.defer();
			//	FB.api('me/picture'
			//		, function(response) {
			//			if (!response || response.error) {
			//				deferred.reject('Error occured');
			//				console.log("error")
			//			} else {
			//				deferred.resolve(response);
			//				console.log("response1")
			//			}
			//		});
			//	return deferred.promise;
			//	//console.log("response2")
			//}
		}
	}]);