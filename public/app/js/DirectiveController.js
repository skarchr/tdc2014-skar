(function(){
    'use strict';

    angular.module('app').controller('directiveController', ['$scope', '$timeout', function($scope, $timeout){

        $scope.temp = '';

        $scope.run = false;
        $scope.jump = false;
        $scope.slide = false;
        $scope.ngJump = function(){

            $scope.jump = true;

            $timeout(function(){
                $scope.jump = false;
            }, 300);
        };

        $scope.ngSlide = function(){

            $scope.slide = true;

            $timeout(function(){
                $scope.slide = false;
            }, 300);
        };

        $scope.submit = function(){
            alert('HelloWorld!');
        };
        $scope.numbOfCols = 4;
        $scope.ngMan = 'images/standing_blinking_512.gif';

        $scope.model = {

            module: [
            {
                name:'Init man',
                image: 'app/images/spark.png',
                number: 1
            },
            {
                name:'Binding man',
                image: 'app/images/snake.png',
                number: 2
            },
            {
                name:'Directive man',
                image: 'app/images/needle.png',
                number: 3
            },
            {
                name:'Form man',
                image: 'app/images/top.png',
                number: 4
            },
            {
                name:'Watch man',
                image: 'app/images/shadow.png',
                number: 5
            },
            {
                name:'Filter man',
                image: 'app/images/magnet.png',
                number: 6
            },
            {
                name:'Animate man',
                image: 'app/images/gemini.png',
                number: 7
            },
            {
                name:'Tip man',
                image: 'app/images/hard.png',
                number: 8
            }]
        };

    }]);

})();