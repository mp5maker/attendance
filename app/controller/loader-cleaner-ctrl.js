(function () {
    "use strict";
    
    angular.module('attendance')
        .controller('loaderCleanerCtrl', function ($scope) {
            $scope.tableId = 'loader-cleaner-table';
            $scope.worksheetName = 'management-money-distribution-sheet';
            $scope.currentPageName = "LOADER_CLEANER";

            // Emitting the Values
            $scope.$emit('tableId', $scope.tableId);
            $scope.$emit('worksheetName', $scope.worksheetName);
            $scope.$emit('currentPageName', $scope.currentPageName);
        });
})();
