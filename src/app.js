'use strict';

var StaticData = {};
StaticData.data = {};
StaticData.dataSchema = {
    "type": "object",
    "properties": {
        "firstName": {
            "type": "string"
        },
        "lastName": {
            "type": "string"
        },
        "gender": {
            "type": "string",
            "enum": [
                "Male",
                "Female",
                "Other"
            ]
        },
        "active": {
            "type": "boolean"
        },
        "dateOfBirth": {
            "type": "string",
            "format": "date-time"
        }
    }
};
StaticData.uiSchema = {
    "type": "VerticalLayout",
    "elements": [
        {
            "type": "HorizontalLayout",
            "elements": [
                {
                    "type": "Control",
                    "scope": {
                        "$ref": "#/properties/firstName"
                    }
                },
                {
                    "type": "Control",
                    "scope": {
                        "$ref": "#/properties/lastName"
                    }
                }
            ]
        },
        {
            "type": "Control",
            "scope": {
                "$ref": "#/properties/gender"
            }
        },
        {
            "type": "Control",
            "scope": {
                "$ref": "#/properties/dateOfBirth"
            }
        }
    ]
};

var DynamicData = {};
DynamicData.data = {};
DynamicData.dataSchema = {
    "type": "object",
    "properties": {
        "id": {
            "type": "string",
            "format": "objectId"
        },
        "lastName": {
            "type": "string"
        },
        "email": {
            "type": "string"
        },
        "firstName": {
            "type": "string"
        },
        "gender": {
            "type": "string",
            "enum": [
                "Male",
                "Female"
            ]
        },
        "active": {
            "type": "boolean"
        },
        "timeOfRegistration": {
            "type": "string",
            "format": "date-time"
        },
        "weight": {
            "type": "number"
        },
        "height": {
            "type": "integer"
        },
        "nationality": {
            "type": "string",
            "enum": [
                "German",
                "French",
                "UK",
                "US",
                "Spanish",
                "Italian",
                "Russian"
            ]
        },
        "dateOfBirth": {
            "type": "string",
            "format": "date-time"
        }
    },
    "additionalProperties": false,
    "required": [
        "id",
        "lastName",
        "email"
    ]
};
DynamicData.uiSchema = {
    "type": "VerticalLayout",
    "elements": [
        {
            "type": "HorizontalLayout",
            "elements": [
                {
                    "type": "VerticalLayout",
                    "elements": [
                        {
                            "type": "Control",
                            "scope": {
                                "$ref": "#/properties/firstName"
                            }
                        },
                        {
                            "type": "Control",
                            "scope": {
                                "$ref": "#/properties/lastName"
                            }
                        },
                        {
                            "type": "Control",
                            "scope": {
                                "$ref": "#/properties/dateOfBirth"
                            }
                        },
                        {
                            "type": "HorizontalLayout",
                            "elements": [
                                {
                                    "type": "Control",
                                    "scope": {
                                        "$ref": "#/properties/weight"
                                    }
                                },
                                {
                                    "type": "Control",
                                    "scope": {
                                        "$ref": "#/properties/height"
                                    }
                                },
                                {
                                    "type": "Control",
                                    "scope": {
                                        "$ref": "#/properties/nationality"
                                    }
                                }
                            ]
                        },
                        {
                            "type": "Control",
                            "scope": {
                                "$ref": "#/properties/gender"
                            }
                        }
                    ]
                },
                {
                    "type": "VerticalLayout",
                    "elements": [
                        {
                            "type": "Control",
                            "scope": {
                                "$ref": "#/properties/timeOfRegistration"
                            }
                        },
                        {
                            "type": "Control",
                            "scope": {
                                "$ref": "#/properties/email"
                            }
                        },
                        {
                            "type": "Control",
                            "scope": {
                                "$ref": "#/properties/active"
                            }
                        }
                    ]
                }
            ]
        }

    ]
};


// CSS
require('angular-material/angular-material.min.css');
require('prismjs/themes/prism.css');
require('../css/main.css');
require('../css/syntax.css');

// Libs

require('bootstrap');
require('jsonforms');
require('jsonforms/material/jsonforms-material');
require('angular-animate');
require('angular-aria');
require('angular-material');
require('angular-ui-bootstrap');
require('angular-ui-router');
require('angular-ui-ace');
require('prismjs');
require('prismjs/components/prism-typescript');

require('oclazyload');
require('./examples/jsonforms-examples.routing');

