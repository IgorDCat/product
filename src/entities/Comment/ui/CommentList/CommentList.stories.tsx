import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator';
import {CommentList} from './CommentList';
import {Theme} from '@/shared/const/theme';

export default {
    title: 'entities/CommentList',
    component: CommentList,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof CommentList>;

const Template: ComponentStory<typeof CommentList> = (args) => <CommentList {...args} />;

const comments = [
    {
        id: '1',
        user: {
            id: '1',
            username: 'User1'
        },
        text: 'text of comment 1'
    },
    {
        id: '2',
        user: {
            id: '2',
            username: 'User2'
        },
        text: 'text of comment 2'
    }
]

export const Light = Template.bind({});
Light.args = {
    comments: comments
};

export const Dark = Template.bind({});
Dark.args = {
    comments: comments
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];


export const Loading = Template.bind({});
Loading.args = {
    isLoading: true
};