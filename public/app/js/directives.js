(function(){
    'use strict';

    angular.module('app')

        .directive('draggable', function(){
            return {
                restrict:'A',
                link:function(scope, elem){
                    elem.draggable();
                }
            };
        })

        .directive('hoverMenu',['$location', function($location){
            return {
                restrict: 'A',
                transclude:false,
                scope:{
                    hoverMenu: '@',
                    link:'@'
                },
                link: function(scope, elem, attrs, controller){


                    $(elem[0]).on('mouseenter', function(){

                        $(this).addClass('blink_me');

                        scope.$apply(function(){
                            scope.$parent.menuHover.direction = scope.hoverMenu;
                        });
                    });

                    $(elem[0]).on('mouseleave', function(){

                        $(this).removeClass('blink_me');

                        scope.$apply(function(){
                            scope.$parent.menuHover.direction = '';
                        });
                    });

                    $(elem[0]).on('click', function(){
                        if(scope.link !== undefined){
                            scope.$apply(function(){
                                $location.path(scope.link);
                                scope.$parent.activePage = scope.link;
                            });
                        } else {
                            alert(' X__x link missing!');
                        }

                    });

                }
            };

        }]);

})();
