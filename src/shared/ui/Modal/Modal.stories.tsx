import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Theme } from "app/providers/themeProvider";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator";
import {Modal} from "./Modal";

export default {
    title: "shared/Modal",
    component: Modal,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {
    isOpen: true,
    children: "text of modal"
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: "text of modal"
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];