import React from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./LangSwitcher.module.scss";
import {useTranslation} from "react-i18next";
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface LangSwitcherProps {
	className?: string,
    short?: boolean
}

export const LangSwitcher = ({className, short}: LangSwitcherProps) => {
    const {i18n, t} = useTranslation();
    const toggleLang = () => {
        i18n.changeLanguage(i18n.language === "en" ? "ru" : "en");
    }
    return (
        <Button onClick={toggleLang}
            className={classNames(cls.LangSwitcher, {}, [className])}
            theme={ThemeButton.CLEAR}>
            {t(short? "$shortLang" : "$language")}
        </Button>
    )
}