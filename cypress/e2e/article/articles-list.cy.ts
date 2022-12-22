describe('User visits articles page', () => {
    beforeEach(() => {
        cy.login().then(() => {
            cy.visit('articles');
        });
    });
    it.skip('articles are loading successfully', () => {
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 2);
    });
    it('articles are loading (fixtures)', () => {
        cy.intercept('GET', 'http://localhost:8000/articles?*', {fixture: 'articles.json'})
        cy.getByTestId('ArticleList').should('exist');
        cy.getByTestId('ArticleListItem').should('have.length.greaterThan', 2);
    });
});