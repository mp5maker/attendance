(function(){
    angular.module('attendance')
    .directive('overallTable', function(){
        return{
            restrict: "E",
            templateUrl: "app/templates/table/overall-table.html"
        }
    });
})();