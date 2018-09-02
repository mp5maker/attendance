(function () {
    "use strict";
    
    angular.module('attendance')
        .controller('productionStaffCtrl', function ($scope) {
            $scope.tableId = 'production-staff-table';
            $scope.worksheetName = 'management-money-distribution-sheet';
            $scope.currentPageName = "PRODUCTION_STAFF";

            // Emitting the Values
            $scope.$emit('tableId', $scope.tableId);
            $scope.$emit('worksheetName', $scope.worksheetName);
            $scope.$emit('currentPageName', $scope.currentPageName);
        });
})();
