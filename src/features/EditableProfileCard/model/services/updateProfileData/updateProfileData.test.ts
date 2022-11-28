import {ValidateProfileError} from '../../types/editableProfileCardSchema';
import {TestAsyncThunk} from 'shared/lib/tests/testAsyncThunk/testAsyncThunk';
import {updateProfileData} from './updateProfileData';

const data = {
    id: '1',
    firstname: 'Igor',
    lastname: 'Davydov',
    age: 30,
    city: 'Los-Angeles',
    username: 'admin',
}

describe('updateProfileData.test', () => {
    test('success update', async() => {
        const thunk = new TestAsyncThunk(updateProfileData, {profile: {form: data}});
        thunk.api.put.mockReturnValue(Promise.resolve({data: data}));
        const result = await thunk.callThunk()

        expect(thunk.api.put).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('server error', async() => {
        const thunk = new TestAsyncThunk(updateProfileData, {profile: {form: data}});
        await thunk.api.put.mockReturnValue(Promise.resolve({status: 403}));
        const result = await thunk.callThunk()

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR])
    });

    test('validate error', async() => {
        const thunk = new TestAsyncThunk(updateProfileData, {profile: {form: {...data, lastname: ''}}});
        const result = await thunk.callThunk()

        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
    });
})