import React from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./LangSwitcher.module.scss"
import {useTranslation} from "react-i18next";
import {Button, ThemeButton} from "shared/ui/Button/Button";

interface LangSwitcherProps {
	className?: string
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {
	const {t, i18n} = useTranslation();
	const toggleLang = () => {
		i18n.changeLanguage(i18n.language === "en" ? "ru" : "en")
	}
	return (
		<Button onClick={toggleLang}
				className={classNames(cls.LangSwitcher, {}, [className])}
				theme={ThemeButton.CLEAR}>
			{i18n.language === "en" ? "EN" : "RU"}
		</Button>
	);
};