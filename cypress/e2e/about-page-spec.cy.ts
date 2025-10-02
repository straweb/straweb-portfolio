describe('About Page content Validation', () => {
  it('should verify the about page content', () => {
    // Visit the desired URL
    cy.visit('/about');
    cy.get('p').contains('about');
    cy.task('log','Cypress about page validated successfully!');
    // Get the page title and assert its value
    // cy.title().should('eq', 'StraWeb');
  });
});

describe('About Page First Test', () => {
  it('Visits the about page validate title', () => {
    cy.visit('/about')
    cy.title().should('eq', 'Thulasiram Seelamsetty - CV Resume Freelance Portfolio')
    cy.task('log','Cypress about page title validated successfully!');
  })
})
