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
        $rootScope.logoSrc = "app/images/logo/logo.jpg";

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
            "AGS_TEXTILES_ADDRESS": "Bashir Plaza, Bamoil Bazar, Sarulia Demra, Dhaka-1361 Dhaka, Bangladesh",
            "HOME": "Home",
            "TOTAL_SALARY": "Total Salary",
            "MANAGEMENT": "Management",
            "ADMIN_STAFF": "Admin Staff",
            "PRODUCTION_STAFF": "Production Staff",
            "SEWING_OPERATOR": "Sewing Operator",
            "SEWING_HELPER": "Sewing Helper",
            "CUTTING": "Cutting",
            "QUALITY": "Quality",
            "FINISHING": "Finishing",
            "LOADER_CLEANER": "Loader Cleaner",
            "ENGLISH": "English",
            "BENGALI": "Bengali",
            "DARK": "Dark",
            "LIGHT": "Light"
        });
        $translateProvider.translations('bn', {
            "AGS_TEXTILES_LIMITED": "এজিএস টেক্সটাইল লিমিটেড",
            "AGS_TEXTILES_ADDRESS": "বশির প্লাজা, বামুল বাজার, সারুলিয়া ডেমরা, ঢাকা -1661, ঢাকা, বাংলাদেশ",
            "HOME": "নিবাস",
            "TOTAL_SALARY": "মোট বেতন",
            "MANAGEMENT": "ম্যানেজমেন্ট",
            "ADMIN_STAFF": "প্রশাসন কর্মচারীবৃন্দ",
            "PRODUCTION_STAFF": "উৎপাদন স্টাফ",
            "SEWING_OPERATOR": "সেলাই অপারেটর",
            "SEWING_HELPER": "সেলাই সাহায্যকারী",
            "CUTTING": "কাটা",
            "QUALITY": "গুণ",
            "FINISHING": "সম্পূর্ণতা",
            "LOADER_CLEANER": "লোডার ক্লিনার",
            "ENGLISH": "ইংরেজি",
            "BENGALI": "বাংলা",
            "DARK": "অন্ধকার",
            "LIGHT": "হালকা"
        });
        $translateProvider.preferredLanguage('en');
        $translateProvider.useSanitizeValueStrategy('escape');
    });
})();

(function(){
    angular.module('attendance')
    .directive('headerTemplate', function(){
        return{
            restrict: "E",
            templateUrl: "app/templates/header-template.html"
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
    .directive('navigatorTemplate', function(){
        return {
            restrict: "E",
            templateUrl: "app/templates/navigator-template.html"
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
(function(){
    angular.module('attendance')
    .directive('toggleSwitch', function(){
        return{
            restrict: "E",
            scope: {
                
            },
            templateUrl: "app/templates/toggle-switch.html" 
        }
    });
})();