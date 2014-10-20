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

        .directive('draggableNgMan', function(){
            return {
                restrict:'A',
                scope:{},
                link:function(scope, elem){

                    elem.draggable();

                    $(elem).on('mousedown', function(){
                        scope.$apply(function(){
                            scope.$parent.ngMan = "/app/images/jump.png";
                        });
                    });

                    $(elem).on('mouseup', function(){
                        scope.$apply(function(){
                            scope.$parent.ngMan = "/app/images/standing_blinking_512.gif";
                        });
                    });

                    $(document).on('keydown', function(e){

                        if(e.keyCode === 39){
                            scope.$apply(function(){
                                scope.$parent.ngMan = "/app/images/running_512.gif";
                            });

                            $(elem).animate({left:'+=25'}, 1);
                        }

                        if(e.keyCode === 37){
                            scope.$apply(function(){
                                scope.$parent.ngMan = "/app/images/running_512.gif";
                            });

                            $(elem).animate({left:'-=25'}, 1);
                        }
                    });

                    $(document).on('keyup', function(e){

                        scope.$apply(function(){
                            scope.$parent.ngMan = "/app/images/standing_blinking_512.gif";
                        });

                    });
                }
            };
        })

        .directive('hoverMenu', function(){
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
                            location.href= scope.link;
                        } else {
                            alert(' X__x link missing!');
                        }
                    });

                }
            };

        })
        .directive('jump', function(){
            return  {
                restrict:'A',
                scope:{},
                link:function(scope, elem, attrs, controller){
                    $(elem).on('click', function(){

                        $(elem).addClass('jump');

                        scope.$apply(function(){
                            scope.$parent.jump.state = true;

                        });
                        setTimeout(function(){
                            $(elem).removeClass('jump');
                            scope.$apply(function(){
                                scope.$parent.jump.state = false;

                            });
                        }, 500);

                    });
                }
            }
        })

        .directive('title', function(){
            return{
                restrict:'AE',
                scope:{
                    pic:'@'
                },
                replace:true,
                transclude:true,
                template:'<h1 class="text-center"><img ng-src="{{pic}}" height="52px" /> <span ng-transclude> </span> <img ng-src="{{pic}}" height="52px" /></h1>'
            };

        })

        .directive('submitButton', function(){
            return{
                restrict:'A',
                scope:{
                    sub:'=submitButton'
                },
                link:function(scope,elem){
                    $(elem[0]).on('click', function(){
                       if(scope.sub){
                           alert(JSON.stringify(scope.$parent.formData));
                       }
                        scope.$apply(function(){
                            scope.$parent.formData = {
                                firstName: '',
                                lastName: '',
                                email:'',
                                password:''
                            };

                        });
                        $('[name="firstName"]').focus();
                    });
                }
            }
        });
        /*.directive('draggable', function(){
            return {
                restrict:'A',
                link:function(scope, elem){
                    elem.draggable();
                }
            };
        })*/

})();
