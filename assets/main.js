(function(){
    var modules = [
        'ngAnimate',
        'ngMessages',
        'ui.router',
        'pascalprecht.translate',
    ];
    
    angular.module('attendance', modules);
})();

(function(){
    angular.module('attendance')
    .run(function($rootScope, $translate){
        $rootScope.themeSelected = 'dark';

        $rootScope.languageEnglish = function(){
            $translate.use('en')
        };
        
        $rootScope.languageBengali = function(){
            $translate.use('bn');
        };

        $rootScope.themeDark = function(){
            $rootScope.themeSelected = 'dark';
        };
        
        $rootScope.themeLight = function(){
            $rootScope.themeSelected = 'light';
        };
    });
})();
(function(){
    angular.module('attendance')
    .config(function($translateProvider){
        $translateProvider.translations('en', {
            "AGS_TEXTILES_LIMITED": "AGS Textiles Limited",
            "AGS_TEXTILES_ADDRESS": "Bashir Plaza, Bamoil Bazar, Sarulia Demra, Dhaka-1361 Dhaka, Bangladesh"
        });
        $translateProvider.translations('bn', {
            "AGS_TEXTILES_LIMITED": "এজিএস টেক্সটাইল লিমিটেড",
            "AGS_TEXTILES_ADDRESS": "বশির প্লাজা, বামুল বাজার, সারুলিয়া ডেমরা, ঢাকা -1661, ঢাকা, বাংলাদেশ"
        });
        $translateProvider.preferredLanguage('en');
        $translateProvider.useSanitizeValueStrategy('escape');
    });
})();
(function(){
    angular.module('attendance')
    .directive('header', function(){
        return{
            restrict: "E",
            templateUrl: "app/templates/header.html"
        };
    });
})();
(function () {
    angular.module('attendance')
        .directive('languageSelector', function () {
            return {
                restrict: "E",
                templateUrl: "app/templates/language-selector.html"
            }
        });
})();
(function(){
    angular.module('attendance')
    .directive('themeSelector', function(){
        return{
            restrict: "E",
            templateUrl: "app/templates/theme-selector.html"
        }
    });
})();