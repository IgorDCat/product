import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator';
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator';
import {Page} from './Page';
import {Theme} from '@/shared/const/theme';

export default {
    title: 'widgets/Page',
    component: Page,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Page>;

const Template: ComponentStory<typeof Page> = (args) => <Page {...args} />;

export const Light = Template.bind({});
Light.args = {children: <div>this is page template</div>};
Light.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {children: <div>this is page template</div>};
Dark.decorators = [ StoreDecorator({}), ThemeDecorator(Theme.DARK)];