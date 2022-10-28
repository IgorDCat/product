import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator';
import {Select} from './Select';

export default {
    title: 'shared/Select',
    component: Select,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Light = Template.bind({});
Light.args = {
    label: 'select value:',
    options: [
        {value: '123', content: 'first'},
        {value: '1234', content: 'second'},
        {value: '1235', content: 'third'}
    ]
};

export const Dark = Template.bind({});
Dark.args = {
    label: 'select value:',
    options: [
        {value: '123', content: 'first'},
        {value: '1234', content: 'second'},
        {value: '1235', content: 'third'}
    ]
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];