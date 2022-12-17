import {articleForStories} from '@/shared/assets/tests/ArticleForStories';
import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator';

import {ArticleRecommendationsList} from './ArticleRecommendationsList';

export default {
    title: 'features/ArticleRecommendationsList',
    component: ArticleRecommendationsList,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
    parameters:  {
        mockData: [
            {
                url: __API__ + '/articles?_limit=4 ',
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
} as ComponentMeta<typeof ArticleRecommendationsList>;

const Template: ComponentStory<typeof ArticleRecommendationsList> = (args) => <ArticleRecommendationsList {...args} />;

export const Normal = Template.bind({});
Normal.args = {
   
};
Normal.decorators = [StoreDecorator({user: {authData: {}}})];