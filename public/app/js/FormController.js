(function(){
    'use strict';

    angular.module('app').controller('formController', function($scope){

        $scope.formMan = 'Form Man';

        $scope.formData = {
            firstName: '',
            lastName: '',
            email:'',
            password:''
        };

    });

})();