import {createEntityAdapter, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {StateSchema} from 'app/providers/StoreProvider';
import {Article, ArticleView} from 'entities/Article';
import {ArticlesPageSchema} from 'pages/ArticlesPage';
import {fetchArticlesList} from '../services/fetchArticlesList';
import {ARTICLES_VIEW_LOCALSTORAGE_KEY} from 'shared/const/localstorage';

const articlesAdapter = createEntityAdapter<Article>({
    selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
    (state) => state.articlesPage || articlesAdapter.getInitialState()
);

const articlePageSlice = createSlice({
    name: 'articlePageSlice',
    initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
        isLoading: false,
        error: undefined,
        view: ArticleView.BIG,
        ids: [],
        entities: {
        }
    }),
    reducers: {
        setView: (state, action: PayloadAction<ArticleView>) => {
            state.view = action.payload;
            localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload);
        },
        initState: (state) => {
            state.view = localStorage.getItem(ARTICLES_VIEW_LOCALSTORAGE_KEY) as ArticleView;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchArticlesList.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchArticlesList.fulfilled, (state, action:  PayloadAction<Article[]>) => {
                state.isLoading = false;
                articlesAdapter.setAll(state, action.payload);
            })
            .addCase(fetchArticlesList.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
});

export const {reducer: articlePageReducer} = articlePageSlice;
export const {actions: articlePageActions} = articlePageSlice;