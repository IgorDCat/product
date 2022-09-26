import React, {useState} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Sidebar.module.scss"
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LangSwitcher} from "widgets/LangSwitcher/LangSwitcher";

interface SideBarProps {
	className?: string
}

export const Sidebar = ({className}: SideBarProps) => {
    const [collapsed, setCollapsed] = useState(true);
    const onToggle = () => {
        setCollapsed(prev => !prev)
    }
    return (
        <div data-testid="sidebar" className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <button data-testid="sidebar-toggle" onClick={onToggle}>123</button>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher/>
            </div>
        </div>
    );
};