import {StateSchema} from "app/providers/StoreProvider";
import {getLoginError} from "./getLoginError";

describe("getLoginError.test", () => {
    test("getLoginError", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: "error"
            }
        }
        expect(getLoginError(state as StateSchema)).toEqual("error")
    });
    test("getLoginError empty value", () => {
        const state: DeepPartial<StateSchema> = {}
        expect(getLoginError(state as StateSchema)).toEqual(undefined)
    });
})