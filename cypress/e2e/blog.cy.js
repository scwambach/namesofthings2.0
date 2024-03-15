describe('Navigation', () => {
  it('should be accessible', () => {
    cy.visit('/blog')
    cy.injectAxe()
    cy.checkA11y()
  })
})
