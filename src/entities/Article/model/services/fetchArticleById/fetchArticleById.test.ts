import {TestAsyncThunk} from 'shared/lib/tests/testAsyncThunk/testAsyncThunk';
import {fetchArticleById} from './fetchArticleById';

describe('fetchArticleById.test', () => {
    test('success fetch', async () => {
        const data = {
            id: '1',
            title: 'title'
        };
        const thunk = new TestAsyncThunk(fetchArticleById);
        thunk.api.get.mockReturnValue(Promise.resolve({data: data}));
        const result = await thunk.callThunk('1')

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(data);
    });

    test('error login', async () => {
        const thunk = new TestAsyncThunk(fetchArticleById);
        await thunk.api.get.mockReturnValue(Promise.resolve({status: 403}));
        const result = await thunk.callThunk('1')

        expect(thunk.api.get).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
    });
})