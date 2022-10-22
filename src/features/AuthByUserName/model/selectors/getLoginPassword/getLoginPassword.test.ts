import {StateSchema} from "app/providers/StoreProvider";
import {getLoginPassword} from "./getLoginPassword";

describe("getLoginPassword.test", () => {
    test("getLoginError", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: "password123"
            }
        }
        expect(getLoginPassword(state as StateSchema)).toEqual("password123")
    });
    test("getLoginError empty value", () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginPassword(state as StateSchema)).toEqual("")
    });
})