import {Story} from "@storybook/react";
import {BrowserRouter} from "react-router-dom";
import {StoreProvider} from "app/providers/StoreProvider";

export const RouterDecorator = (StoryComponent: Story) => (
    <StoreProvider>
        <BrowserRouter>
            <StoryComponent/>
        </BrowserRouter>
    </StoreProvider>
)
