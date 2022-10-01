import {fireEvent, screen} from "@testing-library/react";
import {Sidebar} from "widgets/Sidebar";
import {ComponentRender} from "shared/lib/tests/componentRender/ComponentRender";

describe("Sidebar", () => {
    test("Sidebar render", () => {
        ComponentRender(<Sidebar/>);
        expect(screen.getByTestId("sidebar")).toBeInTheDocument()
    });

    test("Sidebar toggle", () => {
        ComponentRender(<Sidebar/>);
        const toggleBtn = screen.getByTestId("sidebar-toggle");
        expect(screen.getByTestId("sidebar")).toBeInTheDocument();
        fireEvent.click(toggleBtn);
        fireEvent.click(toggleBtn);
        expect(screen.getByTestId("sidebar")).toHaveClass("collapsed")
    });
})