import {getUserAuthData, isUserAdmin, isUserManager, userActions} from '@/entities/User';
import {RoutePath} from '@/shared/const/router';
import React, {memo, useCallback} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {classNames} from '@/shared/lib/classNames/classNames';
import {Avatar} from '@/shared/ui/Avatar';
import {Dropdown} from '@/shared/ui/Popups';
import cls from './AvatarDropdown.module.scss';
import {useTranslation} from 'react-i18next';

interface AvatarDropdownProps {
    className?: string;
}

export const AvatarDropdown = memo((props: AvatarDropdownProps) => {
    const {className} = props;
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const authData = useSelector(getUserAuthData);
    const isAdmin = useSelector(isUserAdmin);
    const isManager = useSelector(isUserManager);
    const isAdminPanelAvailable = isAdmin || isManager;

    const onLogout = useCallback( () => {
        dispatch(userActions.logout())
    }, [dispatch]);

    const dropdownItems = [
        ...(isAdminPanelAvailable ?
            [{content: t('Admin panel'), link: RoutePath.admin_panel}]
            : []
        ),
        {content: t('Profile'), link: RoutePath.profile + authData?.id},
        {content: t('Log-out'), onClick: onLogout},
    ];

    return (
        <Dropdown
            items={dropdownItems}
            trigger={<Avatar src={authData?.avatar} size={30}/>}
            direction='bottom left'
            className={classNames(cls.AvatarDropdown, {}, [className])}
        />
    );
})