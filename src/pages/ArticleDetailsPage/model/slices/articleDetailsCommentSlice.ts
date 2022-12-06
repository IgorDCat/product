import {
    createEntityAdapter, createSlice, PayloadAction
} from '@reduxjs/toolkit'
import {CommentType} from '@/entities/Comment';
import {StateSchema} from '@/app/providers/StoreProvider';
import {ArticleDetailsCommentsSchema} from '../types/ArticleDetailsCommentsSchema';
import {fetchCommentsByArticleId} from '../services/fetchCommentsByArticleId';

const commentsAdapter = createEntityAdapter<CommentType>({
    selectId: (comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
    (state) => state.articleDetailsPage?.comments || commentsAdapter.getInitialState()
);

const articleDetailsCommentSlice = createSlice({
    name: 'articleDetailsCommentSlice',
    initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
        isLoading: false,
        error: undefined,
        ids: [],
        entities: {
        }
    }),
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCommentsByArticleId.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchCommentsByArticleId.fulfilled, (state, action:  PayloadAction<CommentType[]>) => {
                state.isLoading = false;
                commentsAdapter.setAll(state, action.payload);
            })
            .addCase(fetchCommentsByArticleId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
});

export const {reducer: articleDetailsCommentReducer} = articleDetailsCommentSlice;
export const {actions: articleDetailsCommentActions} = articleDetailsCommentSlice;
