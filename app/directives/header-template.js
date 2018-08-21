(function(){
    angular.module('attendance')
    .directive('headerTemplate', function(){
        return{
            restrict: "E",
            templateUrl: "app/templates/header-template.html"
        };
    });
})();