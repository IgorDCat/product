import {TestAsyncThunk} from '@/shared/lib/tests/testAsyncThunk/testAsyncThunk';
import {fetchNextArticlesPage} from './fetchNextArticlesPage';
import {fetchArticlesList} from './fetchArticlesList';

jest.mock('./fetchArticlesList');

describe('fetchNextArticlesPage.test', () => {
    test('success fetch', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 2,
                hasMore: true,
                ids: [],
                limit: 5,
                isLoading: false,
                entities: {}
            }
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(4);
        expect(fetchArticlesList).toHaveBeenCalled();
    });
    test('fetchArticlesList not called', async () => {
        const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
            articlesPage: {
                page: 2,
                hasMore: false,
                ids: [],
                limit: 5,
                isLoading: false,
                entities: {}
            }
        });

        await thunk.callThunk();

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(fetchArticlesList).not.toHaveBeenCalled();
    });
})