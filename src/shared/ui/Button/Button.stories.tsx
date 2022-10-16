import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Theme } from "app/providers/themeProvider";
import { Button, ThemeButton } from "./Button";
import {ThemeDecorator} from "shared/config/storybook/ThemeDecorator";

export default {
    title: "shared/Button",
    component: Button,
    argTypes: {
        backgroundColor: { control: "color" },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: "Text",
};

export const Clear = Template.bind({});
Clear.args = {
    children: "Text",
    theme: ThemeButton.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
    children: "Text",
    theme: ThemeButton.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: "Text",
    theme: ThemeButton.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Collapse = Template.bind({});
Collapse.args = {
    children: "→",
    theme: ThemeButton.COLLAPSE,
};

export const CollapseDark = Template.bind({});
CollapseDark.args = {
    children: "→",
    theme: ThemeButton.COLLAPSE,
};
CollapseDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Disabled = Template.bind({});
Disabled.args = {
    children: "Text",
    disabled: true,
};

export const DisabledDark = Template.bind({});
DisabledDark.args = {
    children: "Text",
    disabled: true,
};
DisabledDark.decorators = [ThemeDecorator(Theme.DARK)];
