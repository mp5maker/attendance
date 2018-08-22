(function(){    
    angular.module('attendance')
    .filter('numberTranslate', function($translate){
        return function(number, language){
            language_key = language;
            var languageTable = $translate.getTranslationTable(language_key);
            var create_number = "";
            for(var i = 0; i < number.length; i++){
                create_number += languageTable[number[i]];
            }
            return create_number;
        }
    });
})();