(function(){
    "use strict";
    
    var modules = [
        'ngAnimate',
        'ngMessages',
        'ui.router',
        'pascalprecht.translate',
    ];
    
    angular.module('attendance', modules);
})();
(function(){
    "use strict";
    
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
    "use strict";
    
    angular.module('attendance')
    .run(function(){});
})();
(function(){
    "use strict";
    
    angular.module('attendance')
    .config(function($translateProvider){
        $translateProvider.translations('en', {
            "0": "0",
            "1": "1",
            "2": "2",
            "3": "3",
            "4": "4",
            "5": "5",
            "6": "6",
            "7": "7",
            "8": "8",
            "9": "9",
            ":": ":",
            "/": "/",
            ",": ",",
            ".": ".",
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
            "BRANCH": "Branch",
            "MONTH": "Month",
            "JANUARY": "January",
            "FEBRUARY": "February",
            "MARCH": "March",
            "APRIL": "April",
            "MAY": "May",
            "JUNE": "June",
            "JULY": "July",
            "AUGUST": "August",
            "SEPTEMBER": "September",
            "OCTOBER": "October",
            "NOVEMBER": "November",
            "DECEMBER": "December",
            "MONTH": "Month",
            "PRINT": "Print",
            "DATE": "Date",
            "YEAR": "Year",
            "MONEY": "Money",
            "DISTRIBUTION": "Distribution",
            "MONEY_DISTRIBUTION_SHEET": "Money Distribution Sheet",
            "MONEY_DISTRIBUTION": "Money Distribution",
            "WORKER_NO": "Worker No",
            "CARD_NO": "Card No",
            "NAME": "Name",
            "GRADE": "Grade",
            "JOINING": "Joining",
            "JOINING_DATE": "Joining Date",
            "ASSIGNED": "Assigned",
            "ATTENDANCE": "Attendance",
            "OVERTIME_HOURS": "Overtime Hours",
            "EXTENDED_HOLIDAYS": "Extended Holdays",
            "HOLIDAY": "Holiday",
            "DISTRIBUTION_TYPE": "Distribution Type",
            "OVERTIME_MONEY": "Overtime Money",
            "HAJIRA_BONUS": "Hajira Bonus",
            "TOTAL_DISTRIBUTED": "Total Distributed",
            "CUT_OUT": "Cut Out",
            "MONEY_RECEIVED": "Money Received",
            "SIGNATURE": "Signature",
            "PRESENT": "Present",
            "ABSENT": "Absent",
            "OTHERS": "Others",
            "DAYS" : "Days",
            "MAIN_SALARY": "Main Salary",
            "HOME_RENT": "Home Rent",
            "MEDICAL_COST": "Medical Cost",
            "TRANSPORT_COST": "Transport Cost",
            "FOOD": "Food",
            "COST": "Cost",
            "OTHER_COMPANY_FACILITIES": "Other Company Facilities",
            "TOTAL_SALARY": "Total Salary",
            "ADVANCED_OTHERS": "Advanced/Others",
            "REVENUE": "Revenue",
            "TOTAL": "Total",
            "SL_NO": "SL. No:",
            "SECTION": "Section",
            "PAYABLE": "Payable",
            "OVERTIME": "Overtime",
            "ATTENDANCE_BONUS": "Attendance Bonus",
            "TOTAL_HOURS": "Total Hours",
            "TOTAL_PERSONS": "Total Persons",
        });
        $translateProvider.translations('bn', {
            "0": "০",
            "1": "১",
            "2": "২",
            "3": "৩",
            "4": "4",
            "5": "৫",
            "6": "৬",
            "7": "৭",
            "8": "৮",
            "9": "৯",
            ":": ":",
            "/": "/",
            ",": ",",
            ".": ".",
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
            "BRANCH": "শাখা",
            "MONTH": "মাস",
            "JANUARY": "জানুয়ারী",
            "FEBRUARY": "ফেব্রুয়ারী",
            "MARCH": "মার্চ",
            "APRIL": "এপ্রিল",
            "MAY": "মায়",
            "JUNE": "জুনে",
            "JULY": "জুলাই",
            "AUGUST": "অগাস্ট",
            "SEPTEMBER": "সেপ্টেম্বর",
            "OCTOBER": "অক্টোবর",
            "NOVEMBER": "নভেম্বর",
            "DECEMBER": "ডিসেম্বর",
            "PRINT": "প্রিন্ট",
            "DATE": "তারিক",
            "YEAR": "বছর",
            "MONEY": "টাকা",
            "DISTRIBUTION": "বিতরণ",
            "MONEY_DISTRIBUTION_SHEET": "বেতন প্রদান রশিদ",
            "MONEY_DISTRIBUTION": "নগদ প্রদান",
            "WORKER_NO": "কর্মী নং:",
            "CARD_NO": "কার্ড নং:",
            "NAME": "নাম",
            "GRADE": "শ্রেণী",
            "JOINING": "যোগদান",
            "JOINING_DATE": "যোগদান তারিখ",
            "ASSIGNED": "পদবি",
            "ATTENDANCE": "উপস্থিতি",
            "OVERTIME_HOURS": "অতিরিক্ত ঘন্টা",
            "EXTENDED_HOLIDAYS": "এক্সটেন্ডেড হলিডে",
            "HOLIDAY": "হলিডে",
            "DISTRIBUTION_TYPE": "প্রদানের ধরন",
            "OVERTIME_MONEY": "ওভারটাইম অর্থ",
            "HAJIRA_BONUS": "হাজিরার বোনাস",
            "TOTAL_DISTRIBUTED": "মট প্রদান",
            "CUT_OUT": "কাট আউট",
            "MONEY_RECEIVED": "প্রাপ্ত টাকা",
            "SIGNATURE": "সাক্ষর",
            "PRESENT": "ঊপস্থিত",
            "ABSENT": "অনুপস্থিত",
            "OTHERS": "অন্যান্য",
            "MAIN_SALARY": "প্রধান বেতন",
            "HOME_RENT": "বাড়ি ভাড়া",
            "MEDICAL_COST": "চিকিৎসা খরচ",
            "TRANSPORT_COST": "পরিবহন খরচ",
            "FOOD": "খাদ্য",
            "COST": "মূল্য",
            "OTHER_COMPANY_FACILITIES": "অন্যান্য কোম্পানি সুবিধাসমূহ",
            "TOTAL_SALARY": "মোট বেতন",
            "ADVANCED_OTHERS": "অগ্রিম অন্যান্য",
            "REVENUE": "রাজস্ব",
            "TOTAL": "মোট",
            "SL_NO": "ক্রমিক নং:",
            "SECTION": "বিভাগ",
            "PAYABLE": "প্রদেয়",
            "OVERTIME": "অধিকর্ম",
            "ATTENDANCE_BONUS": "উপস্থিতি বোনাস",
            "TOTAL_HOURS": "মোট ঘণ্টা",
            "TOTAL_PERSONS": "মোট মানুষ",
        });
        $translateProvider.preferredLanguage('en');
        $translateProvider.useSanitizeValueStrategy('escape');
    });
})();
(function(){
    'use strict';
    
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
    'use strict';
    
    angular.module('attendance')
        .directive('languageSelector', function () {
            return {
                restrict: "E",
                templateUrl: "app/templates/utilities/language-selector.html"
            }
        });
})();
(function(){
    'use strict';
    
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
    'use strict';
    
    angular.module('attendance')
    .directive('overallTable', function(){
        return{
            restrict: "E",
            templateUrl: "app/templates/table/overall-table.html"
        }
    });
})();
(function () {
    'use strict';

    angular.module('attendance')
        .directive('printButton', function ($window) {
            return {
                restrict: "E",
                templateUrl: "app/templates/utilities/print-button.html",
                link: function(scope, element, attributes){
                    if(attributes.color){
                        scope.color = attributes.color;
                    }else{
                        scope.color = "primary";
                    }
                    scope.printNow = function(){
                        var printSections = document.getElementsByClassName('print-section');
                        var contents = '';
                        for(var i = 0; i < printSections.length; i++){
                            contents += printSections[i].innerHTML;
                        }
                        var popUp = window.open('', '_blank');
                        popUp.document.open();
                        popUp.document.write(`<html>
                                                    <head>
                                                        <link rel="stylesheet" type="text/css" href="assets/main.css"/>
                                                    </head>
                                                    <body onload="window.print()">
                                                        ${contents}
                                                    </body>
                                                </html>`);
                        popUp.document.close();
                    }
                }
            };
        });
})();

