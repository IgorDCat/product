import {DeepPartial} from '@reduxjs/toolkit';
import {StateSchema} from 'app/providers/StoreProvider';
import {getUserAuthData} from './getUserAuthData';

describe('getUserAuthData.test', () => {
    test('get authData', () => {
        const state: DeepPartial<StateSchema> = {
            user: {
                authData: {
                    id: '1',
                    username: '123'
                }
            }
        }
        expect(getUserAuthData(state as StateSchema)).toEqual({id: '1', username: '123'})
    });
    test('empty value', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getUserAuthData(state as StateSchema)).toEqual(undefined)
    });
})