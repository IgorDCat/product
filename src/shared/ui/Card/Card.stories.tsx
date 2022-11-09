import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Theme} from 'app/providers/ThemeProvider';
import {ThemeDecorator} from 'shared/config/storybook/ThemeDecorator';
import {Card} from './Card';
import {TextCustom} from '../Text/TextCustom';

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
    children: <TextCustom title={'Text'} text={'Test text'}/>
};

export const Dark = Template.bind({});
Dark.args = {
    children: <TextCustom title={'Text'} text={'Test text'}/>
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];