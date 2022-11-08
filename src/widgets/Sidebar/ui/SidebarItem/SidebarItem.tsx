import React, {memo} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './SidebarItem.module.scss';
import {AppLink} from 'shared/ui/AppLink/AppLink';
import {useTranslation} from 'react-i18next';
import {SidebarItemsType} from 'widgets/Sidebar/model/types/sidebar';

interface SidebarItemProps {
    item: SidebarItemsType;
    collapsed: boolean;
}

export const SidebarItem = memo((props: SidebarItemProps) => {
    const {collapsed, item} = props;
    const {t} = useTranslation();

    return (
        <AppLink to={item.path} className={cls.mainLink}>
            <item.icon className={cls.icon}/>
            <span className={classNames(cls.item, {[cls.itemHidden]: collapsed})}>
                {t(item.text)}
            </span>
        </AppLink>
    );
})