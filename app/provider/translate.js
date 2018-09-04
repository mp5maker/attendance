(function(){
    "use strict";
    
    angular.module('attendance')
    .config(function($translateProvider, english, bengali){
        $translateProvider.translations('en', english);
        $translateProvider.translations('bn', bengali);
        $translateProvider.preferredLanguage('en');
        $translateProvider.useSanitizeValueStrategy('escape');
    });
})();