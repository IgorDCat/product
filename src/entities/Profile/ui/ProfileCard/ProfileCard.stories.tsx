import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator';
import {ProfileCard} from './ProfileCard';
import avatar from '@/shared/assets/tests/storybook.jpg';
import {Theme} from '@/shared/const/theme';
import {Countries} from '@/entities/Country';
import {Currency} from '@/entities/Currency';

export default {
    title: 'entities/ProfileCard',
    component: ProfileCard,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfileCard>;

const Template: ComponentStory<typeof ProfileCard> = (args) => <ProfileCard {...args} />;

const data = {
    firstname: 'Igor',
    lastname: 'Davydov',
    age: 30,
    city: 'Los-Angeles',
    username: 'admin',
    avatar,
    country: Countries.Great_Britain,
    currency: Currency.GBP
}

export const Light = Template.bind({});
Light.args = {
    data: data,
    readonly: true
};

export const Dark = Template.bind({});
Dark.args = {
    data: data,
    readonly: true
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
