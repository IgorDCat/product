import React, {memo, useCallback, useMemo} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ArticleSortSwitcher.module.scss';
import {useTranslation} from 'react-i18next';
import {Select, SelectOption} from 'shared/ui/Select/Select';
import {ArticleSortField} from 'entities/Article/model/types/article';
import {SortOrder} from 'shared/types';

interface ArticleSortSwitcherProps {
    className?: string;
    order: SortOrder;
    sort: ArticleSortField;
    onChangeOrder: (newOrder: SortOrder) => void;
    onChangeSort: (newSort: ArticleSortField) => void;
}

export const ArticleSortSwitcher = memo((props: ArticleSortSwitcherProps) => {
    const {className, sort, order, onChangeOrder, onChangeSort} = props;
    const {t} = useTranslation();

    const orderOptions = useMemo<SelectOption<SortOrder>[]>(() => [
        {
            value: 'asc',
            content: t('ascending')
        },
        {
            value: 'desc',
            content: t('descending')
        }
    ], [t])

    const sortFieldOptions = useMemo<SelectOption<ArticleSortField>[]>(() => [
        {
            value: ArticleSortField.CREATED,
            content: t('date')
        },
        {
            value: ArticleSortField.TITLE,
            content: t('title')
        },
        {
            value: ArticleSortField.VIEWS,
            content: t('views')
        },

    ], [t])

    return (
        <div className={classNames(cls.ArticleSortSwitcher, {}, [className])}>
            <Select
                label={t('Sort by')}
                options={sortFieldOptions}
                value={sort}
                onChange={onChangeSort}
            />
            <Select
                label={t('by')}
                options={orderOptions}
                value={order}
                onChange={onChangeOrder}
            />
        </div>
    );
})