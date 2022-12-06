import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Theme} from '@/app/providers/ThemeProvider';
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator';
import {ForbiddenPage} from './ForbiddenPage';

export default {
    title: 'folder/ForbiddenPage',
    component: ForbiddenPage,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof ForbiddenPage>;

const Template: ComponentStory<typeof ForbiddenPage> = (args) => <ForbiddenPage {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];