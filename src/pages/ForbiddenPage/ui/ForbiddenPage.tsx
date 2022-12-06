import React, {memo} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import {Page} from '@/widgets/Page/Page';
import cls from './ForbiddenPage.module.scss';
import {useTranslation} from 'react-i18next';

interface ForbiddenPageProps {
    className?: string;
}

export const ForbiddenPage = memo((props: ForbiddenPageProps) => {
    const {className} = props;
    const {t} = useTranslation();

    return (
        <Page className={classNames(cls.ForbiddenPage, {}, [className])}>
            {t('You do not have access to this page')}
        </Page>
    );
})