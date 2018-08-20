(function(){
    angular.module('attendance')
    .filter('translate', function($rootScope, language){
        return function(word){
            var language_selected = $rootScope.languageSelected;
            console.log(language);
            if(language[language_selected][word]){
                return language[language_selected][word];
            }else{
                return word;
            }
        };
    });
})();