(function(){
    angular.module('attendance')
    .directive('header', function(){
        return {
            restrict: "E",
            templateUrl: "app/templates/header.html"
        }
    });
})();