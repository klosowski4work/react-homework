const root = 'http://localhost:8080';

describe('Search page', () => {
    it('.should - assert that <title> is correct', () => {
        cy.visit(root);
        cy.title().should('include', 'React epam course');
    });

    context('SearchPage elements', () => {
        beforeEach(() => {
            cy.visit(root);
        })
        it('SortBy DOM elements', () => {
            cy.get('.sort-by > :nth-child(2)')
                .should('have.class', 'button-link')
                .should('contain', 'release date')
            cy.get('.sort-by > :nth-child(3)')
                .should('have.class', 'button-link')
                .should('contain', 'rating')
        })
        it('SearchBar DOM elements', () => {
            cy.get('.search-movie__buttons-left-side > :nth-child(2)')
                .should('have.class', 'button')
                .should('contain', 'TITLE')
            cy.get('.search-movie__buttons-left-side > :nth-child(3)')
                .should('have.class', 'button')
                .should('contain', 'GENRE')
        })
        it('should change search by clicking on button', () => {
            cy.get('.search-movie__buttons-left-side > :nth-child(3)')
                .should('have.class', 'button--grey')
            cy.get('.search-movie__buttons-left-side > :nth-child(3)').click()
            cy.get('.search-movie__buttons-left-side > :nth-child(3)')
                .should('not.have.class', 'button--grey')
        })
        it('should type text into search input', () => {
            cy.get('.search-field__input').type('Star Wars')
            cy.get('.search-field__input').should('have.value', 'Star Wars');
        })
    });
})