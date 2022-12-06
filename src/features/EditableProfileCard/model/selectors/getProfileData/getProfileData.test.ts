import {DeepPartial} from '@reduxjs/toolkit';
import {StateSchema} from '@/app/providers/StoreProvider';
import {getProfileData} from './getProfileData';

describe('getProfileData.test', () => {
    test('get data', () => {
        const data = {
            firstname: 'Igor',
            lastname: 'Davydov',
            age: 30,
            city: 'Los-Angeles',
            username: 'admin',
        }
        const state: DeepPartial<StateSchema> = {
            profile: {
                data: data,
            }
        }
        expect(getProfileData(state as StateSchema)).toEqual(data)
    });
    test('empty value', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileData(state as StateSchema)).toEqual(undefined)
    });
})