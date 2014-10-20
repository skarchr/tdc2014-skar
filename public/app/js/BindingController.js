(function(){
    'use strict';

    angular.module('app').controller('bindingController', function($scope){

        $scope.bindingMan = 'binding man';

        $scope.formData = {
            firstName:'',
            lastName:''
        };
    });


})();