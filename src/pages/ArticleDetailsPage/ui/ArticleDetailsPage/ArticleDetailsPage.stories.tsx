import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Theme} from 'app/providers/ThemeProvider';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator';
import ArticleDetailsPage from './ArticleDetailsPage';
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator';
import {articleForStories} from 'shared/assets/tests/ArticleForStories';

export default {
    title: 'pages/ArticleDetailsPage',
    component: ArticleDetailsPage,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => <ArticleDetailsPage {...args}/>;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({articleDetails: {data: articleForStories} })];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];