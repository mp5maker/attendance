(function(){
    angular.module('attendance')
    .directive('navigatorTemplate', function(){
        return {
            restrict: "E",
            transclude: true, 
            templateUrl: "app/templates/layouts/navigator-template.html",
        }
    });
})();