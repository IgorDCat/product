import {createAsyncThunk} from '@reduxjs/toolkit';
import {User, userActions} from '@/entities/User';
import {ThunkConfig} from '@/app/providers/StoreProvider';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        const {dispatch, extra, rejectWithValue} = thunkAPI;

        try {
            const response: any = await extra.api.post('/login', authData)

            if(!response.data) {
                throw new Error();
            }

            dispatch(userActions.setAuthData(response.data));

            return response.data;

        } catch (e) {
            console.log(e);
            return rejectWithValue('some error');
        }
    }
)