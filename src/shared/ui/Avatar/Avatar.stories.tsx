import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {Avatar} from './Avatar';

export default {
    title: 'shared/Avatar',
    component: Avatar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

export const Light = Template.bind({});
Light.args = {};
