import {StateSchema} from "app/providers/StoreProvider";
import {getLoginIsLoading} from "./getLoginIsLoading";

describe("getLoginIsLoading.test", () => {
    test("getLoginError", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true
            }
        }
        expect(getLoginIsLoading(state as StateSchema)).toEqual(true)
    });
    test("getLoginError empty value", () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: false
            }
        }
        expect(getLoginIsLoading(state as StateSchema)).toEqual(false)
    });
})