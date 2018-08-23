(function () {
    "use strict";
    
    angular.module('attendance')
        .controller('qualityCtrl', function ($scope) {
            $scope.tableId = 'quality-table';
            $scope.worksheetName = 'management-money-distribution-sheet';
            $scope.currentPageName = 'QUALITY';
        });
})();
