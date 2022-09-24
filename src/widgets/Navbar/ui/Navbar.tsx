import React from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss"
import {AppLink} from "shared/ui/AppLink/AppLink";
import {useTranslation} from "react-i18next";

interface NavbarProps {
	className?: string
}

export const Navbar = ({className}: NavbarProps) => {
    const {t} = useTranslation();
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={classNames(cls.mainLinks)}>
                <AppLink to={"/"} className={classNames(cls.mainLink)}>{t("Main page")} </AppLink>
                <AppLink to={"/about"} className={classNames(cls.mainLink)}>{t("About us")} </AppLink>
            </div>
        </div>
    )
};
