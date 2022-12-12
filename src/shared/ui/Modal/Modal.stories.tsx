import {Theme} from '@/shared/const/theme';
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator';
import {Modal} from './Modal';

export default {
    title: 'shared/Modal',
    component: Modal,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => <Modal {...args} />;

export const Light = Template.bind({});
Light.args = {
    isOpen: true,
    children: 'text of modal',
    disablePortal: true,
};

export const Dark = Template.bind({});
Dark.args = {
    isOpen: true,
    children: 'text of modal',
    disablePortal: true,
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];