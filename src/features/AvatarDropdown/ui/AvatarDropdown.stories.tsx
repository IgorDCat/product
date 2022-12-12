import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator';
import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator';
import {AvatarDropdown} from './AvatarDropdown';

export default {
    title: 'features/AvatarDropdown',
    component: AvatarDropdown,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = (args) => <AvatarDropdown {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({
    user: {
        authData: {avatar: 'https://cs8.pikabu.ru/avatars/2353/x2353828-1043405994.png'}
    }
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    user: {
        authData: {avatar: 'https://cs8.pikabu.ru/avatars/2353/x2353828-1043405994.png'}
    }
})];