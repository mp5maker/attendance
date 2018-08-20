(function(){
    angular.module('attendance')
    .config(function($translateProvider){
        $translateProvider.translations('en', {
            "AGS_TEXTILES_LIMITED": "AGS Textiles Limited",
            "AGS_TEXTILES_ADDRESS": "Bashir Plaza, Bamoil Bazar, Sarulia Demra, Dhaka-1361 Dhaka, Bangladesh"
        });
        $translateProvider.translations('bn', {
            "AGS_TEXTILES_LIMITED": "এজিএস টেক্সটাইল লিমিটেড",
            "AGS_TEXTILES_ADDRESS": "বশির প্লাজা, বামুল বাজার, সারুলিয়া ডেমরা, ঢাকা -1661, ঢাকা, বাংলাদেশ"
        });
        $translateProvider.preferredLanguage('en');
        $translateProvider.useSanitizeValueStrategy('escape');
    });
})();