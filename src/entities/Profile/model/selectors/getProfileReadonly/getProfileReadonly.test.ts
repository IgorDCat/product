import {DeepPartial} from '@reduxjs/toolkit';
import {StateSchema} from 'app/providers/StoreProvider';
import {getProfileReadonly} from 'entities/Profile';

describe('getProfileReadonly.test', () => {
    test('get readonly', () => {
        const state: DeepPartial<StateSchema> = {
            profile: {
                readonly: true
            }
        }
        expect(getProfileReadonly(state as StateSchema)).toEqual(true)
    });
    test('empty value', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileReadonly(state as StateSchema)).toEqual(undefined)
    });
})