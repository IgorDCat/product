import {configureStore, Reducer, ReducersMapObject} from '@reduxjs/toolkit';
import {StateSchema} from '../index';
import {counterReducer} from 'entities/Counter';
import {userReducer} from 'entities/User';
import {createReducerManager} from 'app/providers/StoreProvider/config/reducerManager';
import {api} from 'shared/api/api';
import {NavigateOptions} from 'react-router';
import {To} from 'history';
import {CombinedState} from 'redux';

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
    navigate?: (to: To, options?: NavigateOptions) => void
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
    }

    const reducerManager = createReducerManager(rootReducers);

    const store = configureStore({
        reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: api,
                    navigate
                }
            }
        })
    });

    // @ts-ignore
    store.reducerManager = reducerManager

    return store;
}

export type AppDispatch =  ReturnType<typeof createReduxStore>['dispatch']