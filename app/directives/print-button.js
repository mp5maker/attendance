(function () {
    'use strict';

    angular.module('attendance')
        .directive('printButton', function ($window) {
            return {
                restrict: "E",
                templateUrl: "app/templates/utilities/print-button.html",
                link: function(scope, element, attributes){
                    if(attributes.color){
                        scope.color = attributes.color;
                    }else{
                        scope.color = "primary";
                    }
                    scope.printNow = function(){
                        var printSections = document.getElementsByClassName('print-section');
                        var contents = '';
                        for(var i = 0; i < printSections.length; i++){
                            contents += printSections[i].innerHTML;
                        }
                        var popUp = window.open('', '_blank');
                        popUp.document.open();
                        popUp.document.write(`<html>
                                                    <head>
                                                        <link rel="stylesheet" type="text/css" href="assets/main.css"/>
                                                    </head>
                                                    <body onload="window.print()">
                                                        ${contents}
                                                    </body>
                                                </html>`);
                        popUp.document.close();
                    }
                }
            };
        });
})();
