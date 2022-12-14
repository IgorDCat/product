import {Countries} from '@/entities/Country';
import {Currency} from '@/entities/Currency';
import {Theme} from '@/shared/const/theme';
import {ComponentMeta, ComponentStory} from '@storybook/react';
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator';
import ProfilePage from './ProfilePage';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator';
import avatar from '@/shared/assets/tests/storybook.jpg';

export default {
    title: 'pages/ProfilePage',
    component: ProfilePage,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof ProfilePage>;

const Template: ComponentStory<typeof ProfilePage> = (args) => <ProfilePage {...args} />;

const profile = {
    form: {
        firstname: 'Igor',
        lastname: 'Davydov',
        age: 30,
        city: 'Los-Angeles',
        username: 'admin',
        avatar,
        country: Countries.USA,
        currency: Currency.USD,
    }
}

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
    profile: profile
})];

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK),
    StoreDecorator({
        profile: profile
    })
];
