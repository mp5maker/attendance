(function(){
    angular.module('attendance')
    .directive('themeSelector', function(){
        return{
            restrict: "E",
            templateUrl: "app/templates/theme-selector.html"
        }
    });
})();