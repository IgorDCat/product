import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Theme } from "app/providers/themeProvider";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator";
import ProfilePage from "./ProfilePage";

export default {
    title: "pages/ProfilePage",
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

export const Light = Template.bind({});
Light.args = {
    isStories: true
};

export const Dark = Template.bind({});
Dark.args = {
    isStories: true
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];