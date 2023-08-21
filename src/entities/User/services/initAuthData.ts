import {createAsyncThunk} from '@reduxjs/toolkit';
import {ThunkConfig} from '@/app/providers/StoreProvider';
import {User} from '../model/types/user';
import {LOCALSTORAGE_USER_KEY} from '@/shared/const/localstorage';
import {getUserDataByIdQuery} from '../api/userApi';


export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
    'user/initAuthData',
    async (_, thunkAPI) => {
        const {rejectWithValue, dispatch} = thunkAPI;
        const userId = localStorage.getItem(LOCALSTORAGE_USER_KEY);

        if(!userId) {
            return rejectWithValue('');
        }

        try {
            const response = await dispatch(getUserDataByIdQuery(userId)).unwrap();

            if(!response) {
                return rejectWithValue('')
            }

            return response
        } catch (e) {
            console.log(e);
            return rejectWithValue('');
        }
    }
)