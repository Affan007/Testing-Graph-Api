/**
 * Created by Affan on 20/11/2016.
 */
angular.module('GraphApi')
    .controller('Graph',['$scope','User','$window','$location',function($scope,User,$window,$location){
    $scope.name="fb Login";
        $scope.DataBool=false;
        $scope.bool=false;
        $scope.FBloginCheck=function(){
            FB.login(function(response) {
                if (response.authResponse) {
                    console.log('Welcome!  Fetching your information.... ');
                    //FB.api('/me',{scope:'email,user_likes,public_profile,user_about_me,user_posts,user_relationships',return_scopes: true}, function(response) {
                    //    console.log('Good to see you, ' + response.name + '.');
                    //    console.log(response);
                    //});
                    $scope.getData();
                } else {
                    console.log('User cancelled login or did not fully authorize.');
                }
            });
        }
        $scope.FBLogOut=function() {
            FB.logout(function (response) {
                console.log(response);
                console.log("logged Out");
                $scope.bool= true;
                $scope.DataBool=true;
                $window.location=('/');
            });
        }

        $scope.getData=function(){
            $scope.getMyLastNameCtrl =
                User.getMyLastName($scope.uid)
                    .then(function (response) {
                        //callback(response.data);
                        //User.resolve(response)
                        $scope.data = response ;
                        $scope.ProfilePic_Large='http://graph.facebook.com/'+$scope.data.id+'/picture?type=large';
                        $scope.Veification
                        console.log(response);
                        //$scope.$apply($scope.DataBool=true)
                        $scope.DataBool=true;
                        $scope.bool=true;
                    }
                );

            $scope.boolG=function(){
                $scope.DataBool=false;
            }
            //$window.location.href = '/Data';

            //$scope.FeedCtrl =
            //    User.Feed($scope.uid)
            //        .then(function (response) {
            //            //callback(response.data);
            //            //User.resolve(response)
            //            $scope.feed = response ;
            //            console.log(response);
            //        }
            //    );

        }

        $scope.visit=function(){
            $location.url($scope.data.link);
        };

        $scope.FBlogin=function(){
            FB.getLoginStatus(function(response) {
                if (response.status === 'connected') {
                    $scope.bool=true;
                    $scope.uid = response.authResponse.userID;
                    //var accessToken = response.authResponse.accessToken;
                    console.log($scope.uid);
                    console.log(response);
                    $scope.getData();


                } else if (response.status === 'not_authorized') {
                    $scope.FBloginCheck();
                    $scope.getData();
                }
                else{
                    $scope.FBloginCheck();
                    $scope.getData();
                }
            });
        }
    }]);



