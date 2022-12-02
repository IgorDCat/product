import {ArticleView} from '../../model/consts/articleConsts';
import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Theme} from 'app/providers/ThemeProvider';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator';
import {ArticleListItem} from './ArticleListItem';
import {articleForStories} from 'shared/assets/tests/ArticleForStories';

export default {
    title: 'entities/ArticleListItem',
    component: ArticleListItem,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof ArticleListItem>;

const Template: ComponentStory<typeof ArticleListItem> = (args) => <ArticleListItem {...args} />;

export const Light = Template.bind({});
Light.args = {
    article: articleForStories,
    view: ArticleView.SMALL
};

export const Dark = Template.bind({});
Dark.args = {
    article: articleForStories,
    view: ArticleView.SMALL
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const LightBig = Template.bind({});
LightBig.args = {
    article: articleForStories,
    view: ArticleView.BIG
};

export const DarkBig = Template.bind({});
DarkBig.args = {
    article: articleForStories,
    view: ArticleView.BIG
};
DarkBig.decorators = [ThemeDecorator(Theme.DARK)];