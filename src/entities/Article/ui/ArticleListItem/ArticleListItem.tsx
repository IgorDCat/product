import React, {HTMLAttributeAnchorTarget, memo} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ArticleListItem.module.scss';
import {useTranslation} from 'react-i18next';
import {Article, ArticleBlockType, ArticleTextBlock, ArticleView} from '../../model/types/article';
import {TextCustom} from 'shared/ui/Text/TextCustom';
import {Icon} from 'shared/ui/Icon/Icon';
import EyeIcon from 'shared/assets/icons/eye-icon.svg'
import {Card} from 'shared/ui/Card/Card';
import {Avatar} from 'shared/ui/Avatar/Avatar';
import {Button, ThemeButton} from 'shared/ui/Button/Button';
import {ArticleTextBlockComponent} from '../ArticleTextBlockComponent/ArticleTextBlockComponent';
import {RoutePath} from 'shared/config/routeConfig/routeConfig';
import {AppLink} from 'shared/ui/AppLink/AppLink';

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
    const types = <TextCustom text={article.type?.join(', ')} className={cls.types}/>
    const views = (
        <div className={cls.views}>
            <TextCustom text={String(article.views)}/>
            <Icon Svg={EyeIcon}/>
        </div>
    );
    const date = <TextCustom text={article.createdAt} className={cls.date}/>
    const img = <img src={article.img} className={cls.img} alt={article.title}/>

    if(view === ArticleView.BIG) {
        const textBlock = (article.blocks ?
                article.blocks.find((block) => block.type === ArticleBlockType.TEXT) as ArticleTextBlock
            : null
        );

        return (
            <Card className={classNames(cls.card, {}, [className, cls[view]])}>
                <div className={cls.header}>
                    <Avatar src={article.user.avatar} size={30}/>
                    <TextCustom text={article.user.username} className={cls.username}/>
                    {date}
                </div>
                <TextCustom title={article.title} className={cls.title}/>
                {types}
                {img}
                {textBlock &&
                    <ArticleTextBlockComponent block={textBlock} className={cls.textBlock}/>
                }
                <div className={cls.footer}>
                    <AppLink to={RoutePath.article_details + article.id} target={target}>
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
            to={RoutePath.article_details + article.id}
            target={target}
            className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}
        >
            <Card className={cls.card}>
                <div className={cls.imageWrapper}>
                    {img}
                    {date}
                </div>
                <div className={cls.infoWrapper}>
                    {types}
                    {views}
                </div>
                <TextCustom text={article.title} className={cls.title}/>
            </Card>
        </AppLink>
    );
})