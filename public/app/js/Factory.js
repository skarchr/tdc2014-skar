(function(){
    'use strict';

    angular.module('app').factory('Modules', function($http, $q){


        var getData = function(){
            var defer = $q.defer();
            $http.get('resource.json').success(function(data){
                defer.resolve(data);
            });
            return defer.promise;
        };

        return {
            data: getData()
        };

    });

})();