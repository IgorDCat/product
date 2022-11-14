import {configureStore, Reducer, ReducersMapObject} from '@reduxjs/toolkit';
import {StateSchema} from '../index';
import {counterReducer} from 'entities/Counter';
import {userReducer} from 'entities/User';
import {createReducerManager} from 'app/providers/StoreProvider/config/reducerManager';
import {api} from 'shared/api/api';
import {CombinedState} from 'redux';
import {scrollSaverReducer} from 'features/ScrollSaver';

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
        scrollSaver: scrollSaverReducer,
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
                }
            }
        })
    });

    // @ts-ignore
    store.reducerManager = reducerManager

    return store;
}

export type AppDispatch =  ReturnType<typeof createReduxStore>['dispatch']