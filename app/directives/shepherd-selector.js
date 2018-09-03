(function(){
    "use strict";

    angular.module('attendance')
    .directive('shepherdSelector', function(){
        return{
            restrict: "E",
            templateUrl: "app/templates/utilities/shepherd-selector.html"
        }
    });
})();