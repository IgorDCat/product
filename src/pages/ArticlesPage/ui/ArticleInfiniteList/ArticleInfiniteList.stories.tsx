import {ComponentMeta, ComponentStory} from '@storybook/react';
import {Theme} from 'app/providers/ThemeProvider';
import React from 'react';
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator';
import {ArticleInfiniteList} from './ArticleInfiniteList';

export default {
    title: 'pages/ArticleInfiniteList',
    component: ArticleInfiniteList,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ArticleInfiniteList>;

const Template: ComponentStory<typeof ArticleInfiniteList> = (args) => <ArticleInfiniteList {...args} />;


export const Light = Template.bind({});
Light.args = {
    className: '36456'
};
Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];