import React, {useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import {Button, ThemeButton} from 'shared/ui/Button/Button';
import {HStack} from 'shared/ui/Stack';
import {Text} from 'shared/ui/Text/Text';
import {useSelector} from 'react-redux';
import {getProfileData, getProfileReadonly, profileActions, updateProfileData} from 'entities/Profile';
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {getUserAuthData} from 'entities/User';


export const ProfilePageHeader = () => {
    const {t} = useTranslation('profile');
    const authData = useSelector(getUserAuthData);
    const profileData = useSelector(getProfileData);
    const canEdit = authData?.id === profileData?.id;
    const readonly = useSelector(getProfileReadonly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadonly(false))
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.cancelEdit())
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <HStack justify={'between'} max>
            <Text title={t('Profile')}/>
            {canEdit &&
            <div>
                {readonly ?
                    <Button theme={ThemeButton.OUTLINE} onClick={onEdit}>
                        {t('Edit')}
                    </Button>
                    :
                    <HStack gap={'5'}>
                        <Button theme={ThemeButton.OUTLINE_RED} onClick={onCancelEdit}>
                            {t('Cancel')}
                        </Button>
                        <Button theme={ThemeButton.OUTLINE} onClick={onSave}>
                            {t('Save')}
                        </Button>
                    </HStack>
                }
            </div>}

        </HStack>
    );
}