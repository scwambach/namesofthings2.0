describe('Navigation', () => {
  it('should be accessible', () => {
    cy.visit('/team')
    cy.injectAxe()
    cy.checkA11y()
  })
})
