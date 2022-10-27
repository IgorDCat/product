import React, {memo, useCallback} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./CountrySelect.module.scss";
import {useTranslation} from "react-i18next";
import {Select} from "shared/ui/Select/Select";
import {Countries} from "../model/country";

interface CountrySelectProps {
    className?: string;
    value?: Countries;
    onChange?: (value: Countries) => void;
    readonly?: boolean;
}

const options = [
    {value: Countries.Germany, content: Countries.Germany},
    {value: Countries.USA, content: Countries.USA},
    {value: Countries.Great_Britain, content: Countries.Great_Britain},
    {value: Countries.Japan, content: Countries.Japan},
]

export const CountrySelect = memo((props: CountrySelectProps) => {
    const {className, value, onChange, readonly} = props;
    const {t} = useTranslation();

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Countries)
    }, [onChange])

    return (
        <Select className={classNames(cls.select, {}, [className])}
            label={t("Your country")}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
})