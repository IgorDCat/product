import {Story} from '@storybook/react';
// TODO
import {StateSchema, StoreProvider} from '@/app/providers/StoreProvider';
// eslint-disable-next-line fsd-path-checker/imports-public-api
import {loginReducer} from '@/features/AuthByUsername/model/slice/loginSlice';
// eslint-disable-next-line fsd-path-checker/imports-public-api
import {profileReducer} from '@/features/EditableProfileCard/model/slice/profileSlice';
import {ReducersList} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
// eslint-disable-next-line fsd-path-checker/imports-public-api
import {articleDetailsReducer} from '@/entities/Article/model/slice/articleDetailsSlice';
// eslint-disable-next-line fsd-path-checker/imports-public-api
import {addCommentFormReducer} from '@/features/AddCommentForm/model/slices/addCommentFormSlice';
// eslint-disable-next-line fsd-path-checker/imports-public-api
import {articleDetailsPageReducer} from '@/pages/ArticleDetailsPage/model/slices';

const defaultAsyncReducers: ReducersList = {
    loginForm: loginReducer,
    profile: profileReducer,
    articleDetails: articleDetailsReducer,
    addCommentForm: addCommentFormReducer,
    articleDetailsPage: articleDetailsPageReducer
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducers?: ReducersList) => (StoryComponent: Story) => (
    <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <StoryComponent />
    </StoreProvider>
);
