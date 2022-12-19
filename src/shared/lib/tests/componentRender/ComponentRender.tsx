import {ReducersMapObject} from '@reduxjs/toolkit';
import {ReactNode} from 'react';
import {render} from '@testing-library/react';
import {I18nextProvider} from 'react-i18next';
import i18n from '@/shared/config/i18n/i18nForTests';
import {MemoryRouter} from 'react-router-dom';
import {StateSchema, StoreProvider} from '@/app/providers/StoreProvider';

interface ComponentRenderOptions {
    route?: string;
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const ComponentRender = (component: ReactNode, options: ComponentRenderOptions = {}) => {
    const {
        route = '/',
        initialState,
        asyncReducers
    } = options

    return render(
        <MemoryRouter initialEntries={[route]}>
            <StoreProvider asyncReducers={asyncReducers} initialState={initialState as StateSchema}>
                <I18nextProvider i18n={i18n}>
                    {component}
                </I18nextProvider>
            </StoreProvider>
        </MemoryRouter>
    )
}