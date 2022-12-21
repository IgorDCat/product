import {StoreDecorator} from '@/shared/config/storybook/StoreDecorator';
import {Theme} from '@/shared/const/theme';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator';
import {AppImage} from './AppImage';

export default {
    title: 'shared/AppImage',
    component: AppImage,
    argTypes: {
        backgroundColor: {control: 'color'}
    }
} as ComponentMeta<typeof AppImage>;

const Template: ComponentStory<typeof AppImage> = (args) => <AppImage {...args} />;

export const Normal = Template.bind({});
Normal.args = {
    src: 'https://pbs.twimg.com/profile_images/1538837176863039489/h3lHCMMF_400x400.jpg'
};
Normal.decorators = [StoreDecorator({})];

export const Dark = Template.bind({});
Dark.args = {
    src: 'https://pbs.twimg.com/profile_images/1538837176863039489/h3lHCMMF_400x400.jpg'
};
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})];