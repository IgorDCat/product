import {ArticleView} from '../../model/consts/articleConsts';
import React, {HTMLAttributeAnchorTarget, memo, ReactNode} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import {Article} from '../../model/types/article';
import {ArticleListItem} from '../ArticleListItem/ArticleListItem';
import {ArticleListItemSkeleton} from '../ArticleListItem/ArticleListItemSkeleton';
import {Text} from '@/shared/ui/Text/Text';
import {useTranslation} from 'react-i18next';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

const getSkeletons = (view: ArticleView): ReactNode => {
    return new Array(view === ArticleView.SMALL ? 9 : 3).fill(0).map((item, index) =>{
        return <ArticleListItemSkeleton view={view} key={index} className={cls.card}/>
    })
}

export const ArticleList = memo((props: ArticleListProps) => {
    const {className, articles, view = ArticleView.SMALL, isLoading, target} = props;
    const {t} = useTranslation();

    if(!isLoading && !articles.length) {
        return (
            <Text title={t('Articles no found')}/>
        );
    }

    const renderArticle = (article: Article) => {
        return (
            <ArticleListItem
                article={article}
                view={view}
                key={article.id}
                className={cls.card}
                target={target}
            />
        )
    }

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length > 0 && articles.map(renderArticle)}
            {isLoading && getSkeletons(view)}
        </div>
    );
})