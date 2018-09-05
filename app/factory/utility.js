(function(){
    "use strict"
    angular.module('attendance')
    .factory('utilityFactory', function(){
        return {
            destructure: function(fields, obj = {}){
                const [first, ...remainings] = fields.split(".");
                return (remainings.length) ? 
                        destructure(remainings.join("."), obj[first]) : 
                        obj[first];
            }
        }
    })
})();