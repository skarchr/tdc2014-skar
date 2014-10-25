(function(){
    'use strict';

    angular.module('app').controller('navigationController', ['$scope', '$location', function($scope, $location){

        $scope.activePage = '';

        $scope.activeImage = '';

        $scope.toggle = {
            showCode: {
                state: false
            }
        };
        $scope.step = 0;

        $scope.$watch(function() { return $location.path(); }, function(){
            $scope.activePage = $location.path().split('/')[1];

            switch ($scope.activePage){
                case 'init':
                    $scope.activeImage = '/app/images/spark.png'
                    break;
                case 'binding':
                    $scope.activeImage = '/app/images/snake.png'
                    break;
                case 'directive':
                    $scope.activeImage = '/app/images/needle.png'
                    break;
                case 'form':
                    $scope.activeImage = '/app/images/top.png'
                    break;
                case 'watch':
                    $scope.activeImage = '/app/images/shadow.png'
                    break;
                case 'filter':
                    $scope.activeImage = '/app/images/magnet.png'
                    break;
                case 'animate':
                    $scope.activeImage = '/app/images/gemini.png'
                    break;
                case 'tip':
                    $scope.activeImage = '/app/images/hard.png'
                    break;
                default:
                    $scope.activeImage = '';
            }
        });

    }]);

})();