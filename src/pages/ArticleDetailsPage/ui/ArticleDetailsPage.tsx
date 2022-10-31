import React, {memo} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';
import {useTranslation} from 'react-i18next';

interface ArticleDetailsPageProps {
    className?: string;
}

const ArticleDetailsPage = memo(({className}: ArticleDetailsPageProps) => {
    const {t} = useTranslation('articles');
    return (
        <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
            {t('ARTICLE DETAILS')}
        </div>
    );
})

export default ArticleDetailsPage;