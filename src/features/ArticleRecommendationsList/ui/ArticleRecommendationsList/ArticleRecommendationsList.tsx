import {ArticleList} from '@/entities/Article';
import {useArticleRecommendationsList} from '../../api/articleRecommendationsApi';
import React, {memo} from 'react';
import {useTranslation} from 'react-i18next';
import {classNames} from '@/shared/lib/classNames/classNames';
import {VStack} from '@/shared/ui/Stack';
import {Text} from '@/shared/ui/Text/Text';

interface ArticleRecommendationsListProps {
    className?: string;
}

export const ArticleRecommendationsList = memo((props: ArticleRecommendationsListProps) => {
    const {className} = props;
    const {t} = useTranslation();
    const {data} = useArticleRecommendationsList(3);

    return (
        <VStack gap='10' max className={classNames('', {}, [className])}>
            <Text title={t('Recommended')} />
            {data && <ArticleList articles={data} target='_blank'/>}
        </VStack>
    );
});