angular.module('jsonforms-website', [
    'ngAnimate',
    'ngAria',
    'ngMaterial',
    'ui.ace',
    'ui.bootstrap',
    'ui.router',
    'jsonforms',
    'jsonforms-material',
    'listing',
    'oc.lazyLoad',
    'jsonforms-examples.routing'
]).directive('mainMenu', function() {
    return {
        restrict: 'E',
        template: require('../partials/common/main_menu.html'),
        link: function (scope) {
            scope.showMainNav = false;
            scope.toggleMainMenu = function() {
                scope.showMainNav = !scope.showMainNav;
            };
            scope.hideMainMenu = function() {
                scope.showMainNav = false;
            };
        }
    };
}).directive('docsMenu', ['$location', function($location) {
    return {
        restrict: 'E',
        template: require('../partials/docs/docs_menu.html'),
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
}]).directive('supportPanel', function() {
    return {
        restrict: 'E',
        template: require('../partials/docs/support_panel.html')
    };
}).config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('/', {
                url: '/',
                template: require('../partials/landing.html'),
                controller: 'IndexController',
                controllerAs: 'vm'
            })
            .state('docs', {
                url: '/docs',
                template: require('../partials/docs.html')
            })
            .state('docs.landing', {
                url: '/landing',
                template: require('../partials/docs/landing.html')
            })
            .state('docs.introduction', {
                url: '/introduction',
                template: require('../_site/partials/docs/introduction.html')
            })
            .state('docs.jsonformseditor', {
                url: '/jsonformseditor',
                template: require('../_site/partials/docs/jsonformseditor.html')
            })
            .state('docs.setup', {
                url: '/setup',
                template: require('../_site/partials/docs/setup.html')
            })
            .state('docs.firstform', {
                url: '/firstform',
                template: require('../_site/partials/docs/firstform.html')
            })
            .state('docs.customrenderer', {
                url: '/customrenderer',
                template: require('../_site/partials/docs/customrenderer.html')
            })
            .state('docs.customrenderer-es5', {
                url: '/customrenderer-es5',
                template: require('../_site/partials/docs/customrenderer-es5.html')
            })
            .state('docs.customrenderer-es6', {
                url: '/customrenderer-es6',
                template: require('../_site/partials/docs/customrenderer-es6.html')
            })
            .state('docs.customrenderer-ts', {
                url: '/customrenderer-ts',
                template: require('../_site/partials/docs/customrenderer-ts.html')
            })
            .state('docs.uischema', {
                url: '/uischema',
                template: require('../_site/partials/docs/uischema.html')
            })
            .state('support', {
                url: '/support',
                template: require('../partials/support.html'),
                controller: 'SupportController',
                controllerAs: 'vm'
            })
            .state('imprint', {
                url: '/imprint',
                template: require('../partials/imprint.html')
            });
        $urlRouterProvider.otherwise('/');
    }
]).config(['$mdIconProvider', function($mdIconProvider) {
    // require('mdi/fonts/materialdesignicons-webfont.eot');
    $mdIconProvider.defaultIconSet(require('../css/mdi.svg'));
    $mdIconProvider.defaultViewBoxSize([152]);
}]).config(['$mdThemingProvider', function($mdThemingProvider) {
    $mdThemingProvider.definePalette('esPalette', {
        '50': '#ffffff',
        '100': '#e9f3fa',
        '200': '#bbd8f0',
        '300': '#80b7e4',
        '400': '#67a8de',
        '500': '#4e9ad9',
        '600': '#358cd4',
        '700': '#297cc0',
        '800': '#246ca7',
        '900': '#1f5c8e',
        'A100': '#ffffff',
        'A200': '#e9f3fa',
        'A400': '#67a8de',
        'A700': '#297cc0',
        'contrastDefaultColor': 'light',
        'contrastDarkColors': '50 100 200 300 400 500 A100 A200 A400'
    });
    $mdThemingProvider.definePalette('esPaletteDark', {
        '50': '#9bd0ff',
        '100': '#4facff',
        '200': '#1792ff',
        '300': '#006dce',
        '400': '#005db0',
        '500': '#004d91',
        '600': '#003d72',
        '700': '#002c54',
        '800': '#001c35',
        '900': '#000c17',
        'A100': '#9bd0ff',
        'A200': '#4facff',
        'A400': '#005db0',
        'A700': '#002c54',
        'contrastDefaultColor': 'light',
        'contrastDarkColors': '50 100 A100 A200'
    });
    $mdThemingProvider.theme('default').primaryPalette('esPaletteDark')
}]).controller('IndexController', ['$anchorScroll', '$location', function($anchorScroll, $location)  {
    var vm = this;
    vm.configAce = function(mode) {
        return {
            onLoad: function (editor) {
                editor.getSession().setMode("ace/mode/json");
                editor.$blockScrolling = Infinity;
                editor.getSession().setUseWorker(false);
                editor.setOptions({
                                        enableSnippets: false,
                                        enableBasicAutocompletion: true,
                                        enableLiveAutocompletion: true
                                        });

            }
        }
    };
    vm.scrollTo = function(id) {
        $location.hash(id);
        $anchorScroll();
    };
    vm.isSelected = function(selected) {
        //return selected==$location.path();
        return false;
    };

    vm.staticDataProvider = StaticData;
    vm.dynamicDataProvider = DynamicData;

    vm.localStaticModelObject=vm.staticDataProvider.dataSchema;
    vm.localStaticViewObject=vm.staticDataProvider.uiSchema;
    vm.localStaticModel = JSON.stringify(vm.localStaticModelObject, undefined, 2);
    vm.localStaticView = JSON.stringify(vm.localStaticViewObject, undefined, 2);

    vm.reparseStatic = function() {
        vm.localStaticModelObject = JSON.parse(vm.localStaticModel);
        vm.localStaticViewObject = JSON.parse(vm.localStaticView);
    };

    vm.localDynamicModelObject=vm.dynamicDataProvider.dataSchema;
    vm.localDynamicViewObject=vm.dynamicDataProvider.uiSchema;
    vm.localDynamicModel = JSON.stringify(vm.localDynamicModelObject, undefined, 2);
    vm.localDynamicView = JSON.stringify(vm.localDynamicViewObject, undefined, 2);

    vm.reparseDynamic = function() {
        vm.localDynamicModelObject = JSON.parse(vm.localDynamicModel);
        vm.localDynamicViewObject = JSON.parse(vm.localDynamicView);
    };
}])

// Our code
require('./listing/listing.directive');
require('./docs/uischema/uischema.controller');
require('./docs/customrenderer/rating.control');
require('./docs/customrenderer/rating.controller');
require('./docs/customrenderer/schema.value');
require('./docs/customrenderer/uischema.value');
require('./support/support.controller');

