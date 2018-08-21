(function(){
    angular.module('attendance')
    .directive('navigatorTemplate', function(){
        return {
            restrict: "E",
            templateUrl: "app/templates/navigator-template.html"
        }
    });
})();