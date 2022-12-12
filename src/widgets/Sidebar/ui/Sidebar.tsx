import React, {memo, useState} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import {VStack} from '@/shared/ui/Stack';
import cls from './Sidebar.module.scss'
import {ThemeSwitcher} from '@/features/ThemeSwitcher';
import {LangSwitcher} from '@/features/LangSwitcher';
import {Button, ThemeButton} from '@/shared/ui/Button/Button';
import {SidebarItem} from './SidebarItem/SidebarItem';
import {getSidebarItems} from '../model/selectors/getSidebarItems';
import {useSelector} from 'react-redux';

interface SideBarProps {
	className?: string,
}

export const Sidebar = memo(({className}: SideBarProps) => {
    const [collapsed, setCollapsed] = useState(true);
    const sidebarItemsList = useSelector(getSidebarItems);

    const onToggle = () => {
        setCollapsed(prev => !prev)
    }

    return (
        <aside data-testid="sidebar" className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed},
            [className])}>
            <Button
                data-testid="sidebar-toggle"
                className={cls.collapseBtn}
                theme={ThemeButton.COLLAPSE}
                onClick={onToggle}>
                {collapsed? '→' : '←'}
            </Button>
            <VStack gap='10' className={cls.items} role='navigation'>
                {sidebarItemsList.map((item) => {
                    return <SidebarItem item={item} collapsed={collapsed} key={item.path}/>
                })}
            </VStack>
            <div className={cls.switchers}>
                <ThemeSwitcher/>
                <LangSwitcher short={collapsed}/>
            </div>
        </aside>
    );
});