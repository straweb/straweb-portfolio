it('should handle a visit timeout gracefully', () => {
  cy.on('fail', (error, runnable) => {
    if (error.message.includes('cy.visit() timed out')) {
      cy.task('log','Cypress caught a visit timeout error!');
      // You can add more custom handling here, like asserting that
      // the error message is what you expect.
      expect(error.message).to.include('timed out');

      // Returning false prevents the test from failing
      // due to the timeout.
      return false;
    }
    // Let other errors fail the test as normal
    throw error;
  });

  cy.visit('/', {
    timeout: 15000, // Custom timeout for this specific visit
    failOnStatusCode: false // Prevents failure on bad status codes (e.g., 500 or 404)
  });

  // Continue with the test if you expect a timeout, or simply end the test.
  // For example, you could assert that the page did not load as expected.
});
