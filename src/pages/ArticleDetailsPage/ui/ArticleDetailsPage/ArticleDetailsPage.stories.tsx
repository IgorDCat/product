import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator';
import ArticleDetailsPage from './ArticleDetailsPage';
import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator';
import {articleForStories} from '@/shared/assets/tests/ArticleForStories';
import {Theme} from '@/shared/const/theme';

export default {
    title: 'pages/ArticleDetailsPage',
    component: ArticleDetailsPage,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
    parameters:  {
        mockData: [
            {
                url: __API__ + '/articles?_limit=4',
                method: 'GET',
                status: 200,
                response: [
                    {...articleForStories, id: 1},
                    {...articleForStories, id: 2},
                    {...articleForStories, id: 3},
                    {...articleForStories, id: 4},
                ],
            },
        ],
    },
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => <ArticleDetailsPage {...args}/>;

export const Light = Template.bind({});
Light.args = {};
Light.decorators = [StoreDecorator({articleDetails: {data: articleForStories} })];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({articleDetails: {data: articleForStories} })];