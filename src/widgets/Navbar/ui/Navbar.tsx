import React, {memo, useCallback, useState} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {Avatar} from 'shared/ui/Avatar/Avatar';
import {Dropdown} from 'shared/ui/Dropdown/Dropdown';
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

    const dropdownItems = [
        {content: t('Profile'), link: RoutePath.profile + authData?.id},
        {content: t('Log-out'), onClick: onLogout},
    ]

    if(authData) {
        return (
            <header className={classNames(cls.Navbar, {}, [className])}>
                <AppLink to={RoutePath.article_create} className={cls.create}>
                    {t('Create a new article')}
                </AppLink>
                <div className={cls.dropWrapper}>
                    <Dropdown
                        items={dropdownItems}
                        trigger={<Avatar src={authData.avatar} size={30}/>}
                        direction='bottom left'
                        className={cls.drop}
                    />
                </div>
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
