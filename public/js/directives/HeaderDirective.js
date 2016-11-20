/**
 * Created by Affan on 20/11/2016.
 */
angular.module('GraphApi')
    .directive('graphHeader', [
        function($scope ){

            var linker = function(scope, element ) {


            }//end of linker

            return {
                templateUrl:'js/directives/Header.html',
                restrict: 'ECMA',
                replace: true,
                link: linker,
                scope: true
            }
        }]);
