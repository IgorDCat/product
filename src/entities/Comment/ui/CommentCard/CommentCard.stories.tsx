import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator';
import {CommentCard} from './CommentCard';
import {Theme} from '@/shared/const/theme';

export default {
    title: 'entities/CommentCard',
    component: CommentCard,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof CommentCard>;

const Template: ComponentStory<typeof CommentCard> = (args) => <CommentCard {...args} />;

export const Light = Template.bind({});
Light.args = {
    comment: {
        id: '1',
        user: {
            id: '1',
            username: 'user'
        },
        text: 'test comment 123'
    }
};

export const Dark = Template.bind({});
Dark.args = {
    comment: {
        id: '1',
        user: {
            id: '1',
            username: 'user'
        },
        text: 'test comment 123'
    }
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];