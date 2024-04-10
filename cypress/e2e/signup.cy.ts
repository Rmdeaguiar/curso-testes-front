describe('Tests the SignUp page', () => {

    it('should go to Login page when clicks on "Já tem cadastro?"', () => {
      cy.visit('/sign-up');

      cy.contains('Já tem cadastro? Clique aqui!').click();
      cy.contains('Login');
    })
  
  })