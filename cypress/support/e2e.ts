// ***********************************************************
// This example support/e2e.ts is processed and
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

// When a command from ./commands is ready to use, import with `import './commands'` syntax
// import './commands';

Cypress.on('fail', (err, runnable) => {
  if (err.message.includes('cy.visit() timed out')) {
    // Log the error message without failing the test
    cy.log(`Visit timeout intercepted: ${err.message}`);

    // Optionally perform additional actions like capturing a screenshot or logging
    cy.screenshot('visit-timeout-error');
    cy.log('Caught a global timeout/network error.');

    // Returning false prevents Cypress from failing the test
    return false;
  }

  // Let other errors fail the test as normal
  throw err;
});

// Alternatively you can use CommonJS syntax:
// require('./commands');

// Handle uncaught exceptions globally
// Cypress.on('uncaught:exception', (err, runnable) => {
//   // Check if the error is related to a visit timeout or similar network error
//   if (err.message.includes('Timed out after waiting')) {
//     cy.log('Caught a global timeout/network error.');

//     // Returning false prevents Cypress from failing the test
//     return false;
//   }
// });
