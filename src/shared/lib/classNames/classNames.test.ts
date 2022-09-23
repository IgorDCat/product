import {classNames} from "./classNames";

describe("classNames", () => {
    test("test", () => {
        expect(classNames("class")).toBe("class ")
    })
})