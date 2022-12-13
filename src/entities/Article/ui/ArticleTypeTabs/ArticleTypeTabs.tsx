import {ArticleType} from '../../model/consts/articleConsts';
import React, {memo, useCallback, useMemo} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import {TabItem, Tabs} from '@/shared/ui/Tabs';

interface ArticleTypeTabsProps {
    selectedValue: string;
    onTabClick: (tab: ArticleType) => void;
    className?: string;
}

export const ArticleTypeTabs = memo((props: ArticleTypeTabsProps) => {
    const {className, selectedValue, onTabClick} = props;

    const typeTabs = useMemo<TabItem[]>(() => {
        const tabs: TabItem[] = [];
        Object.values(ArticleType).forEach((t)=> {
            tabs.push({
                value: t,
                content: t
            })
        });
        return tabs;
    }, []);

    const onChangeType = useCallback((tab: TabItem) => {
        onTabClick(tab.value as ArticleType);
    }, [onTabClick])

    return (
        <Tabs
            className={classNames('', {}, [className])}
            tabs={typeTabs}
            onTabClick={onChangeType}
            selectedValue={selectedValue}
        />
    );
})