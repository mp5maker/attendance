(function () {
    "use strict";
    
    angular.module('attendance')
        .controller('managementCtrl', function ($scope) {
            $scope.tableId = 'management-table';
            $scope.worksheetName = 'management-money-distribution-sheet';
            $scope.currentPageName = 'MANAGEMENT';

            // Emitting the Values
            $scope.$emit('tableId', $scope.tableId);
            $scope.$emit('worksheetName', $scope.worksheetName);
            $scope.$emit('currentPageName', $scope.currentPageName);
        });
})();
