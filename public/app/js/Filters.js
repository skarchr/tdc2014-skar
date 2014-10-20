(function(){
    'use strict';

    angular.module('app')
        .filter('fizzbuzz', function(){
            return function(input){
                return input % 15 == 0 ? 'FizzBuzz': input % 5 == 0 ? 'Buzz':input % 3 == 0 ? 'Fizz':input;
            }
        });

})();