import {Theme} from '@/shared/const/theme';
import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {ThemeDecorator} from '@/shared/config/storybook/ThemeDecorator';
import {Code} from './Code';

export default {
    title: 'shared/Code',
    component: Code,
    argTypes: {
        backgroundColor: {control: 'color'},
    },
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Light = Template.bind({});
Light.args = {
    text: 'import React, {memo, ReactNode} from \'react\';\n' +
        'import {classNames} from \'shared/lib/classNames/classNames\';\n' +
        'import cls from \'./Code.module.scss\';\n' + '\n' + ' CodeProps {\n' + '    className?: string;\n' +
        '    child: ReactNode;\n' + '}\n' + '\n' + 'export const Code = memo(({className, child}: CodeProps) => {\n' +
        '    return (\n' + '        <code className={classNames(cls.Code, {}, [className])}>\n' +
        '            {child}\n' + '        </code>\n' + '    );\n' + '})'
};

export const Dark = Template.bind({});
Dark.args = {
    text: 'import React, {memo, ReactNode} from \'react\';\n' +
        'import {classNames} from \'shared/lib/classNames/classNames\';\n' +
        'import cls from \'./Code.module.scss\';\n' + '\n' + ' CodeProps {\n' + '    className?: string;\n' +
        '    child: ReactNode;\n' + '}\n' + '\n' + 'export const Code = memo(({className, child}: CodeProps) => {\n' +
        '    return (\n' + '        <code className={classNames(cls.Code, {}, [className])}>\n' +
        '            {child}\n' + '        </code>\n' + '    );\n' + '})'
};
Dark.decorators = [ThemeDecorator(Theme.DARK)];