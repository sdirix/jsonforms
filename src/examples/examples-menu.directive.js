'use strict';

angular.module('jsonforms-examples.menudirective',[])
.directive('examplesMenu', ['$location', function($location) {
    return {
        restrict: 'E',
        template: require('../../partials/examples/examples_menu.html'),
        link: function (scope) {
            scope.showDocsNav = false;
            scope.toggleDocsMenu = function () {
                scope.showDocsNav = !scope.showDocsNav;
            };
            scope.hideDocsMenu = function () {
                scope.showDocsNav = false;
            };
            scope.isSelected=function(selected) {
                return $location.absUrl().endsWith(selected);
            };
        }
    };
}]);