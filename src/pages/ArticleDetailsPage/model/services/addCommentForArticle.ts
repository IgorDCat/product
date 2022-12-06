import {createAsyncThunk} from '@reduxjs/toolkit';
import {ThunkConfig} from '@/app/providers/StoreProvider';
import {CommentType} from '@/entities/Comment';
import {getUserAuthData} from '@/entities/User';
import {getArticleDetailsData} from '@/entities/Article/model/selectors/getArticleDetails';
import {fetchCommentsByArticleId} from './fetchCommentsByArticleId';


export const addCommentForArticle = createAsyncThunk<CommentType, string, ThunkConfig<string>>(
    'articleDetails/addCommentForArticle',
    async (text, thunkAPI) => {
        const {dispatch, extra, rejectWithValue, getState} = thunkAPI;

        const userData = getUserAuthData(getState());
        const article = getArticleDetailsData(getState());

        if(!userData || !text || !article) {
            return rejectWithValue('no data');
        }

        try {
            const response = await extra.api.post<CommentType>('/comments', {
                articleId: article.id,
                userId: userData.id,
                text
            })

            if(!response.data) {
                throw new Error();
            }

            dispatch(fetchCommentsByArticleId(article.id));

            return response.data;

        } catch (e) {
            return rejectWithValue('some error');
        }
    }
)