(function(){
    "use strict";
    
    angular.module('attendance')
    .directive('printSection', function(){
        return{
            restrict: "A",
            link: function(scope, element){
                element[0].classList.add('print-section');
            }
        };
    });
})();