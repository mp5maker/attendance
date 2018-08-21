(function () {
    angular.module('attendance')
        .controller('themeSelectorCtrl', function ($scope) {
            $scope.themeDark = function () {
                $scope.$emit('themeChanged', 'dark');
            };
            $scope.themeLight = function () {
                $scope.$emit('themeChanged', 'light');
            };
        });
})();