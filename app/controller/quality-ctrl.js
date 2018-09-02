(function () {
    "use strict";
    
    angular.module('attendance')
        .controller('qualityCtrl', function ($scope) {
            $scope.tableId = 'quality-table';
            $scope.worksheetName = 'management-money-distribution-sheet';
            $scope.currentPageName = 'QUALITY';

            // Emitting the Values
            $scope.$emit('tableId', $scope.tableId);
            $scope.$emit('worksheetName', $scope.worksheetName);
            $scope.$emit('currentPageName', $scope.currentPageName);
        });
})();
