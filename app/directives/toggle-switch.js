(function(){
    angular.module('attendance')
    .directive('toggleSwitch', function(){
        return{
            restrict: "E",
            scope: {
                
            },
            templateUrl: "app/templates/toggle-switch.html" 
        }
    });
})();