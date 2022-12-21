import {selectByTestId} from '../../helpers/selectByTestId';

describe('Routing', () => {
    describe('user unauthorized', () => {
        it('open main page', () => {
            cy.visit('/');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('open profile page', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('MainPage')).should('exist');
        });
        it('open non-existent route', () => {
            cy.visit('/asdfsdfsd');
            cy.get(selectByTestId('NotFoundPage')).should('exist');
        });
    });
    describe('user authorized', () => {
        beforeEach(() => {
            cy.login('admin', '123');
        })
        it('open main page', () => {
            cy.visit('/profile/1');
            cy.get(selectByTestId('ProfilePage')).should('exist');
        });
        it('open articles page', () => {
            cy.visit('/articles');
            cy.get(selectByTestId('ArticlesPage')).should('exist');
        });
    });
});