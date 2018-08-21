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
    .config(function($stateProvider, $urlRouterProvider){
        var homeState = {
            name: "home",
            url: "/home",
            templateUrl: "app/templates/pages/home.html",
        };

        var attendanceState = {
            name: "attendance",
            url: "/attendance",
            templateUrl: "app/templates/pages/attendance.html",
        };

        var totalSalaryState = {
            name: "total-salary",
            url: "/total-salary",
            templateUrl: "app/templates/pages/total-salary.html",
        };

        var managementState = {
            name: "management",
            url: "/management",
            templateUrl: "app/templates/pages/management.html",
        };

        var adminStaffState = {
            name: "admin-staff",
            url: "/admin-staff",
            templateUrl: "app/templates/pages/admin-staff.html",
        };

        var productionStaffState = {
            name: "production-staff",
            url: "/production-staff",
            templateUrl: "app/templates/pages/production-staff.html",
        };

        var productionStaffState = {
            name: "production-staff",
            url: "/production-staff",
            templateUrl: "app/templates/pages/production-staff.html",
        };

        var sewingOperatorState = {
            name: "sewing-operator",
            url: "/sewing-operator",
            templateUrl: "app/templates/pages/sewing-operator.html",
        };

        var sewingHelperState = {
            name: "sewing-helper",
            url: "/sewing-helper",
            templateUrl: "app/templates/pages/sewing-helper.html",
        };

        var cuttingState = {
            name: "cutting",
            url: "/cutting",
            templateUrl: "app/templates/pages/cutting.html",
        };

        var qualityState = {
            name: "quality",
            url: "/quality",
            templateUrl: "app/templates/pages/quality.html",
        };

        var finishingState = {
            name: "finishing",
            url: "/finishing",
            templateUrl: "app/templates/pages/finishing.html",
        };

        var loaderCleanerState = {
            name: "loader-cleaner",
            url: "/loader-cleaner",
            templateUrl: "app/templates/pages/loader-cleaner.html",
        };

        var settingsState = {
            name: "settings",
            url: "/settings",
            templateUrl: "app/templates/pages/settings.html",
        };

        $stateProvider.state(homeState);
        $stateProvider.state(attendanceState);
        $stateProvider.state(totalSalaryState);
        $stateProvider.state(managementState);
        $stateProvider.state(adminStaffState);
        $stateProvider.state(productionStaffState);
        $stateProvider.state(sewingOperatorState);
        $stateProvider.state(sewingHelperState);
        $stateProvider.state(cuttingState);
        $stateProvider.state(qualityState);
        $stateProvider.state(finishingState);
        $stateProvider.state(loaderCleanerState);
        $stateProvider.state(settingsState);
        $urlRouterProvider.otherwise('/home');
    })
})();
(function(){
    angular.module('attendance')
    .run(function(){});
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
            "EN": "EN",
            "BN": "BN",
            "DARK": "Dark",
            "LIGHT": "Light",
            "SETTINGS": "Settings",
            "ATTENDANCE": "Attendance",
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
            "LIGHT": "হালকা",
            "EN": "EN",
            "BN": "BN",
            "SETTINGS": "সেটিংস",
            "ATTENDANCE": "উপস্থিতি",
        });
        $translateProvider.preferredLanguage('en');
        $translateProvider.useSanitizeValueStrategy('escape');
    });
})();
(function(){
    angular.module('attendance')
    .controller('languageSelectorCtrl', function($scope, $translate){
        $scope.languageEnglish = function () {
            $translate.use('en')
        };

        $scope.languageBengali = function () {
            $translate.use('bn');
        };
    });
})();
(function(){
    angular.module('attendance')
    .controller('mainCtrl', function($scope){
        $scope.theme = 'dark';
        $scope.logoSrc = "app/images/logo/logo.png";
        $scope.$on('themeChanged', function($event, message){
            $scope.theme = message;
        });
    });
})();
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
(function(){
    angular.module('attendance')
    .directive('headerTemplate', function(){
        return{
            restrict: "E",
            transclude: true,
            templateUrl: "app/templates/layouts/header-template.html",
        };
    });
})();
(function () {
    angular.module('attendance')
        .directive('languageSelector', function () {
            return {
                restrict: "E",
                templateUrl: "app/templates/utilities/language-selector.html"
            }
        });
})();
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
(function(){
    angular.module('attendance')
    .directive('themeSelector', function(){
        return{
            restrict: "E",
            templateUrl: "app/templates/utilities/theme-selector.html"
        }
    });
})();