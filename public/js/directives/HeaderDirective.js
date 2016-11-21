/**
 * Created by Affan on 20/11/2016.
 */
angular.module('GraphApi')
    .directive('graphHeader', ['User','$window',function(User,$window){

            var linker = function($scope, element,$watch ) {



            }//end of linker

            return {
                templateUrl:'js/directives/Header.html',
                restrict: 'ECMA',
                replace: true,
                link: linker,
                scope: false
                //scop:'&'
            }
        }]);
