import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator';
import {ArticleViewSwitcher} from './ArticleViewSwitcher';
import {Theme} from '@/shared/const/theme';

export default {
    title: 'features/ArticleViewSwitcher',
    component: ArticleViewSwitcher,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof ArticleViewSwitcher>;

const Template: ComponentStory<typeof ArticleViewSwitcher> = (args) => <ArticleViewSwitcher {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];