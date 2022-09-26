import {classNames} from "shared/lib/classNames/classNames";

describe("classNames ", () => {
    test("classNames main", () => {
        expect(classNames("class")).toBe("class")
    })
    test("classNames mods", () => {
        expect(classNames("class", {hovered: true, scrollable: true}))
            .toBe("class hovered scrollable")
    })
    test("classNames mods false", () => {
        expect(classNames("class", {hovered: false})).toBe("class")
    })
    test("classNames add", () => {
        expect(classNames("class", {}, ["add"])).toBe("class add")
    })
})