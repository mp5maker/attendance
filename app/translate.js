(function(){
    "use strict";
    
    angular.module('attendance')
    .config(function($translateProvider){
        $translateProvider.translations('en', {
            "0": "0",
            "1": "1",
            "2": "2",
            "3": "3",
            "4": "4",
            "5": "5",
            "6": "6",
            "7": "7",
            "8": "8",
            "9": "9",
            ":": ":",
            "/": "/",
            ",": ",",
            ".": ".",
            "D": "D",
            "L": "L",
            "EN": "EN",
            "BN": "BN",
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
            "BRANCH": "Branch",
            "MONTH": "Month",
            "JANUARY": "January",
            "FEBRUARY": "February",
            "MARCH": "March",
            "APRIL": "April",
            "MAY": "May",
            "JUNE": "June",
            "JULY": "July",
            "AUGUST": "August",
            "SEPTEMBER": "September",
            "OCTOBER": "October",
            "NOVEMBER": "November",
            "DECEMBER": "December",
            "MONTH": "Month",
            "PRINT": "Print",
            "DATE": "Date",
            "YEAR": "Year",
            "MONEY": "Money",
            "DISTRIBUTION": "Distribution",
            "MONEY_DISTRIBUTION_SHEET": "Money Distribution Sheet",
            "MONEY_DISTRIBUTION": "Money Distribution",
            "WORKER_NO": "Worker No",
            "CARD_NO": "Card No",
            "NAME": "Name",
            "GRADE": "Grade",
            "JOINING": "Joining",
            "JOINING_DATE": "Joining Date",
            "ASSIGNED": "Assigned",
            "ATTENDANCE": "Attendance",
            "OVERTIME_HOURS": "Overtime Hours",
            "EXTENDED_HOLIDAYS": "Extended Holdays",
            "HOLIDAY": "Holiday",
            "DISTRIBUTION_TYPE": "Distribution Type",
            "OVERTIME_MONEY": "Overtime Money",
            "HAJIRA_BONUS": "Hajira Bonus",
            "TOTAL_DISTRIBUTED": "Total Distributed",
            "CUT_OUT": "Cut Out",
            "MONEY_RECEIVED": "Money Received",
            "SIGNATURE": "Signature",
            "PRESENT": "Present",
            "ABSENT": "Absent",
            "OTHERS": "Others",
            "DAYS" : "Days",
            "MAIN_SALARY": "Main Salary",
            "HOME_RENT": "Home Rent",
            "MEDICAL_COST": "Medical Cost",
            "TRANSPORT_COST": "Transport Cost",
            "FOOD": "Food",
            "COST": "Cost",
            "OTHER_COMPANY_FACILITIES": "Other Company Facilities",
            "TOTAL_SALARY": "Total Salary",
            "ADVANCED_OTHERS": "Advanced/Others",
            "REVENUE": "Revenue",
            "TOTAL": "Total",
            "SL_NO": "SL. No:",
            "SECTION": "Section",
            "PAYABLE": "Payable",
            "OVERTIME": "Overtime",
            "ATTENDANCE_BONUS": "Attendance Bonus",
            "TOTAL_HOURS": "Total Hours",
            "TOTAL_PERSONS": "Total Persons",
            "TRANSLATE": "Translate",
            "THEME": "Theme",
        });
        $translateProvider.translations('bn', {
            "0": "০",
            "1": "১",
            "2": "২",
            "3": "৩",
            "4": "4",
            "5": "৫",
            "6": "৬",
            "7": "৭",
            "8": "৮",
            "9": "৯",
            ":": ":",
            "/": "/",
            ",": ",",
            ".": ".",
            "D": "ডি",
            "L": "এল",
            "EN": "ই",
            "BN": "বি",
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
            "BRANCH": "শাখা",
            "MONTH": "মাস",
            "JANUARY": "জানুয়ারী",
            "FEBRUARY": "ফেব্রুয়ারী",
            "MARCH": "মার্চ",
            "APRIL": "এপ্রিল",
            "MAY": "মায়",
            "JUNE": "জুনে",
            "JULY": "জুলাই",
            "AUGUST": "অগাস্ট",
            "SEPTEMBER": "সেপ্টেম্বর",
            "OCTOBER": "অক্টোবর",
            "NOVEMBER": "নভেম্বর",
            "DECEMBER": "ডিসেম্বর",
            "PRINT": "প্রিন্ট",
            "DATE": "তারিক",
            "YEAR": "বছর",
            "MONEY": "টাকা",
            "DISTRIBUTION": "বিতরণ",
            "MONEY_DISTRIBUTION_SHEET": "বেতন প্রদান রশিদ",
            "MONEY_DISTRIBUTION": "নগদ প্রদান",
            "WORKER_NO": "কর্মী নং:",
            "CARD_NO": "কার্ড নং:",
            "NAME": "নাম",
            "GRADE": "শ্রেণী",
            "JOINING": "যোগদান",
            "JOINING_DATE": "যোগদান তারিখ",
            "ASSIGNED": "পদবি",
            "ATTENDANCE": "উপস্থিতি",
            "OVERTIME_HOURS": "অতিরিক্ত ঘন্টা",
            "EXTENDED_HOLIDAYS": "এক্সটেন্ডেড হলিডে",
            "HOLIDAY": "হলিডে",
            "DISTRIBUTION_TYPE": "প্রদানের ধরন",
            "OVERTIME_MONEY": "ওভারটাইম অর্থ",
            "HAJIRA_BONUS": "হাজিরার বোনাস",
            "TOTAL_DISTRIBUTED": "মট প্রদান",
            "CUT_OUT": "কাট আউট",
            "MONEY_RECEIVED": "প্রাপ্ত টাকা",
            "SIGNATURE": "সাক্ষর",
            "PRESENT": "ঊপস্থিত",
            "ABSENT": "অনুপস্থিত",
            "OTHERS": "অন্যান্য",
            "MAIN_SALARY": "প্রধান বেতন",
            "HOME_RENT": "বাড়ি ভাড়া",
            "MEDICAL_COST": "চিকিৎসা খরচ",
            "TRANSPORT_COST": "পরিবহন খরচ",
            "FOOD": "খাদ্য",
            "COST": "মূল্য",
            "OTHER_COMPANY_FACILITIES": "অন্যান্য কোম্পানি সুবিধাসমূহ",
            "TOTAL_SALARY": "মোট বেতন",
            "ADVANCED_OTHERS": "অগ্রিম অন্যান্য",
            "REVENUE": "রাজস্ব",
            "TOTAL": "মোট",
            "SL_NO": "ক্রমিক নং:",
            "SECTION": "বিভাগ",
            "PAYABLE": "প্রদেয়",
            "OVERTIME": "অধিকর্ম",
            "ATTENDANCE_BONUS": "উপস্থিতি বোনাস",
            "TOTAL_HOURS": "মোট ঘণ্টা",
            "TOTAL_PERSONS": "মোট মানুষ",
            "TRANSLATE": "অনুবাদ",
            "THEME": "থিম",
        });
        $translateProvider.preferredLanguage('en');
        $translateProvider.useSanitizeValueStrategy('escape');
    });
})();