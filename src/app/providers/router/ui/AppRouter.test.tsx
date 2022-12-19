import {ComponentRender} from '@/shared/lib/tests/componentRender/ComponentRender';
import AppRouter from './AppRouter';
import {getRouteAbout, getRouteAdmin, getRouteProfile} from '@/shared/const/router';
import {screen} from '@testing-library/react';

describe('app/router', () => {
    test('page should render', async () => {
        ComponentRender(<AppRouter/>, {
            route: getRouteAbout(),
        });

        const page = await screen.findByTestId('AboutPage');
        expect(page).toBeInTheDocument();
    });
    test('page not found', async () => {
        ComponentRender(<AppRouter/>, {
            route: '/hgjghgfc',
        });

        const notFoundPage = await screen.findByTestId('NotFoundPage');
        expect(notFoundPage).toBeInTheDocument();
    });
    test('redirect unauthorized user to main page', async () => {
        ComponentRender(<AppRouter/>, {
            route: getRouteProfile('1'),
        });

        const notFoundPage = await screen.findByTestId('MainPage');
        expect(notFoundPage).toBeInTheDocument();
    });
    test('Access for an authorized user', async () => {
        ComponentRender(<AppRouter/>, {
            route: getRouteProfile('1'),
            initialState: {
                user: {
                    _isInit: true, authData: {id: '2'}
                }
            }
        });

        const page = await screen.findByTestId('ProfilePage');
        expect(page).toBeInTheDocument();
    });
    test('Access denied (role missing)', async () => {
        ComponentRender(<AppRouter/>, {
            route: getRouteAdmin(),
            initialState: {
                user: {
                    _isInit: true, authData: {roles: ['USER']}
                }
            }
        });

        const page = await screen.findByTestId('ForbiddenPage');
        expect(page).toBeInTheDocument();
    });
    test('Access allowed (role present)', async () => {
        ComponentRender(<AppRouter/>, {
            route: getRouteAdmin(),
            initialState: {
                user: {
                    _isInit: true, authData: {roles: ['ADMIN']}
                }
            }
        });

        const page = await screen.findByTestId('AdminPanelPage');
        expect(page).toBeInTheDocument();
    });
});