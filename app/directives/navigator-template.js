(function(){
    'use strict';
    
    angular.module('attendance')
    .directive('navigatorTemplate', function(){
        return {
            restrict: "E",
            transclude: {
                'languageSelector': "languageSelector",
                'themeSelector': "themeSelector",
            },
            templateUrl: "app/templates/layouts/navigator-template.html",
        }
    });
})();