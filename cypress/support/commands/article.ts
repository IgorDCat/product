import {Article} from '../../../src/entities/Article';

const defaultArticle = {
    title: 'TESTING ARTICLE',
    subtitle: 'Testing article description',
    img: 'https://teknotower.com/wp-content/uploads/2020/11/js.png',
    views: 1022,
    createdAt: '26.02.2022',
    userId: '1',
    type: [
        'IT'
    ],
    blocks: []
}

export const createArticle = (article?: Article) => {
    cy.request({
        method: 'POST',
        url: 'http://localhost:8000/articles',
        headers: {Authorization: '122343'},
        body: article ?? defaultArticle
    }).then((resp) => resp.body);
}

export const removeArticle = (articleId: string) => {
    cy.request({
        method: 'DELETE',
        url: 'http://localhost:8000/articles/' + articleId,
        headers: {Authorization: '122343'},
    });
}

declare global {
    namespace Cypress {
        interface Chainable {
            createArticle(article?: Article): Chainable<Article>;
            removeArticle(articleId: string): Chainable<void>;
        }
    }
}