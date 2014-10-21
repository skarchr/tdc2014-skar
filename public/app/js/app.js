(function(){
    'use strict';

    var app = angular.module('app', ['ngRoute', 'ngAnimate'])
        .run(function($rootScope){
            $rootScope.namePattern = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ]+$/;
    });


    app.config(['$routeProvider', '$locationProvider',

        function($routeProvider, $locationProvider) {


            $locationProvider.html5Mode(true);

            $routeProvider.
                when('/', {
                    templateUrl: '/partials/views/menu'
                }).
                when('/start', {
                    templateUrl: '/partials/views/start',
                    controller: 'commonController'
                }).
                when('/binding', {
                    templateUrl: '/partials/views/binding',
                    controller: 'bindingController'
                }).
                when('/directive', {
                    templateUrl: '/partials/views/directive',
                    controller: 'directiveController'
                }).
                when('/form', {
                    templateUrl: '/partials/views/form',
                    controller: 'formController'
                }).
                when('/watch', {
                    templateUrl: '/partials/views/watch',
                    controller: 'watchController'
                }).
                when('/filter', {
                    templateUrl: 'partials/views/filter',
                    controller: 'filterController'
                }).
                when('/factory', {
                    templateUrl: 'partials/views/factory',
                    controller: 'factoryController'
                }).
                when('/animate', {
                    templateUrl: 'partials/views/animate',
                    controller: 'commonController'
                }).
                otherwise({
                    redirectTo: '/partials/views/menu'
                });
        }]);

})();
