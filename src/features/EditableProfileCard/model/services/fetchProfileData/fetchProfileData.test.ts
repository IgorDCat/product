import {TestAsyncThunk} from '@/shared/lib/tests/testAsyncThunk/testAsyncThunk';
import {fetchProfileData} from './fetchProfileData';

describe('fetchProfileData.test', () => {
    test('success fetch', async () => {
        const profileValue = {firstname: '123', lastname: '123', age: 123};
        const thunk = new TestAsyncThunk(fetchProfileData);
        thunk.api.get.mockReturnValue(Promise.resolve({data: profileValue}));
        const result = await thunk.callThunk('1')

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(profileValue);
    });

    test('error login', async () => {
        const thunk = new TestAsyncThunk(fetchProfileData);
        await thunk.api.get.mockReturnValue(Promise.resolve({status: 403}));
        const result = await thunk.callThunk('1')

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
    });
})