(function(){
    "use strict";
    
    angular.module('attendance')
    .directive('printSection', function(){
        return{
            restrict: "A",
            link: function(scope, element){
                element[0].classList.add('print-section');
            }
        };
    });
})();
(function () {
    // "use strict";
    
    angular.module('attendance')
        .directive('salaryDistributionTable', function () {
            return {
                restrict: "E",
                scope: {
                    "tableId": "=",
                    "language": "=",
                    "currentPageName": "="
                },
                templateUrl: "app/templates/table/salary-distribution-table.html"
            }
        });
})();
(function(){
    "use strict";
    
    angular.module('attendance')
    .directive('themeSelector', function(){
        return{
            restrict: "E",
            templateUrl: "app/templates/utilities/theme-selector.html"
        }
    });
})();
(function(){
    "use strict";
    
    angular.module('attendance')
    .factory('excelFactory', function ($window) {
            var uri = 'data:application/vnd.ms-excel;base64,',
                template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>',
                base64 = function (s) { return $window.btoa(unescape(encodeURIComponent(s))); },
                format = function (s, c) { return s.replace(/{(\w+)}/g, function (m, p) { return c[p]; }) };
            return {
                    tableToExcel: function (tableId, worksheetName) {
                        var table = $("#" + tableId),
                            ctx = { worksheet: worksheetName, table: table.html() },
                            href = uri + base64(format(template, ctx));
                        return href;
                }
            };
        })
})();

