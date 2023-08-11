import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {User, UserSchema} from '../types/user';
import {LOCALSTORAGE_USER_KEY} from '@/shared/const/localstorage';
import {setFeatureFlags} from '@/shared/lib/features';
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
            setFeatureFlags(action.payload.features)
        },
        initAuthData: (state) => {
            const user = localStorage.getItem(LOCALSTORAGE_USER_KEY)
            if(user) {
                const json = JSON.parse(user) as User;
                state.authData = json;
                setFeatureFlags(json.features)
            }
            state._isInit = true
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(LOCALSTORAGE_USER_KEY)
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(saveJsonSettings.fulfilled, (state, action: PayloadAction<JsonSettings>) => {
                if(state.authData) {
                    state.authData.jsonSettings = action.payload;
                }
            })
    }
})

export const {actions: userActions} = userSlice;
export const {reducer: userReducer} = userSlice;