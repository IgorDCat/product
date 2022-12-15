import {getUserAuthData} from '@/entities/User';
import {LoginModal} from '@/features/AuthByUsername';
import {AvatarDropdown} from '@/features/AvatarDropdown';
import {NotificationButton} from '@/features/NotificationButton';
import {getRouteArticleCreate} from '@/shared/const/router';
import React, {memo, useCallback, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {classNames} from '@/shared/lib/classNames/classNames';
import {AppLink} from '@/shared/ui/AppLink';
import {Button, ThemeButton} from '@/shared/ui/Button';
import {HStack} from '@/shared/ui/Stack';
import cls from './Navbar.module.scss'

interface NavbarProps {
	className?: string
}

export const Navbar = memo(({className}: NavbarProps) => {
    const {t} = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);

    const onCloseModal = useCallback( () => {
        setIsAuthModal(false);
    }, []);

    const onOpenModal = useCallback( () => {
        setIsAuthModal(true);
    }, []);

    if(authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <AppLink to={getRouteArticleCreate()} className={cls.create}>
                    {t('Create a new article')}
                </AppLink>
                <HStack align='start' className={cls.dropWrapper}>
                    <NotificationButton/>
                    <AvatarDropdown/>
                </HStack>
            </header>
        )
    }

    return (
        <header className={classNames(cls.Navbar, {}, [className])}>

            <div className={classNames(cls.mainLinks)}>
                {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal}/>}
            </div>
            <Button className={cls.btn} onClick={onOpenModal} theme={ThemeButton.CLEAR}>
                {t('Log-in')}
            </Button>
        </header>
    )
});
