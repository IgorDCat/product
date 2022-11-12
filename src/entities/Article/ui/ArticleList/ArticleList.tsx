import React, {memo, ReactNode} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ArticleList.module.scss';
import {Article, ArticleView} from '../../model/types/article';
import {ArticleListItem} from 'entities/Article/ui/ArticleListItem/ArticleListItem';
import {ArticleListItemSkeleton} from 'entities/Article/ui/ArticleListItem/ArticleListItemSkeleton';

interface ArticleListProps {
    className?: string;
    articles: Article[];
    isLoading?: boolean;
    view?: ArticleView;
}

const getSkeletons = (view: ArticleView): ReactNode => {
    return new Array(view === ArticleView.SMALL ? 9 : 3).fill(0).map((item, index) =>{
        return <ArticleListItemSkeleton view={view} key={index} className={cls.card}/>
    })
}

export const ArticleList = memo((props: ArticleListProps) => {
    const {className, articles, view = ArticleView.BIG, isLoading} = props;

    const renderArticle = (article: Article) => {
        return <ArticleListItem article={article} view={view} key={article.id} className={cls.card}/>
    }

    return (
        <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
            {articles.length > 0 && articles.map(renderArticle)}
            {isLoading && getSkeletons(view)}
        </div>);
})