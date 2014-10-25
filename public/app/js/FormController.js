(function(){
    'use strict';

    angular.module('app').controller('formController', function($scope){

        $scope.formData = {
            firstName: '',
            lastName: '',
            password:''
        };

    });

})();