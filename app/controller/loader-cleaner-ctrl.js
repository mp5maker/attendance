(function () {
    "use strict";
    
    angular.module('attendance')
        .controller('loaderCleanerCtrl', function ($scope) {
            $scope.tableId = 'loader-cleaner-table';
            $scope.worksheetName = 'management-money-distribution-sheet';
            $scope.currentPageName = "LOADER_CLEANER";
        });
})();
