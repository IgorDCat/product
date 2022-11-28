import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Theme} from 'app/providers/ThemeProvider';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator';
import {ListBox} from './ListBox';

export default {
    title: 'shared/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args}/>;

const items = [
    {value: 'text 123123', content: 'text 123123'},
    {value: 'text 123123', content: 'text 123123'},
    {value: 'text 123123', content: 'text 123123'},
]

export const Light = Template.bind({});
Light.args = {
    onChange: (value) => {value},
    items: items,
    value: 'text 123'
};

export const Dark = Template.bind({});
Dark.args = {
    onChange: value => {value},
    items: items,
    value: 'text 123'
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];