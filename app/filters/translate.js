(function(){
    angular.module('attendance')
    .filter('translate', function(language){
        return function(word){
            var language_selected = 'en';
            console.log(language);
            if(language[language_selected][word]){
                return language[language_selected][word];
            }else{
                return word;
            }
        };
    });
})();