(function(){
    'use strict';
    
    angular.module('attendance')
    .controller('adminStaffCtrl', function($scope){
        $scope.tableId = 'admin-staff-table';
        $scope.worksheetName = 'management-money-distribution-sheet';
        $scope.currentPageName = 'ADMIN_STAFF';
    });
})();
