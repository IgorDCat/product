import {createSlice, PayloadAction} from "@reduxjs/toolkit"
import {Profile, ProfileSchema} from "../types/profile";

const initialState: ProfileSchema = {
    data: undefined,
    error: undefined,
    isLoading: false,
    readonly: true
}

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        setProfileData: (state, action: PayloadAction<Profile>) => {
            state.data = action.payload
        }
    }
})

export const {actions: profileActions} = profileSlice;
export const {reducer: profileReducer} = profileSlice;