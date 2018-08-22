(function () {
    angular.module('attendance')
        .directive('salaryDistributionTable', function () {
            return {
                restrict: "E",
                templateUrl: "app/templates/table/salary-distribution-table.html"
            }
        });
})();