// This file is an entry point for angular tests
// Avoids some weird issues when using webpack + angular.

import 'angular';
import 'angular-mocks/angular-mocks';
import 'jasmine-expect'

var testsContext = require.context(".", true, /.[sS]pec$/);
testsContext.keys().forEach(testsContext);
