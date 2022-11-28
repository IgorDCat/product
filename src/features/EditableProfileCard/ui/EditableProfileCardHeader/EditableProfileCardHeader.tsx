import {getUserAuthData} from 'entities/User';
import React, {memo, useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {Button, ThemeButton} from 'shared/ui/Button/Button';
import {HStack} from 'shared/ui/Stack';
import {Text} from 'shared/ui/Text/Text';
import {getProfileData} from '../../model/selectors/getProfileData/getProfileData';
import {getProfileReadonly} from '../../model/selectors/getProfileReadonly/getProfileReadonly';
import {updateProfileData} from '../../model/services/updateProfileData/updateProfileData';
import {profileActions} from '../../model/slice/profileSlice';


export const EditableProfileCardHeader = memo(() => {
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
})