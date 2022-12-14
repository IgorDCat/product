import {DefaultTFuncReturn} from 'i18next';
import React, {ChangeEvent, ReactNode, useMemo} from 'react';
import {classNames, Mods} from '@/shared/lib/classNames/classNames';
import cls from './Select.module.scss';

export interface SelectOption<T extends string> {
    value: T;
    content: string;
}

interface SelectProps<T extends string> {
	className?: string;
    label?: string | DefaultTFuncReturn;
    options?: SelectOption<T>[];
    value?: T;
    onChange?: (value: T) => void;
    readonly?: boolean;
}

export const Select = <T extends string>(props: SelectProps<T>) => {
    const {className, label, options, value, onChange, readonly} = props;
    const mods: Mods = {}

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value as T);
    }

    const optionsList = useMemo((): ReactNode => {
        return options?.map(opt => {
            return (
                <option className={cls.option} value={opt.value} key={opt.value}>
                    {opt.content}
                </option>
            )
        })
    }, [options])

    return (
        <div className={classNames(cls.wrapper, mods, [className])}>
            {label && <span className={cls.label}>
                {label}
            </span>}
            <select className={cls.select} onChange={onChangeHandler} disabled={readonly} value={value}>
                {optionsList}
            </select>
        </div>
    );
}