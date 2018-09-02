(function () {
    "use strict";
    
    angular.module('attendance')
        .controller('finishingCtrl', function ($scope) {
            $scope.tableId = 'finishing-table';
            $scope.worksheetName = 'management-money-distribution-sheet';
            $scope.currentPageName = "FINISHING";

            // Emitting the Values
            $scope.$emit('tableId', $scope.tableId);
            $scope.$emit('worksheetName', $scope.worksheetName);
            $scope.$emit('currentPageName', $scope.currentPageName);
        });
})();
