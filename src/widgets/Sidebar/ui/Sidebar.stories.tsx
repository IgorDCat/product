import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator';
import {Sidebar} from './Sidebar';
import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator';
import {Theme} from '@/shared/const/theme';

export default {
    title: 'widgets/Sidebar',
    component: Sidebar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Sidebar>;

const Template: ComponentStory<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({})]

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];

export const LightAuth = Template.bind({});
LightAuth.args = {
};
LightAuth.decorators = [StoreDecorator({
    user: {
        authData: {}
    }
})];

export const DarkAuth = Template.bind({});
DarkAuth.args = {

};
DarkAuth.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({
    user: {
        authData: {}
    }
})];
