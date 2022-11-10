import React, {memo, useCallback} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';
import {useTranslation} from 'react-i18next';
import {ArticleList, ArticleView, ArticleViewSwitcher} from 'entities/Article';
import {DynamicModuleLoader, ReducersList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {articlePageActions, articlePageReducer, getArticles} from '../../model/slice/articlesPageSlice';
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {useInitialEffect} from 'shared/lib/hooks/UseInitialEffect/UseInitialEffect';
import {fetchArticlesList} from '../../model/services/fetchArticlesList';
import {useSelector} from 'react-redux';
import {
    getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView
} from '../../model/selectors/articlesPageSelectors';

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

    useInitialEffect(() => {
        dispatch(fetchArticlesList());
        dispatch(articlePageActions.initState());
    });

    const onChangeView = useCallback((view: ArticleView) => {
        dispatch(articlePageActions.setView(view));
    }, [dispatch]);

    return (
        <DynamicModuleLoader reducers={reducers}>
            <div className={classNames(cls.ArticlesPage, {}, [className])}>
                {t('ARTICLES')}
                <ArticleViewSwitcher view={view} onViewClick={onChangeView}/>
                <br/>
                <ArticleList articles={articles} isLoading={isLoading} view={view}/>
            </div>
        </DynamicModuleLoader>
    );
})

export default ArticlesPage;