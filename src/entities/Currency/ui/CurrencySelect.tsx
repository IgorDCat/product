import React, {memo, useCallback} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './CurrencySelect.module.scss';
import {useTranslation} from 'react-i18next';
import {Select} from 'shared/ui/Select/Select';
import {Currency} from '../model/types/currency';

interface CurrencySelectProps {
    className?: string;
    value?: Currency;
    onChange?: (value: Currency) => void;
    readonly?: boolean;
}

const options = [
    {value: Currency.EUR, content: Currency.EUR},
    {value: Currency.USD, content: Currency.USD},
    {value: Currency.GBP, content: Currency.GBP},
    {value: Currency.JPY, content: Currency.JPY}
]

export const CurrencySelect = memo((props: CurrencySelectProps) => {
    const {className, value, onChange, readonly} = props;
    const {t} = useTranslation('profile');

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Currency)
    }, [onChange])

    return (
        <Select className={classNames(cls.select, {}, [className])}
            label={t('Your currency:')}
            options={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
})