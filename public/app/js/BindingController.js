(function(){
    'use strict';

    angular.module('app').controller('bindingController', ['$scope', function($scope){

        $scope.formData = {
            firstName:'',
            lastName:'',
            age:'',
            postcode:''
        };
    }]);


})();