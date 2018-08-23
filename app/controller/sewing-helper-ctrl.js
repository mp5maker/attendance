(function () {
    "use strict";
    
    angular.module('attendance')
        .controller('sewingHelperCtrl', function ($scope) {
            $scope.tableId = 'sewing-helper-table';
            $scope.worksheetName = 'management-money-distribution-sheet';
            $scope.currentPageName = 'SEWING_HELPER';
        });
})();
