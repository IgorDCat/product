import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator';
import {Card} from './Card';
import {Text} from '../Text/Text';
import {Theme} from '@/shared/const/theme';

export default {
    title: 'shared/Card',
    component: Card,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Light = Template.bind({});
Light.args = {
    children: <Text title={'Text'} text={'Test text'}/>
};

export const Dark = Template.bind({});
Dark.args = {
    children: <Text title={'Text'} text={'Test text'}/>
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];