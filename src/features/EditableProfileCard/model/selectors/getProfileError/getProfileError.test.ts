import {DeepPartial} from '@reduxjs/toolkit';
import {StateSchema} from '@/app/providers/StoreProvider';
import {getProfileError} from './getProfileError';

describe('getProfileError.test', () => {
    test('get data', () => {

        const state: DeepPartial<StateSchema> = {
            profile: {
                error: '123'
            }
        }
        expect(getProfileError(state as StateSchema)).toEqual('123')
    });
    test('empty value', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileError(state as StateSchema)).toEqual('')
    });
})