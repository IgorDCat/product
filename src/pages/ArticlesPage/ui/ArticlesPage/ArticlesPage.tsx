import React, {memo} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ArticlesPage.module.scss';
import {useTranslation} from 'react-i18next';
import {ArticleList} from 'entities/Article';

interface ArticlesPageProps {
    className?: string;
}


const ArticlesPage = memo(({className}: ArticlesPageProps) => {
    const {t} = useTranslation('articles');
    return (
        <div className={classNames(cls.ArticlesPage, {}, [className])}>
            {t('ARTICLES')}
            <br/>

        </div>);
})

export default ArticlesPage;