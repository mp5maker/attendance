(function(){
    'use strict';
    
    angular.module('attendance')
    .directive('headerTemplate', function(){
        return{
            restrict: "E",
            templateUrl: "app/templates/layouts/header-template.html",
        };
    });
})();