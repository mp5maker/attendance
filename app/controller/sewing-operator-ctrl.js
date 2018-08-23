(function () {
    "use strict";
    
    angular.module('attendance')
        .controller('sewingOperatorCtrl', function ($scope) {
            $scope.tableId = 'sewing-operator-table';
            $scope.worksheetName = 'management-money-distribution-sheet';
            $scope.currentPageName = 'SEWING_OPERATOR';
        });
})();
