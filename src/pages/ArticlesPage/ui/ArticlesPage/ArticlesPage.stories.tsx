import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Theme} from 'app/providers/themeProvider';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator';
import ArticlesPage from './ArticlesPage';

export default {
    title: 'folder/ArticlesPage',
    component: ArticlesPage,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args) => <ArticlesPage {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];