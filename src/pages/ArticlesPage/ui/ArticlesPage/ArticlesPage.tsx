import React, {memo} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';
import {useTranslation} from 'react-i18next';
import {AppLink} from 'shared/ui/AppLink/AppLink';

interface ArticlesPageProps {
    className?: string;
}

const ArticlesPage = memo(({className}: ArticlesPageProps) => {
    const {t} = useTranslation('articles');
    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            {t('ARTICLES')}
            <br/>
            <AppLink to={'/articles/1'}>
                article1
            </AppLink>
        </div>);
})

export default ArticlesPage;