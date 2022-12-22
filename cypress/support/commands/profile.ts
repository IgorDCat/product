
export const updateProfile = (firstName: string, lastName: string) => {
    cy.getByTestId('EditableProfileCardHeader.EditButton').click();
    cy.getByTestId('ProfileCard.firstname').clear().type(firstName);
    cy.getByTestId('ProfileCard.lastname').clear().type(lastName);
    cy.getByTestId('EditableProfileCardHeader.SaveButton').click();
}

export const resetProfile = (profileId: string) => {
    cy.request({
        method: 'PUT',
        url: 'http://localhost:8000/profile/' + profileId,
        headers: {Authorization: '122343'},
        body: {
            id: '4',
            firstname: 'Test',
            lastname: 'User',
            age: 123,
            currency: 'USD',
            city: 'NY',
            username: 'testuser',
            avatar: 'https://cs8.pikabu.ru/avatars/2353/x2353828-1043405994.png',
            country: 'USA'
        }
    });
}

declare global {
    namespace Cypress {
        interface Chainable {
            updateProfile(firstName: string, lastName: string): Chainable<void>;
            resetProfile(profileId: string): Chainable<void>;
        }
    }
}