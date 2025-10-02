// ***********************************************
// This example namespace declaration will help
// with Intellisense and code completion in your
// IDE or Text Editor.
// ***********************************************
// declare namespace Cypress {
//   interface Chainable<Subject = any> {
//     customCommand(param: any): typeof customCommand;
//   }
// }
//
// function customCommand(param: any): void {
//   console.warn(param);
// }
//
// NOTE: You can use it like so:
// Cypress.Commands.add('customCommand', customCommand);
//
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

// Cypress.Commands.add("printLog", (message) => { cy.task("log", {message}); })

// cypress/support/commands.ts
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       /**
//        * Custom command to conditionally skip tests.
//        * @example cy.skipIf(Cypress.browser.name === 'firefox')
//        */
//       skipIf(condition: boolean): Chainable<any>;
//     }
//   }
// }

// Cypress.Commands.add('skipIf', (condition: boolean) => {
//   if (condition) {
//     // Use the Mocha context to skip the current test
//     // This requires the function to be a non-arrow function to access `this`.
//     cy.currentTest.skip();
//   }
// });
// // In your spec file (e.g., cypress/e2e/my-spec.cy.ts)
// describe('Test with custom skip command', () => {
//   it('should skip if browser is Chrome', function () {
//     cy.skipIf(Cypress.browser.name === 'chrome');
//     // Test code here
//     cy.log('This test is running only if not Chrome.');
//   });
// });
