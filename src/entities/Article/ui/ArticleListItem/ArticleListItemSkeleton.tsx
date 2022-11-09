import React, {memo} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ArticleListItem.module.scss';
import {ArticleView} from '../../model/types/article';
import {Card} from 'shared/ui/Card/Card';
import {Skeleton} from 'shared/ui/Skeleton/Skeleton';

interface ArticleListItemSkeletonProps {
	className?: string;
    view: ArticleView;
}

export const ArticleListItemSkeleton = memo((props: ArticleListItemSkeletonProps) => {
    const {className, view} = props;

    if(view === ArticleView.BIG) {
        return (
            <Card className={classNames(cls.card, {}, [className, cls[view]])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border='50%'/>
                    <Skeleton width={150} height={16} className={cls.username}/>
                    <Skeleton width={100} height={16} className={cls.date}/>
                </div>
                <Skeleton width={450} height={24} className={cls.title}/>
                <Skeleton width={220} height={16} className={cls.types}/>
                <Skeleton width='100%' height={250} className={cls.img}/>
                <Skeleton width='100%' height={250} className={cls.textBlock}/>
                <div className={cls.footer}>
                    <Skeleton width={100} height={30}/>
                    <Skeleton width={50} height={16}/>
                </div>
            </Card>
        )
    }

    return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    <Skeleton width={200} height={200}/>
                </div>
                <div className={cls.infoWrapper}>
                    <Skeleton width={130} height={16} className={cls.title}/>
                </div>
                <Skeleton width={160} height={16}/>
            </Card>
        </div>
    );
})