import React, {memo, useCallback} from 'react';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {useSearchParams} from 'react-router-dom';
import {classNames} from '@/shared/lib/classNames/classNames';
import {DynamicModuleLoader, ReducersList} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {useAppDispatch} from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {useInitialEffect} from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import {Page} from '@/widgets/Page';
import {getArticlesPageView} from '../../model/selectors/articlesPageSelectors';
import {fetchNextArticlesPage} from '../../model/services/fetchNextArticlesPage';
import {initArticlesPage} from '../../model/services/initArticlesPage';
import {articlePageReducer} from '../../model/slice/articlesPageSlice';
import {ArticleInfiniteList} from '../ArticleInfiniteList/ArticleInfiniteList';
import {ArticlePageFilters} from '../ArticlePageFilters/ArticlePageFilters';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlePageReducer
}


const ArticlesPage = memo(({className}: ArticlesPageProps) => {
    const {t} = useTranslation('articles');
    const dispatch = useAppDispatch();
    const view = useSelector(getArticlesPageView);
    const [searchParams] = useSearchParams();

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    }, view);

    const onLoadNextPart = useCallback(() => {
        if(__PROJECT__ !== 'storybook') {
            dispatch(fetchNextArticlesPage());
        }
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page
                className={classNames(cls.ArticlesPage, {}, [className])}
                onScrollEnd={onLoadNextPart}
                data-testid='ArticlesPage'
            >
                {t('ARTICLES')}
                <br/>
                <ArticlePageFilters/>
                <ArticleInfiniteList/>
            </Page>
        </DynamicModuleLoader>
    );
})

export default ArticlesPage;