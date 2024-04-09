describe('Tests the Dashboard page', () => {

    it('should load a list with 3 pokemons', () => {
        cy.visit('/dashboard');

        cy.intercept('GET', 'http://localhost:3000/pokemon', {
            fixture: 'pokemons.json'
        })

        cy.contains("Pikachu")
        cy.contains("Rotom")
        cy.contains("Charmander")
    })

    it('should open a detail page when click on a Pokemon', () => {
        cy.visit('/dashboard');

        cy.intercept('GET', 'http://localhost:3000/pokemon', {
            fixture: 'pokemons.json'
        })
        cy.intercept('GET', 'http://localhost:3000/pokemon/1', {
            fixture: 'pokemon-detail.json'
        })

        cy.contains("Pikachu").click();
        cy.contains("Voltar");
    })

    it('should open a detail page when click on a Pokemon, and then back to list of pokemons when click on Voltar', () => {
        cy.visit('/dashboard');

        cy.intercept('GET', 'http://localhost:3000/pokemon', {
            fixture: 'pokemons.json'
        })
        cy.intercept('GET', 'http://localhost:3000/pokemon/1', {
            fixture: 'pokemon-detail.json'
        })

        cy.contains("Pikachu").click();
        cy.contains("Voltar").click();

        cy.contains("Pikachu")
        cy.contains("Rotom")
        cy.contains("Charmander")
    })
})