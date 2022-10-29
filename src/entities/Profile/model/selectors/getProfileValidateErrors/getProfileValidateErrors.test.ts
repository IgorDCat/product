import {DeepPartial} from '@reduxjs/toolkit';
import {StateSchema} from 'app/providers/StoreProvider';
import {getProfileValidateErrors} from './getProfileValidateErrors';
import {ValidateProfileError} from 'entities/Profile/model/types/profile';

describe('getProfileValidateErrors.test', () => {
    test('get data', () => {
        const validateErrors = [
            ValidateProfileError.SERVER_ERROR,
            ValidateProfileError.INCORRECT_AGE
        ]
        const state: DeepPartial<StateSchema> = {
            profile: {
                validateErrors: validateErrors
            }
        }
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(validateErrors)
    });
    test('empty value', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined)
    });
})