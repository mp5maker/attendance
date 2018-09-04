(function(){
    "use strict";

    angular.module('attendance')
    .constant('tours', [
        {
            title: 'Heading',
            text: 'Your Website Name',
            attachTo: ".heading-shepherd bottom",
        },
        {
            title: "Brand Name",
            text: "Your brand logo",
            attachTo: ".brand-shepherd bottom",
        }
    ]);
})();