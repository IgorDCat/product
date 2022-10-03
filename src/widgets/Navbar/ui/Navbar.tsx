import React, {useCallback, useState} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss"
import {Modal} from "shared/ui/Modal/Modal";
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {useTranslation} from "react-i18next";

interface NavbarProps {
	className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    const {t} = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);
    const onToggleModal = useCallback( () => {
        setIsAuthModal(prev => !prev)
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>

            <div className={classNames(cls.mainLinks)}>
                <Modal isOpen={isAuthModal} onClose={onToggleModal}>{t("text of modal")}</Modal>
            </div>
            <Button className={cls.btn} onClick={onToggleModal} theme={ThemeButton.CLEAR}>{t("Log-in")}</Button>
        </div>
    )
};
