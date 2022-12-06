import React, {memo, ReactNode, useCallback} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import {Card, CardTheme} from '../Card/Card';
import cls from './Tabs.module.scss';

export interface TabItem {
    value: string;
    content: ReactNode;
}

interface TabsProps {
    className?: string;
    tabs: TabItem[];
    selectedValue: string;
    onTabClick: (tab: TabItem) => void;
}

export const Tabs = memo((props: TabsProps) => {
    const {className, tabs, selectedValue, onTabClick} = props;

    const onClickHandler = useCallback((tab: TabItem) => () => {
        onTabClick(tab);
    }, [onTabClick]);

    return (
        <div className={classNames(cls.Tabs, {}, [className])}>
            {tabs.map((item) => {
                return (
                    <Card
                        key={item.value}
                        className={cls.tab}
                        theme={item.value === selectedValue ? CardTheme.OUTLINED : CardTheme.NORMAL}
                        onClick={onClickHandler(item)}
                    >
                        {item.content}
                    </Card>
                )
            })}
        </div>
    );
})