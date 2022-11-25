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
    onChange: value => {}
};

// export const Dark = Template.bind({});
// Dark.args = {};
// Dark.decorators = [ThemeDecorator(Theme.DARK)];