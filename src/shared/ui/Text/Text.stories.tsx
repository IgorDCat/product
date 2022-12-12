import {Theme} from '@/shared/const/theme';
import React from 'react';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator';
import {Text, TextSize, TextTheme} from './Text';

export default {
    title: 'shared/Text',
    component: Text,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Light = Template.bind({});
Light.args = {
    title: 'Text of title',
    text: 'Text of description'
};

export const Dark = Template.bind({});
Dark.args = {
    title: 'Text of title',
    text: 'Text of description'
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];

export const ErrorLight = Template.bind({});
ErrorLight.args = {
    title: 'Text of title',
    text: 'Text of description',
    theme: TextTheme.ERROR
};

export const ErrorDark = Template.bind({});
ErrorDark.args = {
    title: 'Text of title',
    text: 'Text of description',
    theme: TextTheme.ERROR
};
ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SizeL = Template.bind({});
SizeL.args = {
    title: 'Text of title',
    text: 'Text of description',
    size: TextSize.L
};
export const SizeM = Template.bind({});
SizeM.args = {
    title: 'Text of title',
    text: 'Text of description',
    size: TextSize.M
};
export const SizeS = Template.bind({});
SizeS.args = {
    title: 'Text of title',
    text: 'Text of description',
    size: TextSize.S
};