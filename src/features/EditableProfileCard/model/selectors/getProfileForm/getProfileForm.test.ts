import {DeepPartial} from '@reduxjs/toolkit';
import {StateSchema} from 'app/providers/StoreProvider';
import {getProfileForm} from './getProfileForm';

describe('getProfileForm.test', () => {
    test('get data', () => {
        const form = {
            firstname: 'Igor',
            lastname: 'Davydov',
            age: 30,
            city: 'Los-Angeles',
            username: 'admin',
        }
        const state: DeepPartial<StateSchema> = {
            profile: {
                form: form
            }
        }
        expect(getProfileForm(state as StateSchema)).toEqual(form)
    });
    test('empty value', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileForm(state as StateSchema)).toEqual(undefined)
    });
})