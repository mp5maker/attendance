(function () {
    // "use strict";
    
    angular.module('attendance')
        .directive('salaryDistributionTable', function () {
            return {
                restrict: "E",
                scope: {
                    "tableId": "=",
                    "language": "=",
                    "currentPageName": "=",
                    "employeeData": "="
                },
                templateUrl: "app/templates/table/salary-distribution-table.html"
            }
        });
})();