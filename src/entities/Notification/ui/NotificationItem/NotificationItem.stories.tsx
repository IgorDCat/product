import {Theme} from '@/shared/const/theme';
import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator';
import {NotificationItem} from './NotificationItem';

export default {
    title: 'entities/NotificationItem',
    component: NotificationItem,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof NotificationItem>;

const Template: ComponentStory<typeof NotificationItem> = (args) => <NotificationItem {...args} />;

export const Light = Template.bind({});
Light.args = {
    item: {
        id: '1',
        title: 'Title',
        description: 'description',
        userId: '1'
    }
};

export const Dark = Template.bind({});
Dark.args = {
    item: {
        id: '1',
        title: 'Title',
        description: 'description',
        userId: '1'
    }
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];