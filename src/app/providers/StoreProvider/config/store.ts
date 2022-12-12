import {configureStore, Reducer, ReducersMapObject} from '@reduxjs/toolkit';
import {apiRtk} from '@/shared/api/apiRtk';
import {StateSchema} from '../index';
import {counterReducer} from '@/entities/Counter';
import {userReducer} from '@/entities/User';
import {createReducerManager} from './reducerManager';
import {api} from '@/shared/api/api';
import {CombinedState} from 'redux';
import {scrollSaverReducer} from '@/features/ScrollSaver';

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        counter: counterReducer,
        user: userReducer,
        scrollSaver: scrollSaverReducer,
        [apiRtk.reducerPath]: apiRtk.reducer
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
        }).concat(apiRtk.middleware)
    });

    // @ts-ignore
    store.reducerManager = reducerManager

    return store;
}

export type AppDispatch =  ReturnType<typeof createReduxStore>['dispatch']