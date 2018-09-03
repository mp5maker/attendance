(function(){
    "use strict";

    angular.module('attendance')
    .factory('shepherdFactory', function ($window) {
        if (!$window.Shepherd) {
            console.log('Shepherd cannot be loaded');
        }
        return $window.Shepherd;
    });
})();