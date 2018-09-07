(function(){
    "use strict";

    angular.module('attendance')
    .factory('apiHelperFactory', function(apiRoutes, $http){
        return {
            // Read
            allEmployee: () =>  $http.get(apiRoutes.employeeAll),
            // Create
            // Update
            // Delete 
        }
    })
})();