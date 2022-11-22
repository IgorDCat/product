import React, {memo, useCallback} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';
import {useTranslation} from 'react-i18next';
import {ArticleList} from 'entities/Article';
import {DynamicModuleLoader, ReducersList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {articlePageReducer, getArticles} from '../../model/slice/articlesPageSlice';
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {useInitialEffect} from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import {useSelector} from 'react-redux';
import {
    getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView
} from '../../model/selectors/articlesPageSelectors';
import {Page} from 'widgets/Page/Page';
import {fetchNextArticlesPage} from '../../model/services/fetchNextArticlesPage';
import {initArticlesPage} from '../../model/services/initArticlesPage';
import {ArticlePageFilters} from '../ArticlePageFilters/ArticlePageFilters';
import {useSearchParams} from 'react-router-dom';

interface ArticlesPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articlesPage: articlePageReducer
}


const ArticlesPage = memo(({className}: ArticlesPageProps) => {
    const {t} = useTranslation('articles');
    const dispatch = useAppDispatch();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const error = useSelector(getArticlesPageError);
    const [searchParams] = useSearchParams();

    useInitialEffect(() => {
        dispatch(initArticlesPage(searchParams));
    }, view);

    const onLoadNextPart = useCallback(() => {
        dispatch(fetchNextArticlesPage());
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
            <Page className={classNames(cls.ArticlesPage, {}, [className])}
                onScrollEnd={onLoadNextPart}
            >
                {t('ARTICLES')}
                <br/>
                <ArticlePageFilters/>
                <ArticleList articles={articles} isLoading={isLoading} view={view}/>
            </Page>
        </DynamicModuleLoader>
    );
})

export default ArticlesPage;