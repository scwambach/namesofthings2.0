describe('Navigation', () => {
  it('should be accessible', () => {
    cy.visit('/contact')
    cy.injectAxe()
    cy.checkA11y()
  })
})
