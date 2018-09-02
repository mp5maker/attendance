(function () {
    "use strict";
    
    angular.module('attendance')
        .controller('cuttingCtrl', function ($scope) {
            $scope.tableId = 'cutting-table';
            $scope.worksheetName = 'management-money-distribution-sheet';
            $scope.currentPageName = 'CUTTING';

            // Emitting the Values
            $scope.$emit('tableId', $scope.tableId);
            $scope.$emit('worksheetName', $scope.worksheetName);
            $scope.$emit('currentPageName', $scope.currentPageName);
        }); 
})();
