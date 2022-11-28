import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Theme} from 'app/providers/ThemeProvider';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator';
import {Tabs} from './Tabs';
import {action} from '@storybook/addon-actions';

export default {
    title: 'shared/Tabs',
    component: Tabs,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Light = Template.bind({});
Light.args = {
    tabs: [
        {
            value: 'tab1',
            content: 'tab1'
        },
        {
            value: 'tab2',
            content: 'tab2'
        },
        {
            value: 'tab3',
            content: 'tab3'
        },
    ],
    selectedValue: 'tab1',
    onTabClick: action('onTabClick')
};

export const Dark = Template.bind({});
Dark.args = {
    tabs: [
        {
            value: 'tab1',
            content: 'tab1'
        },
        {
            value: 'tab2',
            content: 'tab2'
        },
        {
            value: 'tab3',
            content: 'tab3'
        },
    ],
    selectedValue: 'tab1',
    onTabClick: action('onTabClick')
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];