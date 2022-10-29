import {LoginSchema} from '../..';
import {loginActions, loginReducer} from './loginSlice';

describe('loginSlice.test', () => {
    test('setUserName reducer', () => {
        const state: DeepPartial<LoginSchema> = {
            username: '123'
        }
        expect(loginReducer(state as LoginSchema, loginActions.setUserName(<string>state.username))).
            toStrictEqual({username: '123'});
    });

    test('setPassword reducer', () => {
        const state: DeepPartial<LoginSchema> = {
            password: '123'
        }
        expect(loginReducer(state as LoginSchema, loginActions.setPassword(<string>state.password))).
            toStrictEqual({password: '123'});
    });
})