import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Theme} from 'app/providers/ThemeProvider';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator';
import {ListBox} from './ListBox';

export default {
    title: 'folder/ListBox',
    component: ListBox,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof ListBox>;

const Template: ComponentStory<typeof ListBox> = (args) => <ListBox {...args}/>;

export const Light = Template.bind({});
Light.args = {
    onChange: value => {null}
};

export const Dark = Template.bind({});
Dark.args = {
    onChange: value => {null}
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];