(function(){
    angular.module('attendance')
    .controller('mainCtrl', function($scope){
        $scope.theme = 'dark';
        $scope.language = 'en';
        $scope.logoSrc = "app/images/logo/logo.png";
        //Testing
        $scope.random_number = '798345120';

        $scope.$on('themeChanged', function($event, message){
            $scope.theme = message;
        });

        $scope.$on('languageChanged', function($event, message){
            $scope.language = message;
        });
    });
})();