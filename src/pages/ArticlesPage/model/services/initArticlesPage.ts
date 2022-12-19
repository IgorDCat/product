import {createAsyncThunk} from '@reduxjs/toolkit';
import {ThunkConfig} from '@/app/providers/StoreProvider';
import {getArticlesPageInit} from '../selectors/articlesPageSelectors';
import {articlePageActions} from '../slice/articlesPageSlice';
import {fetchArticlesList} from './fetchArticlesList';
import {SortOrder} from '@/shared/types/sort';
import {ArticleSortField, ArticleType} from '@/entities/Article';


export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
    'articlesPage/initArticlesPage',
    async (searchParams, thunkAPI) => {
        const {getState, dispatch} = thunkAPI;
        const initialized = getArticlesPageInit(getState());

        if(!initialized) {
            const orderFromUrl = searchParams.get('order') as SortOrder;
            const sortFromUrl = searchParams.get('sort') as ArticleSortField;
            const searchFromUrl = searchParams.get('search');
            const typeFromUrl = searchParams.get('type') as ArticleType;

            if(orderFromUrl) {
                dispatch(articlePageActions.setOrder(orderFromUrl))
            }
            if(sortFromUrl) {
                dispatch(articlePageActions.setSort(sortFromUrl))
            }
            if(searchFromUrl) {
                dispatch(articlePageActions.setSearch(searchFromUrl))
            }
            if(typeFromUrl) {
                dispatch(articlePageActions.setType(typeFromUrl))
            }

            dispatch(articlePageActions.initState());
            dispatch(fetchArticlesList({}));
        }
    }
)