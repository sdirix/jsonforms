'use strict';

require('./arrays.controller');
require('./async.controller');
require('./categories.controller');
require('./custom.controller');
require('./custom.jsf');
require('./generate-schema.controller');
require('./generate-ui.controller');
require('./layouts.controller');
require('./live-edit.controller');
require('./masterdetail.controller');
require('./person.controller');
require('./remote-ref.controller');
require('./rule.controller');

angular.module('jsonforms-examples', [
    /*
    'jsonforms.examples.arrayscontroller',
    'jsonforms-examples.asynccontroller',
    'jsonforms.examples.categoriescontroller',
    'jsonforms-examples.customcontroller',
    'jsonforms-examples.customcontrol',
    'jsonforms-examples.generateschemacontroller',
    'jsonforms-examples.generatecontroller',
    'jsonforms-examples.layoutscontroller',
    'jsonforms-examples.liveeditcontroller',
    'jsonforms-examples.masterdetailcontroller',
    'jsonforms-examples.personcontroller',
    'jsonforms-examples.remoterefcontroller',
    'jsonforms-examples.rulecontroller'
    */
]);

