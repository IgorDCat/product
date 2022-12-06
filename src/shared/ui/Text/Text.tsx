import {DefaultTFuncReturn} from 'i18next';
import React, {memo} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './Text.module.scss';

export enum TextTheme {
    NORMAL = 'normal',
    ERROR = 'error'
}

export const enum TextAlign {
    RIGHT = 'right',
    LEFT = 'left',
    CENTER = 'center'
}

export const enum TextSize {
    S = 'size_s',
    M = 'size_m',
    L = 'size_l',
}

interface TextProps {
	className?: string;
    title?: string | DefaultTFuncReturn;
    text?: string | DefaultTFuncReturn;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
    'data-testid'?: string
}

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeOfHeaderTag: Record<TextSize, HeaderTagType> = {
    [TextSize.S]: 'h3',
    [TextSize.M]: 'h2',
    [TextSize.L]: 'h1',
}

export const Text = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.NORMAL,
        align = TextAlign.LEFT,
        size = TextSize.M,
        'data-testid': dataTestId = 'Text'
    } = props;

    const additional = [className, cls[theme], cls[align], cls[size]];
    const HeaderTag = mapSizeOfHeaderTag[size];

    return (
        <div className={classNames(cls.Text, {}, additional)}>
            {title && (
                <HeaderTag className={cls.title} data-testid={dataTestId + '.Header'}>
                    {title}
                </HeaderTag>
            )}
            {text && (
                <p className={cls.text} data-testid={dataTestId + '.Paragraph'}>
                    {text}
                </p>
            )}
        </div>
    );
})