import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';
import {Flex} from './Flex';

export default {
    title: 'folder/Flex',
    component: Flex,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Flex>;

const Template: ComponentStory<typeof Flex> = (args) => <Flex {...args} />;

export const Row = Template.bind({});
Row.args = {
    children: (
        <>
            <div>-text-</div>
            <div>-text-</div>
            <div>-text-</div>
            <div>-text-</div>
        </>
    )
};

export const Column = Template.bind({});
Column.args = {
    children: (
        <>
            <div>-text-</div>
            <div>-text-</div>
            <div>-text-</div>
            <div>-text-</div>
        </>
    ),
    direction: 'column'
};

export const ColumnGap16 = Template.bind({});
ColumnGap16.args = {
    children: (
        <>
            <div>-text-</div>
            <div>-text-</div>
            <div>-text-</div>
            <div>-text-</div>
        </>
    ),
    direction: 'column',
    gap: '16'
};

export const RowGap32 = Template.bind({});
RowGap32.args = {
    children: (
        <>
            <div>-text-</div>
            <div>-text-</div>
            <div>-text-</div>
            <div>-text-</div>
        </>
    ),
    gap: '32'
};