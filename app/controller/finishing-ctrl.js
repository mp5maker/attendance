(function () {
    "use strict";
    
    angular.module('attendance')
        .controller('finishingCtrl', function ($scope) {
            $scope.tableId = 'finishing-table';
            $scope.worksheetName = 'management-money-distribution-sheet';
            $scope.currentPageName = "FINISHING";
        });
})();
