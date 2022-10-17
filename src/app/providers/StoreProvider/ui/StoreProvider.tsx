import React, {ReactNode} from "react";
import {Provider} from "react-redux";
import {createReduxStore} from "../config/store";
import {StateSchema} from "../config/StateSchema";
import {DeepPartial, ReducersMapObject} from "@reduxjs/toolkit";

interface StoreProviderProps {
    children?: ReactNode;
    initialState?: DeepPartial<StateSchema>;
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider = (props: StoreProviderProps) => {
    const {children, initialState, asyncReducers} = props
    return (
        <Provider store={createReduxStore(
            initialState as StateSchema,
            asyncReducers as ReducersMapObject<StateSchema>
        )}>
            {children}
        </Provider>
    );
}