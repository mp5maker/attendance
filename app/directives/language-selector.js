(function () {
    angular.module('attendance')
        .directive('languageSelector', function () {
            return {
                restrict: "E",
                templateUrl: "app/templates/language-selector.html"
            }
        });
})();