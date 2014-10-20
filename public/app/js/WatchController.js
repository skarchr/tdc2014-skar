(function(){
    'use strict';

    angular.module('app').controller('watchController', function($scope){
        $scope.watch = 'Hello';

        $scope.watchSelect = "";
        $scope.watchNew = "";
        $scope.watchOld = "";


        $scope.$watch('watchSelect', function(newVal, oldVal){
            if(newVal !== oldVal){
                $scope.watchNew = newVal;
                $scope.watchOld = oldVal;
            }
        });

        $scope.repeat = {

            module: [
                {
                    name:'Spa man',
                    image: '/app/images/spark.png',
                    number: 1
                },
                {
                    name:'Binding man',
                    image: '/app/images/snake.png',
                    number: 2
                },
                {
                    name:'Directive man',
                    image: '/app/images/needle.png',
                    number: 3
                },
                {
                    name:'Form man',
                    image: '/app/images/top.png',
                    number: 4
                },
                {
                    name:'Watch man',
                    image: '/app/images/shadow.png',
                    number: 5
                },
                {
                    name:'Filter man',
                    image: '/app/images/magnet.png',
                    number: 6
                },
                {
                    name:'Factory man',
                    image: '/app/images/gemini.png',
                    number: 7
                },
                {
                    name:'Animate man',
                    image: '/app/images/hard.png',
                    number: 8
                }]
        };
    });

})();