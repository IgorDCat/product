import React, {memo, useCallback} from 'react';
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
import {useNavigate} from 'react-router-dom';
import {RoutePath} from 'shared/config/routeConfig/routeConfig';

interface ArticleListItemProps {
    className?: string;
    article: Article;
    view: ArticleView;
}

export const ArticleListItem = memo((props: ArticleListItemProps) => {
    const {className, article, view} = props;
    const {t} = useTranslation();
    const navigate = useNavigate();
    const types = <TextCustom text={article.type?.join(', ')} className={cls.types}/>
    const views = (
        <div className={cls.views}>
            <TextCustom text={String(article.views)} />
            <Icon Svg={EyeIcon}/>
        </div>
    );
    const date = <TextCustom text={article.createdAt} className={cls.date}/>
    const img = <img src={article.img} className={cls.img} alt={article.title}/>

    const onOpenArticle = useCallback(() => {
        navigate(RoutePath.article_details + article.id)
    }, [article.id, navigate]);

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
                    <Button theme={ThemeButton.OUTLINE} onClick={onOpenArticle}>
                        {t('Read more...')}
                    </Button>
                    {views}
                </div>
            </Card>
        )
    }

    return (
        <div className={classNames(cls.ArticleListItem, {}, [className, cls[view]])}>
            <Card className={cls.card} onClick={onOpenArticle}>
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
        </div>
    );
})