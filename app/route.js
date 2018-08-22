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