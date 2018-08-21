(function(){
    angular.module('attendance')
    .run(function($rootScope, $translate){
        $rootScope.themeSelected = 'dark';
        $rootScope.logoSrc = "app/images/logo/logo.jpg";

        $rootScope.languageEnglish = function(){
            $translate.use('en')
        };
        
        $rootScope.languageBengali = function(){
            $translate.use('bn');
        };

        $rootScope.themeDark = function(){
            $rootScope.themeSelected = 'dark';
        };
        
        $rootScope.themeLight = function(){
            $rootScope.themeSelected = 'light';
        };

    });
})();