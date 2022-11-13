import {createAsyncThunk} from '@reduxjs/toolkit';
import {ThunkConfig} from 'app/providers/StoreProvider';
import {getArticlesPageInit} from '../selectors/articlesPageSelectors';
import {articlePageActions} from '../slice/articlesPageSlice';
import {fetchArticlesList} from './fetchArticlesList';


export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
    'articlesPage/initArticlesPage',
    async (_, thunkAPI) => {
        const {getState, dispatch} = thunkAPI;
        const initialized = getArticlesPageInit(getState());

        if(!initialized) {
            dispatch(articlePageActions.initState());
            dispatch(fetchArticlesList({
                page: 1
            }));
        }
    }
)