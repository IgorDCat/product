import React, {memo} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
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
    M = 'size_m',
    L = 'size_l',
}

interface TextProps {
	className?: string;
    title?: string;
    text?: string;
    theme?: TextTheme;
    align?: TextAlign;
    size?: TextSize;
}

export const TextCustom = memo((props: TextProps) => {
    const {
        className,
        title,
        text,
        theme = TextTheme.NORMAL,
        align = TextAlign.LEFT,
        size = TextSize.M
    } = props;

    const additional = [className, cls[theme], cls[align], cls[size]]

    return (
        <div className={classNames(cls.Text, {}, additional)}>
            {title && <p className={cls.title}>
                {title}
            </p>}
            {text && <p className={cls.text}>
                {text}
            </p>}
        </div>
    );
})