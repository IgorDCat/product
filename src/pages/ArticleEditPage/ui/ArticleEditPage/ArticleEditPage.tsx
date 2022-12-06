import React, {memo} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './ArticleEditPage.module.scss';
import {useTranslation} from 'react-i18next';
import {Page} from '@/widgets/Page/Page';
import {useParams} from 'react-router-dom';

interface ArticleEditPageProps {
    className?: string;
}

const ArticleEditPage = memo((props: ArticleEditPageProps) => {
    const {className} = props;
    const {t} = useTranslation();
    const {id} = useParams<{id: string}>();
    const isEdit = Boolean(id);

    return (
        <Page className={classNames(cls.ArticleEditPage, {}, [className])}>
            {isEdit ? t('Editing an article with ID ' + id) : t('Creating a new article')}
        </Page>
    );
})

export default ArticleEditPage;