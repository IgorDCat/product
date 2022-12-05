import React, {memo, useCallback} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {ListBox} from 'shared/ui/Popups/ui/ListBox/ListBox';
import {useTranslation} from 'react-i18next';
import {Countries} from '../model/country';

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
    const {t} = useTranslation('profile');

    const onChangeHandler = useCallback((value: string) => {
        onChange?.(value as Countries)
    }, [onChange])

    return (
        <ListBox className={classNames('', {}, [className])}
            label={t('Your country: ')}
            items={options}
            value={value}
            onChange={onChangeHandler}
            readonly={readonly}
        />
    );
})