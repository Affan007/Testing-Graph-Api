/**
 * Created by Affan on 20/11/2016.
 */
angular.module('GraphApi')
    .controller('Graph',['$scope','User',function($scope,User){
    $scope.name="fb Login"
        $scope.FBloginCheck=function(){
            FB.login(function(response) {
                if (response.authResponse) {
                    console.log('Welcome!  Fetching your information.... ');
                    FB.api('/me',{scope:'email,user_likes,public_profile,user_about_me,user_posts,user_relationships',return_scopes: true}, function(response) {
                        console.log('Good to see you, ' + response.name + '.');
                        console.log(response);
                    });
                } else {
                    console.log('User cancelled login or did not fully authorize.');
                }
            });
        }
        $scope.FBLogOut=function() {
            FB.logout(function (response) {
                console.log(response);
                console.log("logged Out");
            });
        }

        $scope.FBlogin=function(){
            FB.getLoginStatus(function(response) {
                if (response.status === 'connected') {
                    $scope.uid = response.authResponse.userID;
                    //var accessToken = response.authResponse.accessToken;
                    console.log($scope.uid);
                    console.log(response);

                    $scope.getMyLastNameCtrl =
                        User.getMyLastName($scope.uid)
                            .then(function (response) {
                                //callback(response.data);
                                //User.resolve(response)
                                $scope.last_name = response.last_name;
                                console.log(response);
                            }
                        );

                    $scope.FeedCtrl =
                        User.Feed($scope.uid)
                            .then(function (response) {
                                //callback(response.data);
                                //User.resolve(response)
                                $scope.feed = response ;
                                console.log(response);
                            }
                        );
                } else if (response.status === 'not_authorized') {
                    $scope.FBloginCheck();
                }
                else{
                    $scope.FBloginCheck();
                }
            });
        }
    }]);



