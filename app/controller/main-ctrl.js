(function(){
    "use strict";
    
    angular.module('attendance')
        .controller('mainCtrl', function ($scope, excelFactory, $timeout){
            $scope.theme = 'dark';
            $scope.language = 'en';
            $scope.logoSrc = "app/images/logo/logo.png";
            $scope.sidebarHide = false;

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
            };

            $scope.sidebarToggle = function(){
                if($scope.sidebarHide){
                    //If the sidebar is hidden
                    var wrapper_content = angular.element(document.getElementById('wrapper-content-id'));
                    wrapper_content[0].classList.add('col');
                    wrapper_content[0].classList.remove('col-md-11');
                }else{
                    //If the sidebar shows
                    var wrapper_content = angular.element(document.getElementById('wrapper-content-id'));
                    wrapper_content[0].classList.add('col-md-11');
                    wrapper_content[0].classList.remove('col');
                }
            };
            
            // Get Table ID for the excel export
            $scope.$on('tableId', function(event, data){
                $scope.tableId = data;
            });

            // Get the Worksheet name
            $scope.$on('worksheetName', function(event, data){
                $scope.worksheetName = data;
            });

            // Get the Current page name
            $scope.$on('currentPageName', function(event, data){
                $scope.currentPageName = data;
            });
    });
})();