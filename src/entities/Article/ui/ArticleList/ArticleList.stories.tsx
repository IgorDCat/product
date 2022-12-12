import {Theme} from '@/shared/const/theme';
import {ArticleView} from '../../model/consts/articleConsts';
import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator';
import {ArticleList} from './ArticleList';
import {articleForStories} from '@/shared/assets/tests/ArticleForStories';

export default {
    title: 'entities/ArticleList',
    component: ArticleList,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => <ArticleList {...args} />;

export const Light = Template.bind({});
Light.args = {
    articles: [articleForStories, articleForStories, articleForStories],
    view: ArticleView.SMALL
};

export const Dark = Template.bind({});
Dark.args = {
    articles: [articleForStories, articleForStories, articleForStories],
    view: ArticleView.SMALL
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];