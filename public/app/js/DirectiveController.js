(function(){
    'use strict';

    angular.module('app').controller('directiveController', function($scope){

        $scope.temp = '';

        $scope.check = false;
        $scope.run = false;

        $scope.submit = function(){
            alert('HelloWorld!');
        };

        $scope.ngMan = 'images/standing_blinking_512.gif';

        $scope.repeat = {

            module: [
            {
                name:'Spa man',
                image: 'images/spark.png',
                number: 1
            },
            {
                name:'Binding man',
                image: 'images/snake.png',
                number: 2
            },
            {
                name:'Directive man',
                image: 'images/needle.png',
                number: 3
            },
            {
                name:'Form man',
                image: 'images/top.png',
                number: 4
            },
            {
                name:'Watch man',
                image: 'images/shadow.png',
                number: 5
            },
            {
                name:'Filter man',
                image: 'images/magnet.png',
                number: 6
            },
            {
                name:'Factory man',
                image: 'images/gemini.png',
                number: 7
            },
            {
                name:'Animate man',
                image: 'images/hard.png',
                number: 8
            }]
        };

    });

})();