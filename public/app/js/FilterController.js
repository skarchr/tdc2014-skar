(function(){
    'use strict';

    angular.module('app').controller('filterController', function($scope){

        $scope.filtering = '';
        $scope.predicate = 'number';
        $scope.reverse = false;
        $scope.otherFilters = '';
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

        $scope.integerList = [];

        for(var i = 1; i<=50; i++){
            $scope.integerList.push(i);
        }

    });

})();