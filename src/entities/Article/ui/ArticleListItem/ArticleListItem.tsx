import {getRouteArticleDetails} from '@/shared/const/router';
import {ArticleBlockType, ArticleView} from '../../model/consts/articleConsts';
import React, {HTMLAttributeAnchorTarget, memo} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './ArticleListItem.module.scss';
import {useTranslation} from 'react-i18next';
import {Article, ArticleTextBlock} from '../../model/types/article';
import {Text} from '@/shared/ui/Text';
import {Icon} from '@/shared/ui/Icon';
import EyeIcon from '@/shared/assets/icons/eye-icon.svg'
import {Card} from '@/shared/ui/Card';
import {Avatar} from '@/shared/ui/Avatar';
import {Button, ThemeButton} from '@/shared/ui/Button';
import {ArticleTextBlockComponent} from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import {AppLink} from '@/shared/ui/AppLink';
import {AppImage} from '@/shared/ui/AppImage';
import {Skeleton} from '@/shared/ui/Skeleton';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
    target?: HTMLAttributeAnchorTarget;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {
        className,
        article,
        view,
        target
    } = props;
    const {t} = useTranslation();
    const types = <Text text={article.type?.join(', ')} className={cls.types}/>
    const views = (
        <div className={cls.views}>
            <Text text={String(article.views)}/>
            <Icon Svg={EyeIcon}/>
        </div>
    );
    const date = <Text text={article.createdAt} className={cls.date}/>

    if(view === ArticleView.BIG) {
        const textBlock = (article.blocks ?
                article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock
            : null
        );

        return (
            <Card
                className={classNames(cls.card, {}, [className, cls[view]])}
                data-testid='ArticleListItem'
            >
                <div className={cls.header}>
                    <Avatar src={article.user.avatar} size={30}/>
                    <Text text={article.user.username} className={cls.username}/>
                    {date}
                </div>
                <Text title={article.title} className={cls.title}/>
                {types}
                <AppImage
                    fallback={<Skeleton height={250} width='100%'/>}
                    src={article.img}
                    className={cls.img}
                    alt={article.title}
                />
                {textBlock &&
                    <ArticleTextBlockComponent block={textBlock} className={cls.textBlock}/>
                }
                <div className={cls.footer}>
                    <AppLink to={getRouteArticleDetails(article.id)} target={target}>
                        <Button theme={ThemeButton.OUTLINE}>
                            {t('Read more...')}
                        </Button>
                    </AppLink>
                    {views}
                </div>
            </Card>
        )
    }

    return (
        <AppLink
            to={getRouteArticleDetails(article.id)}
            target={target}
            className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
        >
            <Card className={cls.card} data-testid='ArticleListItem'>
                <div className={cls.imageWrapper}>
                    <AppImage
                        fallback={<Skeleton height={200} width={200}/>}
                        src={article.img}
                        className={cls.img}
                        alt={article.title}
                    />
                    {date}
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                <Text text={article.title} className={cls.title}/>
            </Card>
        </AppLink>
    );
})