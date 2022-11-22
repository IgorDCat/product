import {validateProfileData} from './validateProfileData';
import {ValidateProfileError} from '../../types/profile';

const data = {
    firstname: 'Igor',
    lastname: 'Davydov',
    age: 30,
    city: 'Los-Angeles',
    username: 'admin',
}

describe('validateProfileData.test', () => {
    test('success ', async () => {
        const result = validateProfileData(data)
        expect(result).toEqual([]);
    });

    test('without firstname', () => {
        const result = validateProfileData({...data, firstname: ''})
        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('without lastname', () => {
        const result = validateProfileData({...data, lastname: ''})
        expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA]);
    });

    test('incorrect age', () => {
        const result = validateProfileData({...data, age: NaN})
        expect(result).toEqual([ValidateProfileError.INCORRECT_AGE]);
    });
})