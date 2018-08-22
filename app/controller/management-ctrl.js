(function () {
    "use strict";
    
    angular.module('attendance')
        .controller('managementCtrl', function ($scope) {
            $scope.tableId = 'management-table';
            $scope.worksheetName = 'management-money-distribution-sheet';
        });
})();
