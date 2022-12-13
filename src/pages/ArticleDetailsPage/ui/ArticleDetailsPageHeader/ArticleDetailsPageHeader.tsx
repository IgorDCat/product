import {RoutePath} from '@/shared/const/router';
import React, {memo, useCallback} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import {HStack} from '@/shared/ui/Stack';
import {useTranslation} from 'react-i18next';
import {Button, ThemeButton} from '@/shared/ui/Button';
import {useNavigate} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {getCanEditArticle} from '../../model/selectors/getCanEditArticle';
import {getArticleDetailsData} from '@/entities/Article';

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
        <HStack justify='between' max className={classNames('', {}, [className])}>
            <Button theme={ThemeButton.OUTLINE} onClick={backToList}>
                {t('< Back to list')}
            </Button>
            {canEdit && <Button theme={ThemeButton.OUTLINE} onClick={onEditArticle}>
                {t('Edit')}
            </Button>}
        </HStack>
    );
})