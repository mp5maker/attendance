(function(){
    angular.module('attendance')
    .controller('languageSelectorCtrl', function($scope, $translate){
        $scope.languageEnglish = function () {
            $translate.use('en')
        };

        $scope.languageBengali = function () {
            $translate.use('bn');
        };
    });
})();