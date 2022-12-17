import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator';
import {NotificationList} from './NotificationList';
import {Theme} from '@/shared/const/theme';

export default {
    title: 'folder/NotificationList',
    component: NotificationList,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];