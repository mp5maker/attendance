(function(){   
    "use strict";

    angular.module('attendance')
    .filter('numberTranslate', function($translate){
        return function(number, language_key){
            var languageTable;
            if(language_key){
                languageTable = $translate.getTranslationTable(language_key);
            }else{
                languageTable = $translate.getTranslationTable('en');
            }
            var create_number = "";
            for(var i = 0; i < number.length; i++){
                create_number += languageTable[number[i]];
            }
            return create_number;
        }
    });
})();