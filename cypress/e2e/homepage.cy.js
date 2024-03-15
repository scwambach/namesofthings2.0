describe('Navigation', () => {
  it('should be accessible', () => {
    cy.visit('/')
    cy.injectAxe()
    cy.checkA11y()
  })
  it('should navigate to the about page', () => {
    // Start from the index page
    cy.visit('/')
    // look for the first of 3 button in the header and click it
    cy.get('button').first().click()
    // find the link that says "About Us" and click it
    cy.get('a').contains('About Us').click()
    // wait for the about page to be loaded
    cy.url().should('include', '/about')
    // there should be an h1 that says "About Us"
    cy.get('h1').contains('About Us')
  })
})
