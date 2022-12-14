import {Theme} from '@/shared/const/theme';
import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator';
import {ArticleSortSwitcher} from './ArticleSortSwitcher';

export default {
    title: 'features/ArticleSortSwitcher',
    component: ArticleSortSwitcher,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof ArticleSortSwitcher>;

const Template: ComponentStory<typeof ArticleSortSwitcher> = (args) => <ArticleSortSwitcher {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];