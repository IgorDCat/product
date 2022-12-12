// eslint-disable-next-line fsd-path-checker/layer-imports
import '@/app/styles/index.scss';
import {Theme} from '@/shared/const/theme';
import { Story } from '@storybook/react';


export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) => (
    <div className={`app ${theme}`}>
        <StoryComponent/>
    </div>
)
