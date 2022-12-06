import {ArticleList} from '@/entities/Article';
import {
    getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView
} from '../../model/selectors/articlesPageSelectors';
import {getArticles} from '../../model/slice/articlesPageSlice';
import React, {memo} from 'react';
import {useTranslation} from 'react-i18next';
import {useSelector} from 'react-redux';
import {Text} from '@/shared/ui/Text/Text';

interface ArticleInfiniteListProps {
    className?: string;
}

export const ArticleInfiniteList = memo((props: ArticleInfiniteListProps) => {
    const {className} = props;
    const {t} = useTranslation();
    const articles = useSelector(getArticles.selectAll);
    const isLoading = useSelector(getArticlesPageIsLoading);
    const view = useSelector(getArticlesPageView);
    const error = useSelector(getArticlesPageError);

    if(error) {
        return <Text title={t('Some error has occurred')}/>
    }

    return (
        <ArticleList
            articles={articles}
            isLoading={isLoading}
            view={view}
            className={className}
        />
    );
})