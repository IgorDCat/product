import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator';
import {Input} from './Input';
import {Theme} from '@/shared/const/theme';

export default {
    title: 'shared/Input',
    component: Input,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Light = Template.bind({});
Light.args = {
    value: ' 123123',
    placeholder: 'text'
};

export const Dark = Template.bind({});
Dark.args = {
    value: ' 123123',
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const LightPlaceholder = Template.bind({});
LightPlaceholder.args = {
    placeholder: 'text'
};

export const DarkPlaceholder = Template.bind({});
DarkPlaceholder.args = {
    placeholder: 'text'
};
DarkPlaceholder.decorators = [ThemeDecorator(Theme.DARK)];