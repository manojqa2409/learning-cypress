// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

//import '@applitools/eyes-cypress/commands'


// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')
//require('@cypress/xpath');
require('cypress-xpath')
import 'cypress-mochawesome-reporter/register';
//import '@testing-library/cypress/add-commands';
//import 'cypress-if';

//require('@applitools/eyes-cypress')(module);
//require('cypress-terminal-report/src/installLogsPrinter')(on);
//require('cypress-terminal-report/src/installLogsCollector')(on);

///<reference types="cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {
    return false; // Handle uncaught exception
})

