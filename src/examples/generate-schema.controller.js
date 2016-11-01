'use strict';

angular.module('jsonforms-examples.generateschemacontroller',[])
    .controller('GenerateSchemaController', function() {

        var vm = this;

        vm.schema = undefined;
        vm.uiSchema = undefined;
        vm.data = {
            name: 'John Doe',
            age: 36
        };
        vm.users = [
            vm.data,
            {
                name: 'Todd',
                age: 33
            },
            {
                name: 'Jimmy',
                age: 34
            }
        ];

        vm.formattedData = function() {
            return JSON.stringify(vm.data, null, 4);
        };
    });