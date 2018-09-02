(function() {
    "use strict";

    angular.module('attendance')
        .directive('stickyUtilityBar', function () {
            return {
                restrict: "E",
                templateUrl: "app/templates/utilities/sticky-utility-bar.html",
                controller: 'stickyUtilityBarCtrl',
            }
        });
})();