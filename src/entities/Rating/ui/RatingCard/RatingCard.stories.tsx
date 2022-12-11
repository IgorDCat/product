import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Theme} from '@/app/providers/ThemeProvider';
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator';
import {RatingCard} from './RatingCard';

export default {
    title: 'entities/RatingCard',
    component: RatingCard,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof RatingCard>;

const Template: ComponentStory<typeof RatingCard> = (args) => <RatingCard {...args} />;

export const Light = Template.bind({});
Light.args = {canVote: true, averageRating: 4.5, numberOfVoters: 10};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];