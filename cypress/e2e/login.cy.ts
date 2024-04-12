describe('Tests the Login page', () => {

  it('should go to Dashboard page when clicks on login', () => {
    cy.visit('/');

    cy.intercept('GET', 'http://localhost:3000/pokemon', {
      fixture: 'pokemons.json'
    })

    cy.get('div').find('button').should(($button) => {
      expect($button).to.have.length(2);
      $button[0].click();
    }).then(() => {
      cy.contains("Dashboard");
    })
  })

  it('should go to Dashboard page when clicks on login and appear the Pikachu', () => {
    cy.visit('/');

    cy.intercept('GET', 'http://localhost:3000/pokemon', {
      fixture: 'pokemons.json'
    })

    cy.contains('Login').click();
    cy.contains('Dashboard');
    cy.contains('Pikachu');
  })

  it('should go to SignUp page when clicks on Cadastro', () => {
    cy.visit('/');
    cy.contains('Não tem cadastro? Clique aqui!').click();
    cy.contains('Cadastre-se');
  })

  it('button should have 10px of margin-top', () => {
    cy.visit('/sign-up');

    cy.get('div').find('button').should('have.css', 'marginTop').and('match', /10px/)
  })
})