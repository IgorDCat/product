import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator';
import {Theme} from '@/shared/const/theme';
import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator';
import {NotificationButton} from './NotificationButton';

const notification = {
    id: '1',
    title: 'Title of notification',
    description: 'Description of notification Description of notification Description of notification ',
    userId: '1'
}

export default {
    title: 'features/NotificationButton',
    component: NotificationButton,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
    parameters:  {
        mockData: [
            {
                url: 'http:/localhost:3000/notifications',
                method: 'GET',
                status: 200,
                response: [
                    {...notification, id: 1},
                    {...notification, id: 2},
                    {...notification, id: 3},
                    {...notification, id: 4},
                    {...notification, id: 5},
                ],
            },
        ],
    },
} as ComponentMeta<typeof NotificationButton>;

const Template: ComponentStory<typeof NotificationButton> = (args) => <NotificationButton {...args} />;

export const Light = Template.bind({});
Light.args = {className: 'storybook'};
Light.decorators = [StoreDecorator({user: {authData: {id: '1'}}})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];