import {removeArticle} from '../../support/commands/article';

let currentArticleId: string

describe('User visits article details page', () => {
    beforeEach(() => {
        cy.login();
        cy.createArticle().then((article) => {
            currentArticleId = article.id;
            cy.visit('articles/' + article.id);
        })
    });
    afterEach(() => {
        removeArticle(currentArticleId)
    })
    it.skip('article loaded successfully', () => {
        cy.getByTestId('ArticleDetails.info').should('exist');
    });
    it.skip('article recommendations loaded successfully', () => {
        cy.getByTestId('ArticleRecommendationsList').should('exist');
    });
    it.skip('user writes a comment', () => {
        cy.getByTestId('ArticleDetails.info').should('exist');
        cy.getByTestId('AddCommentForm').should('exist').scrollIntoView();
        cy.addComment('text');
        cy.getByTestId('CommentCard.Content').should('have.length', 1)
    });
    it('user puts a rating', () => {
        cy.intercept('GET', 'http://localhost:5173/articles/*', {fixture: 'article-details.json'});
        cy.getByTestId('ArticleDetails.info').should('exist');
        cy.getByTestId('RatingCard').should('exist').scrollIntoView();
        cy.setRating(4, 'feedback');
        cy.get('[data-selected=true]').should('have.length', 4);
    });
});