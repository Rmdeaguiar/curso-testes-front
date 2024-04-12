describe('Tests the SignUp page', () => {

  it('should go to Login page when clicks on "Já tem cadastro?"', () => {
    cy.visit('/sign-up');

    cy.contains('Já tem cadastro? Clique aqui!').click();
    cy.contains('Login');
  })

  it('button should have 10px of margin-top', () => {
    cy.visit('/sign-up');

    cy.get('div').find('button').should('have.css', 'marginTop').and('match', /10px/)
  })

})