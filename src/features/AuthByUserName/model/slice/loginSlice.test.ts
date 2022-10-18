import {DeepPartial} from "@reduxjs/toolkit";
import {LoginSchema} from "features/AuthByUserName";
import {loginActions, loginReducer} from "./loginSlice";

describe("loginSlice.test", () => {
    test("setUserName reducer", () => {
        const state: DeepPartial<LoginSchema> = {
            username: "123"
        }
        expect(loginReducer(state as LoginSchema, loginActions.setUserName(state.username))).
            toStrictEqual({username: "123"});
    });

    test("setPassword reducer", () => {
        const state: DeepPartial<LoginSchema> = {
            password: "123"
        }
        expect(loginReducer(state as LoginSchema, loginActions.setPassword(state.password))).
            toStrictEqual({password: "123"});
    });
})