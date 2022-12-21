import {Countries, CountrySelect} from '@/entities/Country';
import {Currency, CurrencySelect} from '@/entities/Currency';
import {classNames} from '@/shared/lib/classNames/classNames';
import {Avatar} from '@/shared/ui/Avatar';
import {Input} from '@/shared/ui/Input';
import {Loader} from '@/shared/ui/Loader';
import {HStack, VStack} from '@/shared/ui/Stack';
import {Text, TextAlign, TextTheme} from '@/shared/ui/Text';
import React from 'react';
import {useTranslation} from 'react-i18next';
import {Profile} from '../../model/types/profile';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string
    onChangeFirstname?: (value: string) => void;
    onChangeLastname?: (value: string) => void;
    onChangeCity?: (value: string) => void;
    onChangeAge?: (value: string) => void;
    onChangeUsername?: (value: string) => void;
    onChangeAvatar?: (value: string) => void;
    readonly?: boolean;
    onChangeCurrency?: (currency: Currency) => void;
    onChangeCountry?: (country: Countries) => void;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className,
        data,
        isLoading,
        error = undefined,
        onChangeFirstname,
        onChangeLastname,
        readonly,
        onChangeCity,
        onChangeAge,
        onChangeUsername,
        onChangeAvatar,
        onChangeCurrency,
        onChangeCountry
    } = props;
    const {t} = useTranslation('profile');

    if(isLoading) {
        return (
            <HStack
                justify={'center'}
                max
                className={classNames(cls.ProfileCard, {}, [className, cls.loading])}
            >
                <Loader/>
            </HStack>
        )
    }

    if(error) {
        return (
            <HStack
                className={classNames(cls.ProfileCard, {}, [className, cls.error])}
                max
                justify='center'
            >
                <Text
                    theme={TextTheme.ERROR}
                    title={t('Some error has occurred')}
                    text={t('Try refresh the page')}
                    align={TextAlign.CENTER}
                />
            </HStack>
        )
    }

    return (
        <VStack gap={'10'} max className={classNames(cls.ProfileCard, {}, [className])}>

            <HStack max justify={'center'} className={cls.avatar}>
                <Avatar src={data?.avatar} size={200} alt=""/>
            </HStack>

            <VStack gap={'10'} className={cls.info}>
                <Input value={data?.firstname}
                    placeholder={t('Your firstname')}
                    className={cls.input}
                    onChange={onChangeFirstname}
                    readonly={readonly}
                    data-testid='ProfileCard.firstname'
                />
                <Input value={data?.lastname}
                    placeholder={t('Your lastname')}
                    className={cls.input}
                    onChange={onChangeLastname}
                    readonly={readonly}
                    data-testid='ProfileCard.lastname'
                />
                <Input value={data?.city}
                    placeholder={t('Your city')}
                    className={cls.input}
                    onChange={onChangeCity}
                    readonly={readonly}
                />
                <Input value={data?.age}
                    placeholder={t('Your age')}
                    className={cls.input}
                    onChange={onChangeAge}
                    readonly={readonly}
                />
                <Input value={data?.username}
                    placeholder={t('Enter your username')}
                    className={cls.input}
                    onChange={onChangeUsername}
                    readonly={readonly}
                />
                <Input value={data?.avatar}
                    placeholder={t('Your avatar link')}
                    className={cls.input}
                    onChange={onChangeAvatar}
                    readonly={readonly}
                />
                <CurrencySelect value={data?.currency}
                    className={cls.input}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />
                <CountrySelect value={data?.country}
                    className={cls.input}
                    onChange={onChangeCountry}
                    readonly={readonly}
                />
            </VStack>
        </VStack>
    );
}