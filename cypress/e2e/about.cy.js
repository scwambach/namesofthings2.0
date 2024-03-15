describe('Navigation', () => {
  it('should be accessible', () => {
    cy.visit('/about')
    cy.injectAxe()
    cy.checkA11y()
  })
})
