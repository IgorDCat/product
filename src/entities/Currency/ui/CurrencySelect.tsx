import React, {memo, useCallback} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {ListBox} from 'shared/ui/ListBox/ListBox';
import {useTranslation} from 'react-i18next';
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
        <ListBox className={classNames('', {}, [className])}
            label={t('Your currency: ')}
            items={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
})