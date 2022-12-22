import {resetProfile} from '../../support/commands/profile';

let profileId: string

describe('profile page', () => {
    beforeEach(() => {
        cy.visit('');
        cy.login().then((data) => {
            cy.visit(`/profile/${data.id}`);
            profileId = data.id
        });
    });
    afterEach(() => {
        resetProfile(profileId);
    })
    it('success profile loading', () => {
        cy.getByTestId('ProfileCard.firstname').should('have.value', 'Test');
        cy.getByTestId('ProfileCard.lastname').should('have.value', 'User');
    });
    it('update profile ', () => {
        const firstName = 'newFirstname';
        const lastName = 'newLastname';
        cy.updateProfile(firstName, lastName);
        cy.getByTestId('ProfileCard.firstname').should('have.value', firstName);
        cy.getByTestId('ProfileCard.lastname').should('have.value', lastName);
    });
});