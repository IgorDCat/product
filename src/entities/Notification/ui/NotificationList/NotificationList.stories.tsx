import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator';
import {NotificationList} from './NotificationList';
import {Theme} from '@/shared/const/theme';
import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator';

const notification = {
    id: '1',
    title: 'Title of notification',
    description: 'Description of notification',
    userId: '1'
};

export default {
    title: 'entities/NotificationList',
    component: NotificationList,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
    parameters:  {
        mockData: [
            {
                url: __API__ + '/notifications',
                method: 'GET',
                status: 200,
                response: [
                    {...notification, id: '1'},
                    {...notification, id: '2'},
                    {...notification, id: '3'},
                    {...notification, id: '4'},
                    {...notification, id: '5'},
                ],
            },
        ],
    },
} as ComponentMeta<typeof NotificationList>;

const Template: ComponentStory<typeof NotificationList> = (args) => <NotificationList {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})]

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];