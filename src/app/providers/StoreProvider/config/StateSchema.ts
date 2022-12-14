import {AnyAction, EnhancedStore, Reducer, ReducersMapObject} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {ArticleDetailsSchema} from '@/entities/Article';
import {CounterSchema} from '@/entities/Counter';
import {UserSchema} from '@/entities/User';
import {AddCommentFormSchema} from '@/features/AddCommentForm';
import {LoginSchema} from '@/features/AuthByUsername';
import {ProfileSchema} from '@/features/EditableProfileCard';
import {ScrollSaverSchema} from '@/features/ScrollSaver';
import {ArticleDetailsPageSchema} from '@/pages/ArticleDetailsPage'
import {ArticlesPageSchema} from '@/pages/ArticlesPage';
import {CombinedState} from 'redux';
import {apiRtk} from '@/shared/api/apiRtk';


export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    scrollSaver: ScrollSaverSchema;
    [apiRtk.reducerPath]: ReturnType<typeof apiRtk.reducer>;

    // async reducers
    loginForm?: LoginSchema;
    profile?: ProfileSchema;
    articleDetails?: ArticleDetailsSchema;
    addCommentForm?: AddCommentFormSchema;
    articlesPage?: ArticlesPageSchema;
    articleDetailsPage?: ArticleDetailsPageSchema;
}

export type StateSchemaKey = keyof StateSchema;
export type MountedReducers = RecordOptional<StateSchemaKey, boolean>

export interface ReducerManager {
    getReducerMap: () => ReducersMapObject<StateSchema>;
    reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
    add: (key: StateSchemaKey, reducer: Reducer) => void;
    remove: (key: StateSchemaKey) => void;
    getMountedReducers: () => MountedReducers;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
    reducerManager: ReducerManager;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}