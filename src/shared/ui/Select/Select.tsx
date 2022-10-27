import React, {ChangeEvent, memo, ReactNode, useMemo} from "react";
import {classNames, Mods} from "shared/lib/classNames/classNames";
import cls from "./Select.module.scss";

interface SelectOption {
    value: string;
    content: string;
}

interface SelectProps {
	className?: string;
    label?: string;
    options?: SelectOption[];
    value?: string;
    onChange?: (value: string) => void;
    readonly?: boolean;
}

export const Select = memo((props: SelectProps) => {
    const {className, label, options, value, onChange, readonly} = props;
    const mods: Mods = {}

    const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value)
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
})