(function(){
    'use strict';
    
    angular.module('attendance')
    .controller('adminStaffCtrl', function($scope){
        $scope.tableId = 'admin-staff-table';
        $scope.worksheetName = 'management-money-distribution-sheet';
        $scope.currentPageName = 'ADMIN_STAFF';
    });
})();

(function () {
    "use strict";
    
    angular.module('attendance')
        .controller('attendanceCtrl', function ($scope) {

        });
})();

(function () {
    "use strict";
    
    angular.module('attendance')
        .controller('cuttingCtrl', function ($scope) {
            $scope.tableId = 'cutting-table';
            $scope.worksheetName = 'management-money-distribution-sheet';
            $scope.currentPageName = 'CUTTING';
        }); 
})();

(function () {
    "use strict";
    
    angular.module('attendance')
        .controller('finishingCtrl', function ($scope) {
            $scope.tableId = 'finishing-table';
            $scope.worksheetName = 'management-money-distribution-sheet';
            $scope.currentPageName = "FINISHING";
        });
})();

(function () {
    "use strict";
    
    angular.module('attendance')
        .controller('homeCtrl', function ($scope) {

        });
})();

(function(){
    "use strict";
    
    angular.module('attendance')
    .controller('languageSelectorCtrl', function($scope, $translate){
        $scope.languageEnglish = function () {
            $scope.$emit('languageChanged', 'en');
            $translate.use('en')
        };
        
        $scope.languageBengali = function () {
            $scope.$emit('languageChanged', 'bn');
            $translate.use('bn');
        };
    });
})();
(function () {
    "use strict";
    
    angular.module('attendance')
        .controller('loaderCleanerCtrl', function ($scope) {
            $scope.tableId = 'loader-cleaner-table';
            $scope.worksheetName = 'management-money-distribution-sheet';
            $scope.currentPageName = "LOADER_CLEANER";
        });
})();

(function(){
    "use strict";
    
    angular.module('attendance')
        .controller('mainCtrl', function ($scope, excelFactory, $timeout){
            $scope.theme = 'dark';
            $scope.language = 'en';
            $scope.logoSrc = "app/images/logo/logo.png";

            $scope.$on('themeChanged', function($event, message){
                $scope.theme = message;
            });

            $scope.$on('languageChanged', function($event, message){
                $scope.language = message;
            });

            $scope.exportToExcel = function (tableId, sheetName) { 
                var exportHref = excelFactory.tableToExcel(tableId, sheetName);
                $timeout(function () { 
                    var a = document.createElement('a');
                    a.href = exportHref;
                    a.download = `${sheetName}.xls`;
                    document.body.appendChild(a);
                    a.click();
                    a.remove();
                }, 100);  
            }
    });
})();
(function () {
    "use strict";
    
    angular.module('attendance')
        .controller('managementCtrl', function ($scope) {
            $scope.tableId = 'management-table';
            $scope.worksheetName = 'management-money-distribution-sheet';
            $scope.currentPageName = 'MANAGEMENT';
        });
})();

(function () {
    "use strict";
    
    angular.module('attendance')
        .controller('productionStaffCtrl', function ($scope) {
            $scope.tableId = 'production-staff-table';
            $scope.worksheetName = 'management-money-distribution-sheet';
            $scope.currentPageName = "PRODUCTION_STAFF";
        });
})();

(function () {
    "use strict";
    
    angular.module('attendance')
        .controller('qualityCtrl', function ($scope) {
            $scope.tableId = 'quality-table';
            $scope.worksheetName = 'management-money-distribution-sheet';
            $scope.currentPageName = 'QUALITY';
        });
})();

(function () {
    "use strict";
    
    angular.module('attendance')
        .controller('settingsCtrl', function ($scope) {

        });
})();

(function () {
    "use strict";
    
    angular.module('attendance')
        .controller('sewingHelperCtrl', function ($scope) {
            $scope.tableId = 'sewing-helper-table';
            $scope.worksheetName = 'management-money-distribution-sheet';
            $scope.currentPageName = 'SEWING_HELPER';
        });
})();

(function () {
    "use strict";
    
    angular.module('attendance')
        .controller('sewingOperatorCtrl', function ($scope) {
            $scope.tableId = 'sewing-operator-table';
            $scope.worksheetName = 'management-money-distribution-sheet';
            $scope.currentPageName = 'SEWING_OPERATOR';
        });
})();

(function () {
    "use strict";
    
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
(function () {
    "use strict";
    
    angular.module('attendance')
        .controller('totalSalaryCtrl', function ($scope) {

        });
})();

(function(){   
    "use strict";

    angular.module('attendance')
    .filter('numberTranslate', function($translate){
        return function(number, language_key){
            var languageTable;
            if(language_key){
                languageTable = $translate.getTranslationTable(language_key);
            }else{
                languageTable = $translate.getTranslationTable('en');
            }
            var create_number = "";
            for(var i = 0; i < number.length; i++){
                create_number += languageTable[number[i]];
            }
            return create_number;
        }
    });
})();