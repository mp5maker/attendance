(function(){
    "use strict";
    
    angular.module('attendance')
        .controller('mainCtrl', function ($scope, excelFactory, $timeout){
            $scope.theme = 'dark';
            $scope.language = 'en';
            $scope.logoSrc = "app/images/logo/logo.png";

            $scope.$on('themeChanged', function($event, message){
                $scope.theme = message;
            });

            $scope.$on('languageChanged', function($event, message){
                $scope.language = message;
            });

            $scope.exportToExcel = function (tableId, sheetName) { 
                var exportHref = excelFactory.tableToExcel(tableId, sheetName);
                $timeout(function () { 
                    var a = document.createElement('a');
                    a.href = exportHref;
                    a.download = `${sheetName}.xls`;
                    document.body.appendChild(a);
                    a.click();
                    a.remove();
                }, 100);  
            }
    });
})();