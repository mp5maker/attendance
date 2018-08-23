(function () {
    "use strict";
    
    angular.module('attendance')
        .controller('cuttingCtrl', function ($scope) {
            $scope.tableId = 'cutting-table';
            $scope.worksheetName = 'management-money-distribution-sheet';
            $scope.currentPageName = 'CUTTING';
        }); 
})();
