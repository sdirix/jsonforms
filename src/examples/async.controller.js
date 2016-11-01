'use strict';

angular.module('jsonforms-examples.asynccontroller',[])
    .controller('AsyncController', ['$q', function($q) {

        var vm = this;

        var dataDefer = $q.defer();
        var uiSchemaDefer = $q.defer();
        var schemaDefer = $q.defer();

        vm.dataAsync = dataDefer.promise;
        vm.UIAsync = uiSchemaDefer.promise;
        vm.schemaAsync = schemaDefer.promise;

        vm.dataLoaded= false;
        vm.schemaLoaded= false;
        vm.uiSchemaLoaded= false;

        vm.data = data;
        vm.uischema = uischema;
        vm.schema = schema;

        vm.loaded = function() {
            return vm.dataLoaded && vm.schemaLoaded && vm.uiSchemaLoaded;
        };

        vm.loadDataAsyncFun = function () {
            return $q.when(vm.data);
        };

        vm.loadSchemaAsyncFun = function () {
            return $q.when(vm.schema);
        };

        vm.loadUiSchemaAsyncFun = function () {
            return $q.when(vm.uischema);
        };

        vm.loadData = function(){
            vm.dataLoaded = true;
            dataDefer.resolve(data);
        };

        vm.loadUI = function(){
            vm.uiSchemaLoaded = true;
            uiSchemaDefer.resolve(uischema);
        };

        vm.loadSchema = function(){
            vm.schemaLoaded = true;
            schemaDefer.resolve(schema);
        };

        vm.formattedData = function() {
            return JSON.stringify(vm.users, null, 4);
        };

        vm.loadDataFunc = function(){
            return data;
        };

        vm.loadUIFunc = function(){
            return uischema;
        };

        vm.loadSchemaFunc = function(){
            return schema;
        };

    }]);


var data = {
    name: 'John Doe',
    vegetarian: false,
    birthDate: "1985-06-02"
};

var schema = {
    "type": "object",
    "properties": {
        "id": "user.json",
        "name": {
            "type": "string",
            "minLength": 3
        },
        "personalData": {
            "type": "object",
            "properties": {
                "age": {
                    "type": "integer"
                },
                "height": {
                    "type": "number"
                }
            },
            "required": ["age", "height"]
        },
        "vegetarian": {
            "type": "boolean"
        },
        "birthDate": {
            "type": "string",
            "format": "date-time"
        },
        "nationality": {
            "type": "string",
            "enum": ["DE", "IT", "JP", "US", "RU", "Other"]
        },
        "occupation": {
            "type": "string"
        },
        /* FIXME: disabling arrays for primitive types */
        /*"test_wrong": {
         "type": "array",
         "items": {"type":"string"}
         },*/
        "hobbies": {
            "type": "array",
            "items": {"type":"object","properties": {"name": {"type": "string"}}}
        }
    },
    "required": ["occupation", "nationality"]
};

var uischema = {
    "type": "VerticalLayout",
    "elements": [
        {
            "type": "VerticalLayout",
            "elements": [
            ],
            "rule":{
                "effect":"HIDE",
                "condition":{
                    "type":"LEAF" ,
                    "scope": {
                        "$ref": "#/properties/personalData/properties/age"
                    },
                    "expectedValue":36
                }
            }
        },
        {
            "type": "HorizontalLayout",
            "elements": [
                {
                    "type": "Control",
                    "label": {
                        "text": "Name",
                        "show": true
                    },
                    "scope": {
                        "$ref": "#/properties/name"
                    },
                    "rule":{
                        "effect":"HIDE",
                        "condition":{
                            "type":"LEAF" ,
                            "scope": {
                                "$ref": "#/properties/personalData/properties/age"
                            },
                            "expectedValue":36
                        }
                    }
                },
                {
                    "type": "Control",
                    "label": {
                        "text": "Age"
                    },
                    "scope": {
                        "$ref": "#/properties/personalData/properties/age"
                    }
                },
                {
                    "type": "Control",
                    "label": "Height",
                    "scope": {
                        "$ref": "#/properties/personalData/properties/height"
                    }
                }
            ]
        },
        {
            "type": "HorizontalLayout",
            "elements": [
                {
                    "type": "Control",
                    "label": "Vegetarian",
                    "scope": {
                        "$ref": "#/properties/vegetarian"
                    }
                },
                {
                    "type": "Control",
                    "label": "Nationality",
                    "scope": {
                        "$ref": "#/properties/nationality"
                    }
                },
                {
                    "type": "Control",
                    "label": "Birthday",
                    "scope": {
                        "$ref": "#/properties/birthDate"
                    }
                }
            ]
        }
    ]
};