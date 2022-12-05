import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Theme} from 'app/providers/ThemeProvider';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator';
import {NotificationButton} from './NotificationButton';

export default {
    title: 'folder/NotificationButton',
    component: NotificationButton,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof NotificationButton>;

const Template: ComponentStory<typeof NotificationButton> = (args) => <NotificationButton {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];