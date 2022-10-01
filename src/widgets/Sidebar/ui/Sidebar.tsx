import React, {useState} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss"
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher/LangSwitcher";
import {Button, ThemeButton} from "shared/ui/Button/Button";
import {AppLink} from "shared/ui/AppLink/AppLink";
import {useTranslation} from "react-i18next";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import MainPageIcon from "shared/assets/icons/main-page.svg";
import AboutPageIcon from "shared/assets/icons/about-page.svg";

interface SideBarProps {
	className?: string
}

export const Sidebar = ({className}: SideBarProps) => {
    const {t} = useTranslation();
    const [collapsed, setCollapsed] = useState(true);
    const onToggle = () => {
        setCollapsed(prev => !prev)
    }
    return (
        <div data-testid="sidebar" className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed},
            [className])}>
            <Button
                data-testid="sidebar-toggle"
                className={cls.collapseBtn}
                theme={ThemeButton.COLLAPSE}
                onClick={onToggle}>
                {collapsed? "→" : "←"}
            </Button>
            <div className={cls.items}>
                <AppLink to={RoutePath.main} className={classNames(cls.mainLink)}>
                    <MainPageIcon className={cls.icon}/>
                    <span className={classNames(cls.item, {[cls.itemHidden]: collapsed})}>
                        {t("Main page")}
                    </span>
                </AppLink>
                <AppLink to={RoutePath.about} className={classNames(cls.mainLink)}>
                    <AboutPageIcon className={cls.icon}/>
                    <span className={classNames(cls.item, {[cls.itemHidden]: collapsed})}>
                        {t("About us")}
                    </span>
                </AppLink>
            </div>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher short={collapsed}/>
            </div>
        </div>
    );
};