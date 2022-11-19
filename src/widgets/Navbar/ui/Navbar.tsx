import React, {memo, useCallback, useState} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss'
import {Button, ThemeButton} from 'shared/ui/Button/Button';
import {useTranslation} from 'react-i18next';
import {LoginModal} from 'features/AuthByUsername';
import {useDispatch, useSelector} from 'react-redux';
import {getUserAuthData, userActions} from 'entities/User';
import {AppLink} from 'shared/ui/AppLink/AppLink';
import {RoutePath} from 'shared/config/routeConfig/routeConfig';

interface NavbarProps {
	className?: string
}

export const Navbar = memo(({className}: NavbarProps) => {
    const {t} = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const onCloseModal = useCallback( () => {
        setIsAuthModal(false)
    }, []);

    const onOpenModal = useCallback( () => {
        setIsAuthModal(true)
    }, []);

    const onLogout = useCallback( () => {
        dispatch(userActions.logout())
    }, [dispatch]);

    if(authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <AppLink to={RoutePath.article_create}>
                    {t('Create a new article')} |
                </AppLink>
                <Button className={cls.btn} onClick={onLogout} theme={ThemeButton.CLEAR}>
                    {t('Log-out')}
                </Button>
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
