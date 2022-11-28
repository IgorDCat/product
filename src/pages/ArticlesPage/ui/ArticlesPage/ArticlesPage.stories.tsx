import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Theme} from 'app/providers/ThemeProvider';
import {ArticleSortField, ArticleType, ArticleView} from 'entities/Article';
import React from 'react';
import {articleForStories} from 'shared/assets/tests/ArticleForStories';
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator';
import {SortOrder} from 'shared/types';
import ArticlesPage from './ArticlesPage';

export default {
    title: 'pages/ArticlesPage',
    component: ArticlesPage,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args) => <ArticlesPage {...args} />;

const article1 = articleForStories;
const article2 = articleForStories;
const article3 = articleForStories;
const article4 = articleForStories;
const article5 = articleForStories;
const article6 = articleForStories;
const article7 = articleForStories;
const article8 = articleForStories;

const props = {
    isLoading: false,
    error: undefined,
    view: ArticleView.SMALL,
    page: 1,
    hasMore: true,
    ids: ['1', '1', '1', '1', '1', '1', '1', '1', '1',],
    entities: {articleForStories, article1, article2, article3, article4, article5, article6, article7, article8, },
    _initialized: false,
    limit: 9,
    order: 'asc' as SortOrder,
    search: '',
    sort: ArticleSortField.CREATED,
    type: ArticleType.ALL
}

export const Light = Template.bind({});
Light.args = {
    className: '132'
};
Light.decorators = [StoreDecorator({articlesPage: props, })];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];