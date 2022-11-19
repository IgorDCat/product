import React, {memo, useCallback} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPageHeader.module.scss';
import {useTranslation} from 'react-i18next';
import {Button, ThemeButton} from 'shared/ui/Button/Button';
import {RoutePath} from 'shared/config/routeConfig/routeConfig';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getCanEditArticle} from '../../model/selectors/getCanEditArticle';
import {getArticleDetailsData} from 'entities/Article';

interface ArticleDetailsPageHeaderProps {
    className?: string;
}

export const ArticleDetailsPageHeader = memo((props: ArticleDetailsPageHeaderProps) => {
    const {className} = props;
    const {t} = useTranslation();
    const navigate = useNavigate();
    const canEdit = useSelector(getCanEditArticle);
    const article = useSelector(getArticleDetailsData);

    const backToList = useCallback(() => {
        navigate(RoutePath.articles)
    }, [navigate]);

    const onEditArticle = useCallback(() => {
        navigate(`${RoutePath.article_details}${article?.id}/edit`)
    }, [article?.id, navigate]);

    return (
        <div className={classNames(cls.ArticleDetailsPageHeader, {}, [className])}>
            <Button theme={ThemeButton.OUTLINE} onClick={backToList}>
                {t('< Back to list')}
            </Button>
            {canEdit && <Button theme={ThemeButton.OUTLINE} onClick={onEditArticle} className={cls.editBtn}>
                {t('Edit')}
            </Button>}
        </div>
    );
})