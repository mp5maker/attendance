(function(){
    angular.module('attendance')
    .controller('languageSelectorCtrl', function($scope, $translate){
        $scope.languageEnglish = function () {
            $scope.$emit('languageChanged', 'en');
            $translate.use('en')
        };
        
        $scope.languageBengali = function () {
            $scope.$emit('languageChanged', 'bn');
            $translate.use('bn');
        };
    });
})();