(function(){
    angular.module('attendance')
    .config(function($translateProvider){
        $translateProvider.translations('en', {
            "AGS_TEXTILES_LIMITED": "AGS Textiles Limited",
            "AGS_TEXTILES_ADDRESS": "Bashir Plaza, Bamoil Bazar, Sarulia Demra, Dhaka-1361 Dhaka, Bangladesh",
            "HOME": "Home",
            "TOTAL_SALARY": "Total Salary",
            "MANAGEMENT": "Management",
            "ADMIN_STAFF": "Admin Staff",
            "PRODUCTION_STAFF": "Production Staff",
            "SEWING_OPERATOR": "Sewing Operator",
            "SEWING_HELPER": "Sewing Helper",
            "CUTTING": "Cutting",
            "QUALITY": "Quality",
            "FINISHING": "Finishing",
            "LOADER_CLEANER": "Loader Cleaner",
            "ENGLISH": "English",
            "BENGALI": "Bengali",
            "EN": "EN",
            "BN": "BN",
            "DARK": "Dark",
            "LIGHT": "Light",
            "SETTINGS": "Settings",
            "ATTENDANCE": "Attendance",
        });
        $translateProvider.translations('bn', {
            "AGS_TEXTILES_LIMITED": "এজিএস টেক্সটাইল লিমিটেড",
            "AGS_TEXTILES_ADDRESS": "বশির প্লাজা, বামুল বাজার, সারুলিয়া ডেমরা, ঢাকা -1661, ঢাকা, বাংলাদেশ",
            "HOME": "নিবাস",
            "TOTAL_SALARY": "মোট বেতন",
            "MANAGEMENT": "ম্যানেজমেন্ট",
            "ADMIN_STAFF": "প্রশাসন কর্মচারীবৃন্দ",
            "PRODUCTION_STAFF": "উৎপাদন স্টাফ",
            "SEWING_OPERATOR": "সেলাই অপারেটর",
            "SEWING_HELPER": "সেলাই সাহায্যকারী",
            "CUTTING": "কাটা",
            "QUALITY": "গুণ",
            "FINISHING": "সম্পূর্ণতা",
            "LOADER_CLEANER": "লোডার ক্লিনার",
            "ENGLISH": "ইংরেজি",
            "BENGALI": "বাংলা",
            "DARK": "অন্ধকার",
            "LIGHT": "হালকা",
            "EN": "EN",
            "BN": "BN",
            "SETTINGS": "সেটিংস",
            "ATTENDANCE": "উপস্থিতি",
        });
        $translateProvider.preferredLanguage('en');
        $translateProvider.useSanitizeValueStrategy('escape');
    });
})();