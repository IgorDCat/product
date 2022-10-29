import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Theme} from 'app/providers/ThemeProvider';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator';
import {ProfileCard} from './ProfileCard';
import avatar from 'shared/assets/tests/storybook.jpg'

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

export const Light = Template.bind({});
Light.args = {
    data: {
        firstname: 'Igor',
        lastname: 'Davydov',
        age: 30,
        city: 'Los-Angeles',
        username: 'admin',
        avatar
    },
};

export const Dark = Template.bind({});
Dark.args = {
    data: {
        firstname: 'Igor',
        lastname: 'Davydov',
        age: 30,
        city: 'Los-Angeles',
        username: 'admin',
        avatar
    },
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const Loading = Template.bind({});
Loading.args = {
    isLoading: true
};

export const WithError = Template.bind({});
WithError.args = {
    error: 'true'
};
