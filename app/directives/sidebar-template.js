(function(){
    "use strict";

    angular.module('attendance')
    .directive('sidebarTemplate', function(){
        return{
            restrict: "E",
            templateUrl: "app/templates/layouts/sidebar-template.html",
        }
    });
})();