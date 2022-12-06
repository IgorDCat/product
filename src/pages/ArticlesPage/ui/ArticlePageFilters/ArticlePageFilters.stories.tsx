import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Theme} from '@/app/providers/ThemeProvider';
import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator';
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator';
import {ArticlePageFilters} from './ArticlePageFilters';

export default {
    title: 'pages/ArticlePageFilters',
    component: ArticlePageFilters,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof ArticlePageFilters>;

const Template: ComponentStory<typeof ArticlePageFilters> = (args) => <ArticlePageFilters {...args} />;

export const LightFilter = Template.bind({});
LightFilter.args = {};
LightFilter.decorators = [StoreDecorator({})];

export const DarkFilter = Template.bind({});
DarkFilter.args = {};
DarkFilter.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];