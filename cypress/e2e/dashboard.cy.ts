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

    it('should open a detail page when click on a Pokemon, and then back to list of pokemons when click on Voltar', () => {
        cy.visit('/dashboard');

        cy.intercept('GET', 'http://localhost:3000/pokemon', {
            fixture: 'pokemons.json'
        })
        cy.intercept('GET', 'http://localhost:3000/pokemon/1', {
            fixture: 'pokemon-detail.json'
        })

        cy.get('div').find('ul').should('have.css', 'display').and('match', /grid/)
    })


    it('should have 3 pokemons on screen with li s', () => {
        cy.visit('/dashboard');

        cy.intercept('GET', 'http://localhost:3000/pokemon', {
            fixture: 'pokemons.json'
        })

        cy.get('div').find('li').should(($li) => {
            expect($li).to.have.length(3);

            const pikachu = $li[0];
            const rotom = $li[1];
            const charmander = $li[2];

            expect(pikachu.textContent).to.contain('Pikachu');
            expect(rotom.textContent).to.contain('Rotom');
            expect(charmander.textContent).to.contain('Charmander');
        })
    })
})