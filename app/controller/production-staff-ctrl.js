(function () {
    "use strict";
    
    angular.module('attendance')
        .controller('productionStaffCtrl', function ($scope) {
            $scope.tableId = 'production-staff-table';
            $scope.worksheetName = 'management-money-distribution-sheet';
            $scope.currentPageName = "PRODUCTION_STAFF";
        });
})();
