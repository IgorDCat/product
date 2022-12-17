import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator';
import {ArticleDetails} from './ArticleDetails';
import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator';
import {articleForStories} from '@/shared/assets/tests/ArticleForStories';
import {Theme} from '@/shared/const/theme';

export default {
    title: 'entities/ArticleDetails',
    component: ArticleDetails,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof ArticleDetails>;

const Template: ComponentStory<typeof ArticleDetails> = (args) => <ArticleDetails {...args} />;


export const Light = Template.bind({});
Light.args = {

};
Light.decorators = [StoreDecorator({articleDetails: {data: articleForStories} })];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK),
    StoreDecorator({articleDetails: {data: articleForStories} })];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [StoreDecorator({articleDetails: {isLoading: true} })];

export const Error = Template.bind({});
Error.args = {};
Error.decorators = [StoreDecorator({articleDetails: {error: 'error'} })];