/**
 * Created by Affan on 20/11/2016.
 */
angular.module('GraphApi')
    .controller('GraphData',['$scope','User','$window',function($scope,User,$window){
        $scope.name="fb Login"

        $scope.getData=function(){
           $scope.data = User.Data({

            })
            console.log($scope.data);
            //   .success(function(data) {
            //    console.log(data);
            //
            //    return data;
            //})
            //    .error(function(data) {
            //        return data;
            //    });
            //console.log($scope.Patient_Details);
            //console.log($scope.group.name);
        }


    }]);



