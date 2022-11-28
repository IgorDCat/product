import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Theme} from 'app/providers/ThemeProvider';
import {StoreDecorator} from 'shared/config/storybook/StoreDecorator';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator';
import ArticleEditPage from './ArticleEditPage';

export default {
    title: 'pages/ArticleEditPage',
    component: ArticleEditPage,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof ArticleEditPage>;

const Template: ComponentStory<typeof ArticleEditPage> = (args) => <ArticleEditPage {...args} />;

export const Normal1 = Template.bind({});
Normal1.args = {};
Normal1.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];