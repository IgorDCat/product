import React, {InputHTMLAttributes, memo} from 'react';
import {classNames, Mods} from 'shared/lib/classNames/classNames';
import cls from './Input.module.scss';

type HTMLInputProps =
    Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'placeholder | readOnly'>

interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string | number;
    onChange?: (value: string) => void;
    placeholder?: string;
    readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {className, value, onChange, type = 'text', readonly, ...otherProps} = props;

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value)
    }

    const mods: Mods = {
        [cls.readonly]: readonly
    }

    return (
        <input
            className={classNames(cls.Input, mods, [className])}
            type={type}
            value={value}
            onChange={onChangeHandler}
            readOnly={readonly}
            {...otherProps}/>
    );
})