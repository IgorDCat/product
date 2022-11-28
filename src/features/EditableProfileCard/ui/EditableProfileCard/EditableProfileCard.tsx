import {Countries} from 'entities/Country';
import {Currency} from 'entities/Currency';
import {ProfileCard} from 'entities/Profile';
import React, {memo, useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {classNames} from 'shared/lib/classNames/classNames';
import {DynamicModuleLoader, ReducersList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {useInitialEffect} from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import {VStack} from 'shared/ui/Stack';
import {Text, TextTheme} from 'shared/ui/Text/Text';
import {getProfileError} from '../../model/selectors/getProfileError/getProfileError';
import {getProfileForm} from '../../model/selectors/getProfileForm/getProfileForm';
import {getProfileIsLoading} from '../../model/selectors/getProfileIsLoading/getProfileIsLoading';
import {getProfileReadonly} from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import {getProfileValidateErrors} from '../../model/selectors/getProfileValidateErrors/getProfileValidateErrors';
import {fetchProfileData} from '../../model/services/fetchProfileData/fetchProfileData';
import {profileActions, profileReducer} from '../../model/slice/profileSlice';
import {ValidateProfileError} from '../../model/types/editableProfileCardSchema';
import {EditableProfileCardHeader} from '../EditableProfileCardHeader/EditableProfileCardHeader';

interface EditableProfileCardProps {
    className?: string;
    id: string;
}

const reducers: ReducersList = {
    profile: profileReducer
}

export const EditableProfileCard = memo((props: EditableProfileCardProps) => {
    const {className, id} = props;
    const {t} = useTranslation('profile');
    const dispatch = useAppDispatch();
    const formData = useSelector(getProfileForm);
    const isLoading = useSelector(getProfileIsLoading);
    const error = useSelector(getProfileError);
    const readonly = useSelector(getProfileReadonly);
    const validateErrors = useSelector(getProfileValidateErrors);

    useInitialEffect(() => {
        dispatch(fetchProfileData(id));
    });

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
        <DynamicModuleLoader reducers={reducers}>
            <EditableProfileCardHeader/>
            <VStack max className={classNames('', {}, [className])}>
                {validateErrors?.length && validateErrors.map((err: ValidateProfileError) => {
                    return <Text title={validateErrorTranslates[err]} theme={TextTheme.ERROR} key={err}/>
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
            </VStack>
        </DynamicModuleLoader>
    );
});