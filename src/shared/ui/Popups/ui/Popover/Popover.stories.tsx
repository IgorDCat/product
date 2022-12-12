import {Theme} from '@/shared/const/theme';
import {Button} from '../../../Button/Button';
import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator';
import {Popover} from './Popover';

export default {
    title: 'shared/Popover',
    component: Popover,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => <Popover {...args} />;

const children = <>
    <div>item of the popover</div>
    <div>item of the popover</div>
    <div>item of the popover</div>
</>

export const Light = Template.bind({});
Light.args = {
    trigger: <Button>Click me</Button>,
    children
};

export const Dark = Template.bind({});
Dark.args = {
    trigger: <Button>Click me</Button>,
    children
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];