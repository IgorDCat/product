import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Theme } from "app/providers/themeProvider";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator";
import {LoginForm} from "./LoginForm";

export default {
    title: "features/LoginForm",
    component: LoginForm,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Light = Template.bind({});
Light.args = {
    value: " text",
};

export const Dark = Template.bind({});
Dark.args = {
    value: " text",
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const LightPlaceholder = Template.bind({});
LightPlaceholder.args = {
    placeholder: "123123"
};

export const DarkPlaceholder = Template.bind({});
DarkPlaceholder.args = {
    placeholder: "123123"
};
DarkPlaceholder.decorators = [ThemeDecorator(Theme.DARK)];