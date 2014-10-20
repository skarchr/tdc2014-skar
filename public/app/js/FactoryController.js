(function(){
    'use strict';

    angular.module('app').controller('factoryController', function($scope, Modules){
        $scope.model = Modules.data;
    });

})();