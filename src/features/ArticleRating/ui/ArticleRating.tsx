import {RatingCard} from '@/entities/Rating';
import {getUserAuthData} from '@/entities/User';
import {Skeleton} from '@/shared/ui/Skeleton/Skeleton';
import {useSelector} from 'react-redux';
import {useGetArticleRating, useRateArticle} from '../api/articleRatingApi';
import React, {memo, useCallback} from 'react';
import {useTranslation} from 'react-i18next';

export interface ArticleRatingProps {
    className?: string;
    articleId: string;
}

const ArticleRating = memo((props: ArticleRatingProps) => {
    const {className, articleId} = props;
    const {t} = useTranslation();
    const userData = useSelector(getUserAuthData);

    const {data, isLoading} = useGetArticleRating({
        articleId,
        userId: userData?.id ?? ''
    });

    const [rateArticleMutation] = useRateArticle();
    
    const handleRateArticle = useCallback((starCount: number, feedback?: string) => {
        try {
            rateArticleMutation({
                rate: starCount,
                feedback,
                articleId,
                userId: userData?.id ?? ''
            });
        } catch(e) {
            console.log(e);
        }
    }, [articleId, rateArticleMutation, userData?.id]);

    const onAccept = useCallback((starCount: number, feedback: string) => {
        handleRateArticle(starCount, feedback);
    }, [handleRateArticle]);

    const onCancel = useCallback((starCount: number) => {
        handleRateArticle(starCount);
    }, [handleRateArticle]);

    if(isLoading) {
        return <Skeleton width='100%' height={120}/>
    }

    const rating = data?.[0];

    return (
        <RatingCard
            rate={rating?.rate}
            className={className}
            title={t('Rate the article:')}
            feedbackTitle={t('Leave your feedback about the article')}
            hasFeedback
            onAccept={onAccept}
            onCancel={onCancel}
        />
    );
});

export default ArticleRating;