import {StateSchema} from '@/app/providers/StoreProvider';
import {getLoginUsername} from './getLoginUsername';

describe('getLoginUsername.test', () => {
    test('getLoginError', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                username: 'name123'
            }
        }
        expect(getLoginUsername(state as StateSchema)).toEqual('name123')
    });
    test('getLoginError empty value', () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginUsername(state as StateSchema)).toEqual('')
    });
})