import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';
import {Button, ThemeButton} from '../Button/Button';
import {Dropdown} from './Dropdown';

export default {
    title: 'folder/Dropdown',
    component: Dropdown,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
    decorators: [
        (Story) => <div style={{padding: 300}}><Story/></div>
    ]
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

const items = [
    {content: 'text 1 asdsdfsdfsdfs'},
    {content: 'text 2 asdsdfsdfsdfs'},
    {content: 'text 3 asdsdfsdfsdfs'},
];

export const BottomRight = Template.bind({});
BottomRight.args = {
    items: items,
    trigger: <Button theme={ThemeButton.OUTLINE}>OPEN</Button>,
    direction: 'bottom right'
};
export const BottomLeft = Template.bind({});
BottomLeft.args = {
    items: items,
    trigger: <Button theme={ThemeButton.OUTLINE}>OPEN</Button>,
    direction: 'bottom left'
};
export const TopRight = Template.bind({});
TopRight.args = {
    items: items,
    trigger: <Button theme={ThemeButton.OUTLINE}>OPEN</Button>,
    direction: 'top right'
};
export const TopLeft = Template.bind({});
TopLeft.args = {
    items: items,
    trigger: <Button theme={ThemeButton.OUTLINE}>OPEN</Button>,
    direction: 'top left'
};

// export const Dark = Template.bind({});
// Dark.args = {};
// Dark.decorators = [ThemeDecorator(Theme.DARK)];