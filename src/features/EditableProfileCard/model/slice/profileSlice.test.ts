import {DeepPartial} from '@reduxjs/toolkit';
import {ProfileSchema} from '../types/editableProfileCardSchema';
import {ValidateProfileError} from '../types/editableProfileCardSchema';
import {profileActions, profileReducer} from './profileSlice';
import {updateProfileData} from '../services/updateProfileData/updateProfileData';

const data = {
    firstname: 'Igor',
    lastname: 'Davydov',
    age: 30,
    city: 'Los-Angeles',
    username: 'admin',
}

describe('profileSlice.test', () => {
    test('set readonly true', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false
        }
        expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true)))
            .toEqual({readonly: true})
    });

    test('cancel edit', () => {
        const state: DeepPartial<ProfileSchema> = {
            readonly: false,
            validateErrors: [ValidateProfileError.INCORRECT_USER_DATA]
        }
        expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit()))
            .toEqual({readonly: true, validateErrors: undefined})
    });

    test('update profile', () => {
        const state: DeepPartial<ProfileSchema> = {
            data: data,
            form: {}
        }
        expect(profileReducer(state as ProfileSchema, profileActions.updateProfile(data)))
            .toEqual({data: data, form: data})
    });

    test('update profile data pending', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: false,
            validateErrors: [ValidateProfileError.INCORRECT_USER_DATA]
        }
        expect(profileReducer(state as ProfileSchema, updateProfileData.pending))
            .toEqual({validateErrors: undefined, isLoading: true})
    });

    test('update profile data fulfilled', () => {
        const state: DeepPartial<ProfileSchema> = {
            isLoading: true,
            readonly: false,
            data: {},
            form: {}
        }
        expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(data, '')))
            .toEqual({
                isLoading: false,
                readonly: true,
                data: data,
                form: data
            })
    });

})