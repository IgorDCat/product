import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Theme} from '@/app/providers/ThemeProvider';
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator';
import {AvatarDropdown} from './AvatarDropdown';

export default {
    title: 'folder/AvatarDropdown',
    component: AvatarDropdown,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof AvatarDropdown>;

const Template: ComponentStory<typeof AvatarDropdown> = (args) => <AvatarDropdown {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];