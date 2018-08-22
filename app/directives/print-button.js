(function(){
    'use strict';
    
    angular.module('attendance')
    .directive('printButton', function($window){
        return{
            restrict: "E",
            templaterUrl: "app/templates/utilities/print-button.html",
            link: function(scope, element){
                scope.printNow = function(){
                    var div = element[0].querySelector('.print-section');
                }
            }
        }
    });
})();