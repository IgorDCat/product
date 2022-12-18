import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator';
import {Theme} from '@/shared/const/theme';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator';
import {AppImage} from './AppImage';

export default {
    title: 'folder/AppImage',
    component: AppImage,
    argTypes: {
        backgroundColor: {control: 'color'}
    }
} as ComponentMeta<typeof AppImage>;

const Template: ComponentStory<typeof AppImage> = (args) => <AppImage {...args} />;

export const Normal = Template.bind({});
Normal.args = {className: ''};
Normal.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];