(function(){
    var modules = [
        'ngAnimate',
        'ngMessages',
        'ui.router',
    ];
    
    angular.module('attendance', modules);
})();

(function(){
    angular.module('attendance')
    .run(function($rootScope){
        $rootScope.languageSelected = 'bn';
    });
})();
(function(){
    angular.module('attendance')
    .directive('header', function(){
        return{
            restrict: "E",
            templateUrl: "app/templates/header.html"
        };
    });
})();
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
(function(){
    angular.module('attendance')
    .constant('language', 
        {
            "en": {
                "AGS_TEXTILES_LIMITED": "AGS Textiles Limited"
            },
            
            "bn": {
                "AGS_TEXTILES_LIMITED": "এজিএস টেক্সটাইল লিমিটেড"
            }
        }
    );
})();
