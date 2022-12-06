import React, {memo, useCallback} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './ArticlePageFilters.module.scss';
import {useTranslation} from 'react-i18next';
import {
    ArticleSortField, ArticleSortSwitcher, ArticleType, ArticleTypeTabs, ArticleView, ArticleViewSwitcher
} from '@/entities/Article';
import {articlePageActions} from '../../model/slice/articlesPageSlice';
import {useSelector} from 'react-redux';
import {
    getArticlesPageOrder, getArticlesPageSearch, getArticlesPageSort, getArticlesPageType, getArticlesPageView
} from '../../model/selectors/articlesPageSelectors';
import {useAppDispatch} from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {Card} from '@/shared/ui/Card/Card';
import {Input} from '@/shared/ui/Input/Input';
import {SortOrder} from '@/shared/types';
import {fetchArticlesList} from '../../model/services/fetchArticlesList';
import {useDebounce} from '@/shared/lib/hooks/useDebounce/useDebounce';

interface ArticlePageFiltersProps {
    className?: string;
}

export const ArticlePageFilters = memo((props: ArticlePageFiltersProps) => {
    const {className} = props;
    const {t} = useTranslation();
    const view = useSelector(getArticlesPageView);
    const sort = useSelector(getArticlesPageSort);
    const order = useSelector(getArticlesPageOrder);
    const search = useSelector(getArticlesPageSearch);
    const type = useSelector(getArticlesPageType);
    const dispatch = useAppDispatch();

    const fetchData = useCallback(() => {
        dispatch(articlePageActions.setPage(1));
        dispatch(fetchArticlesList({replace: true}))
    }, [dispatch]);

    const debouncedFetchData = useDebounce(fetchData, 500);

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlePageActions.setView(view));
    }, [dispatch]);

    const onChangeOrder = useCallback((newOrder: SortOrder) => {
        dispatch(articlePageActions.setOrder(newOrder));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeSort = useCallback((newSort: ArticleSortField) => {
        dispatch(articlePageActions.setSort(newSort));
        fetchData();
    }, [dispatch, fetchData]);

    const onChangeSearch = useCallback((value: string) => {
        dispatch(articlePageActions.setSearch(value));
        debouncedFetchData({});
    }, [debouncedFetchData, dispatch]);
    
    const onTabClick = useCallback((tab: ArticleType) => {
        dispatch(articlePageActions.setType(tab));
        fetchData();
    }, [dispatch, fetchData]);


    return (
        <div className={classNames(cls.ArticlePageFilters, {}, [className])}>
            <div className={cls.sortWrapper}>
                <ArticleSortSwitcher
                    order={order}
                    sort={sort}
                    onChangeOrder={onChangeOrder}
                    onChangeSort={onChangeSort}
                />
                <ArticleViewSwitcher view={view} onViewClick={onChangeView}/>
            </div>
            <Card className={cls.search}>
                <Input
                    placeholder={t('Search')}
                    value={search}
                    onChange={onChangeSearch}
                    className={cls.input}
                />
            </Card>
            <ArticleTypeTabs selectedValue={type} onTabClick={onTabClick}/>
        </div>
    );
})