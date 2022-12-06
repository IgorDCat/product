import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Theme} from '@/app/providers/ThemeProvider';
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator';
import {NotificationItem} from './NotificationItem';

export default {
    title: 'folder/NotificationItem',
    component: NotificationItem,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];