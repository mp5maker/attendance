(function () {
    "use strict";
    
    angular.module('attendance')
        .controller('managementCtrl', function ($scope, apiHelperFactory, $timeout) {
            $scope.tableId = 'management-table';
            $scope.worksheetName = 'management-money-distribution-sheet';
            $scope.currentPageName = 'MANAGEMENT';

            // Emitting the Values
            $scope.$emit('tableId', $scope.tableId);
            $scope.$emit('worksheetName', $scope.worksheetName);
            $scope.$emit('currentPageName', $scope.currentPageName);

            var get = function(){
                apiHelperFactory.allEmployee().then(function(response){
                    var data = response.data;
                    angular.forEach(data, function(value){
                        value.total_salary = parseInt(value.main_salary) + parseInt(value.home_rent) +
                            parseInt(value.medical_cost) + parseInt(value.transport_cost);
                            parseInt(value.food_cost) + parseInt(value.other_company_facilities);
                    });
                    $scope.employeeData = data;
                 });
            }
            $timeout(function(){
                get();
            },2000);
        });
})();
