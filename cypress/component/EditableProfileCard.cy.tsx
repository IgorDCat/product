import {EditableProfileCard} from '@/features/EditableProfileCard';
import {TestProvider} from '@/shared/lib/tests/componentRender/ComponentRender';

const userId = '4'

describe('EditableProfileCard.cy.ts', () => {
    it('playground', () => {
        cy.intercept('GET', '**/profile/*', {fixture: 'profile.json'})
        cy.mount(
            <TestProvider options={{
                initialState: {
                    user: {
                        authData: {
                            id: userId
                        }
                    }
                }
            }}>
                <EditableProfileCard id={userId}/>
            </TestProvider>
        )
    });
});