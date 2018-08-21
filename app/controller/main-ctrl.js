(function(){
    angular.module('attendance')
    .controller('mainCtrl', function($scope){
        $scope.theme = 'dark';
        $scope.logoSrc = "app/images/logo/logo.jpg";
        $scope.$on('themeChanged', function($event, message){
            $scope.theme = message;
        });
    });
})();