(function(){
    'use strict';
    
    angular.module('attendance')
    .directive('navigatorTemplate', function(){
        return {
            restrict: "E",
            templateUrl: "app/templates/layouts/navigator-template.html",
        }
    });
})();