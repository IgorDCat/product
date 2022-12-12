import {Theme} from '@/shared/const/theme';
import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator';
import {StarRating} from './StarRating';

export default {
    title: 'shared/StarRating',
    component: StarRating,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof StarRating>;

const Template: ComponentStory<typeof StarRating> = (args) => <StarRating {...args} />;

export const Light = Template.bind({});
Light.args = {canVote: true};

export const Dark = Template.bind({});
Dark.args = {canVote: true};
Dark.decorators = [ThemeDecorator(Theme.DARK)];