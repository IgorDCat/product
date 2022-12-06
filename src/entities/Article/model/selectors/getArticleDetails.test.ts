import {DeepPartial} from '@reduxjs/toolkit';
import {StateSchema} from '@/app/providers/StoreProvider';
import {getArticleDetailsData, getArticleDetailsError, getArticleDetailsIsLoading} from './getArticleDetails';

const data = {
    id: '1',
    title: 'title',
    user: {
        id: '1',
        username: '124'
    }
}

describe('getArticleDetailsData.test', () => {
    test('get data', () => {

        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                data
            }
        }
        expect(getArticleDetailsData(state as StateSchema)).toEqual(data)
    });
    test('empty value', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getArticleDetailsData(state as StateSchema)).toBe(undefined)
    });
})

describe('getArticleDetailsIsLoading.test', () => {
    test('get isLoading', () => {

        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                isLoading: true
            }
        }
        expect(getArticleDetailsIsLoading(state as StateSchema)).toBe(true)
    });
    test('empty value', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getArticleDetailsIsLoading(state as StateSchema)).toBe(false)
    });
})

describe('getArticleDetailsError.test', () => {
    test('get isLoading', () => {

        const state: DeepPartial<StateSchema> = {
            articleDetails: {
                error: 'error'
            }
        }
        expect(getArticleDetailsError(state as StateSchema)).toBe('error')
    });
    test('empty value', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getArticleDetailsError(state as StateSchema)).toBe(undefined)
    });
})