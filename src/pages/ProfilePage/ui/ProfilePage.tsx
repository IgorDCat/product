import React, {useCallback, useEffect} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {DynamicModuleLoader, ReducersList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {
    fetchProfileData,
    getProfileError,
    getProfileForm,
    getProfileIsLoading,
    getProfileReadonly,
    getProfileValidateErrors,
    profileActions,
    ProfileCard,
    profileReducer
} from 'entities/Profile';
import {useSelector} from 'react-redux';
import {ProfilePageHeader} from './ProfilePageHeader/ProfilePageHeader';
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {Currency} from 'entities/Currency';
import {Countries} from 'entities/Country';
import {Text, TextTheme} from 'shared/ui/Text/Text';
import {ValidateProfileError} from 'entities/Profile/model/types/profile';
import {useTranslation} from 'react-i18next';

interface ProfilePageProps {
    className?: string;
    isStories?: boolean;
}

const reducers: ReducersList = {
    profile: profileReducer
}

const ProfilePage = ({className, isStories = false}: ProfilePageProps) => {
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);
    const {t} = useTranslation('profile');

    useEffect(() => {
        if (!isStories) {
            dispatch(fetchProfileData())
        }
    }, [dispatch, isStories]);

    const validateErrorTranslates = {
        [ValidateProfileError.SERVER_ERROR]: t('Server error'),
        [ValidateProfileError.NO_DATA]: t('No data'),
        [ValidateProfileError.INCORRECT_AGE]: t('Incorrect age'),
        [ValidateProfileError.INCORRECT_USER_DATA]: t('Name and lastname is required'),
    }

    const onChangeFirstname = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({firstname: value}))
    }, [dispatch]);

    const onChangeLastname = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({lastname: value}))
    }, [dispatch]);

    const onChangeCity = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({city: value}))
    }, [dispatch]);

    const onChangeAge = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({age: Number(value || 0)}))
    }, [dispatch]);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({username: value}))
    }, [dispatch]);

    const onChangeAvatar = useCallback((value: string) => {
        dispatch(profileActions.updateProfile({avatar: value || ''}))
    }, [dispatch]);

    const onChangeCurrency = useCallback((currency: Currency) => {
        dispatch(profileActions.updateProfile({currency}))
    }, [dispatch]);

    const onChangeCountry = useCallback((country: Countries) => {
        dispatch(profileActions.updateProfile({country}))
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames('', {}, [className])}>
                <ProfilePageHeader/>
                {validateErrors?.length && validateErrors.map((err: ValidateProfileError) => {
                    return  <Text title={validateErrorTranslates[err]} theme={TextTheme.ERROR} key={err}/>
                })}
                <ProfileCard
                    data={formData}
                    isLoading={isLoading}
                    error={error}
                    onChangeFirstname={onChangeFirstname}
                    onChangeLastname={onChangeLastname}
                    onChangeCity={onChangeCity}
                    onChangeAge={onChangeAge}
                    readonly={readonly}
                    onChangeUsername={onChangeUsername}
                    onChangeAvatar={onChangeAvatar}
                    onChangeCurrency={onChangeCurrency}
                    onChangeCountry={onChangeCountry}
                />
            </div>
        </DynamicModuleLoader>
    );
}

export default ProfilePage