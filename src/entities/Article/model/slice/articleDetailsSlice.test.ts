import {DeepPartial} from '@reduxjs/toolkit';
import {fetchArticleById} from '../services/fetchArticleById/fetchArticleById';
import {ArticleDetailsSchema} from '../types/articleDetailsSchema';
import {articleDetailsReducer} from './articleDetailsSlice';

const data = {
    id: '1',
    title: 'title',
    user: {
        id: '1',
        username: '124'
    }
}

describe('articleDetailsSlice.test', () => {
    test('fetch article by id pending', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: false,
            error: 'error'
        }
        expect(articleDetailsReducer(state as ArticleDetailsSchema, fetchArticleById.pending))
            .toEqual({isLoading: true, error: undefined})
    });

    test('fetch article by id fulfilled', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true,
            data: data,
        }
        expect(articleDetailsReducer(state as ArticleDetailsSchema, fetchArticleById.fulfilled(data, '', '')))
            .toEqual({
                isLoading: false,
                data: data,
            })
    });

    test('fetch article by id rejected', () => {
        const state: DeepPartial<ArticleDetailsSchema> = {
            isLoading: true,
            data: data,
        }
        expect(articleDetailsReducer(state as ArticleDetailsSchema, fetchArticleById.rejected))
            .toEqual({
                isLoading: false,
                data: data,
            })
    });
})