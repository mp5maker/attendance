(function(){
    'use strict';
    
    angular.module('attendance')
    .controller('adminStaffCtrl', function($scope){
        $scope.tableId = 'admin-staff-table';
        $scope.worksheetName = 'management-money-distribution-sheet';
        $scope.currentPageName = 'ADMIN_STAFF';

        // Emitting the Values
        $scope.$emit('tableId', $scope.tableId);
        $scope.$emit('worksheetName', $scope.worksheetName);
        $scope.$emit('currentPageName', $scope.currentPageName);
    });
})();
