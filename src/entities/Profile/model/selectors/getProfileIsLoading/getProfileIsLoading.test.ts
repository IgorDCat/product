import {DeepPartial} from '@reduxjs/toolkit';
import {StateSchema} from 'app/providers/StoreProvider';
import {getProfileIsLoading} from './getProfileIsLoading';

describe('getProfileIsLoading.test', () => {
    test('get isLoading', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                isLoading: true
            }
        }
        expect(getProfileIsLoading(state as StateSchema)).toEqual(true)
    });
    test('empty value', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(
            getProfileIsLoading(state as StateSchema)).toEqual(false)
    });
})