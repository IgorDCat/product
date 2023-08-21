import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {User, UserSchema} from '../types/user';
import {LOCALSTORAGE_USER_KEY} from '@/shared/const/localstorage';
import {setFeatureFlags} from '@/shared/lib/features';
import {initAuthData} from '../../services/initAuthData';
import {saveJsonSettings} from '../../services/saveJsonSettings';
import {JsonSettings} from '../types/jsonSettings';

const initialState: UserSchema = {
    _isInit: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
            setFeatureFlags(action.payload.features);
            localStorage.setItem(LOCALSTORAGE_USER_KEY, action.payload.id)
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(LOCALSTORAGE_USER_KEY)
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(saveJsonSettings.fulfilled, (state, {payload}: PayloadAction<JsonSettings>) => {
                if(state.authData) {
                    state.authData.jsonSettings = payload;
                }
            });
        builder
            .addCase(initAuthData.fulfilled, (state, {payload}: PayloadAction<User>) => {
                state.authData = payload;
                setFeatureFlags(payload.features);
                state._isInit = true;
            });
        builder
            .addCase(initAuthData.rejected, (state) => {
                state._isInit = true;
            });
    }
})

export const {actions: userActions} = userSlice;
export const {reducer: userReducer} = userSlice;