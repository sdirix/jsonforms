'use strict';

require('./examples-menu.directive');

function examplesRouting($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/examples');

    $stateProvider.state('examples', {
        url: '/examples',
        template: require('../../partials/examples.html'),
        controllerAs: 'vm',
        resolve: {
            loadExamplesController: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
                var deferred = $q.defer();
                require.ensure([], function () {
                    // load examples module and all its dependencies
                    var module = require('./examples.module');
                    $ocLazyLoad.load([{ name: 'jsonforms-examples' },
                        { name: 'jsonforms-examples.arrayscontroller' },
                        { name: 'jsonforms-examples.asynccontroller' },
                        { name: 'jsonforms-examples.categoriescontroller' },
                        { name: 'jsonforms-examples.customcontroller' },
                        { name: 'jsonforms-examples.customcontrol' },
                        { name: 'jsonforms-examples.generateschemacontroller' },
                        { name: 'jsonforms-examples.generateuicontroller' },
                        { name: 'jsonforms-examples.layoutscontroller' },
                        { name: 'jsonforms-examples.liveeditcontroller' },
                        { name: 'jsonforms-examples.masterdetailcontroller' },
                        { name: 'jsonforms-examples.personcontroller' },
                        { name: 'jsonforms-examples.remoterefcontroller' },
                        { name: 'jsonforms-examples.rulecontroller' }]);
                    deferred.resolve();
                });
                return deferred.promise;
            }]
        }
    }).state('examples.person', {
            url: '/person',
            template: require('../../partials/examples/person.html'),
            controller: 'PersonController',
            controllerAs: 'vm'
        })
        .state('examples.async', {
            url: '/async',
            template: require('../../partials/examples/async.html'),
            controller: 'AsyncController',
            controllerAs: 'vm'
        })
        .state('examples.arrays', {
            url: '/arrays',
            template: require('../../partials/examples/arrays.html'),
            controller: 'ArraysController as vm',
            controllerAs: 'vm'
        })
        .state('examples.remote-ref', {
            url: '/remote-ref',
            template: require('../../partials/examples/remote-ref.html'),
            controller: 'RemoteRefController',
            controllerAs: 'vm'
        })
        .state('examples.categories', {
            url: '/categories',
            template: require('../../partials/examples/categories.html'),
            controller: 'CategoriesController',
            controllerAs: 'vm'
        })
        .state('examples.masterdetail', {
            url: '/masterdetail',
            template: require('../../partials/examples/masterdetail.html'),
            controller: 'MasterDetailController',
            controllerAs: 'vm'
        })
        .state('examples.rule', {
            url: '/rule',
            template: require('../../partials/examples/rule.html'),
            controller: 'RuleController',
            controllerAs: 'vm'
        })
        .state('examples.layouts', {
            url: '/layouts',
            template: require('../../partials/examples/layouts.html'),
            controller: 'LayoutsController',
            controllerAs: 'vm'
        })
        .state('examples.live-edit', {
            url: '/live-edit',
            template: require('../../partials/examples/live-edit.html'),
            controller: 'LiveEditController',
            controllerAs: 'vm'
        })
        .state('examples.generate-ui', {
            url: '/generate-ui',
            template: require('../../partials/examples/generate-ui.html'),
            controller: 'GenerateUiSchemaController',
            controllerAs: 'vm'
        })
        .state('examples.generate-schema', {
            url: '/generate-schema',
            template: require('../../partials/examples/generate-schema.html'),
            controller: 'GenerateSchemaController',
            controllerAs: 'vm'
        })
        .state('examples.custom-control', {
            url: '/custom-control',
            template: require('../../partials/examples/custom-control.html'),
            controller: 'CustomControlController',
            controllerAs: 'vm'
        });
}

angular.module('jsonforms-examples.routing', ['jsonforms-examples.menudirective']).config(examplesRouting);
