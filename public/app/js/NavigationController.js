(function(){
    'use strict';

    angular.module('app').controller('navigationController', ['$scope', '$location', function($scope, $location){

        $scope.activePage = '';


        $scope.$watch(function() { return $location.path(); }, function(){
            $scope.activePage = $location.path().split('/')[1];
        });

    }]);

})();