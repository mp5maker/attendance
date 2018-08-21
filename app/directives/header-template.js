(function(){
    angular.module('attendance')
    .directive('headerTemplate', function(){
        return{
            restrict: "E",
            transclude: true,
            templateUrl: "app/templates/layouts/header-template.html",
        };
    });
})();