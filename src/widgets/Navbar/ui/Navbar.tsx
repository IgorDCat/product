import React, {useCallback, useState} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss"
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";
import {LoginModal} from "features/AuthByUserName";

interface NavbarProps {
	className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    const {t} = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const onCloseModal = useCallback( () => {
        setIsAuthModal(false)
    }, []);

    const onOpenModal = useCallback( () => {
        setIsAuthModal(true)
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>

            <div className={classNames(cls.mainLinks)}>
                <LoginModal isOpen={isAuthModal} onClose={onCloseModal}/>
            </div>
            <Button className={cls.btn} onClick={onOpenModal} theme={ThemeButton.CLEAR}>
                {t("Log-in")}
            </Button>
        </div>
    )
};
