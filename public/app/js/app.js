(function(){
    'use strict';

    var app = angular.module('app', ['ngRoute', 'ngAnimate'])
        .run(['$rootScope',function($rootScope){
            $rootScope.namePattern = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ]+$/;

            $rootScope.$on("$routeChangeSuccess", function (event, currentRoute, previousRoute) {

                document.title = 'ngMan';

                if(currentRoute.title !== undefined){
                    document.title += ' - ' + currentRoute.title;
                }
            });
    }]);


    app.config(['$routeProvider', '$locationProvider',

        function($routeProvider, $locationProvider) {


            $locationProvider.html5Mode(true);

            $routeProvider.
                when('/', {
                    templateUrl: '/partials/views/menu'
                }).
                when('/init', {
                    title:'Init',
                    templateUrl: '/partials/views/init',
                    controller: 'initController'
                }).
                when('/binding', {
                    title:'Binding',
                    templateUrl: '/partials/views/binding',
                    controller: 'bindingController'
                }).
                when('/directive', {
                    title:'Directive',
                    templateUrl: '/partials/views/directive',
                    controller: 'directiveController'
                }).
                when('/form', {
                    title:'Form',
                    templateUrl: '/partials/views/form',
                    controller: 'formController'
                }).
                when('/watch', {
                    title:'Watch',
                    templateUrl: '/partials/views/watch',
                    controller: 'watchController'
                }).
                when('/filter', {
                    title:'Filter',
                    templateUrl: 'partials/views/filter',
                    controller: 'filterController'
                }).
                when('/factory', {
                    title:'Factory',
                    templateUrl: 'partials/views/factory',
                    controller: 'factoryController'
                }).
                when('/animate', {
                    title:'Animate',
                    templateUrl: 'partials/views/animate'
                }).
                otherwise({
                    redirectTo: '/partials/views/menu'
                });
        }]);

})();
