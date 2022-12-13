import {RatingCard} from '@/entities/Rating';
import {getUserAuthData} from '@/entities/User';
import {Skeleton} from '@/shared/ui/Skeleton';
import {useSelector} from 'react-redux';
import {useGetArticleRating, useRateArticle, useRateArticlePost} from '../api/articleRatingApi';
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
    const [rateArticleMutationPost] = useRateArticlePost();
    const rating = data ? data?.[0]?.rates : '';
    const votedUsers = data ?  data?.[0]?.userIds : '';
    const numberOfVoters = data?.[0]?.rates?.length ?? 0;
    const canVote = !votedUsers?.includes(userData?.id ?? '');

    const handleRateArticle = useCallback((starCount: number, feedback?: string) => {
        const mutationData = {
            id: articleId || undefined,
            rates: [...rating || [], starCount],
            feedback,
            articleId,
            userIds: [...votedUsers || [], userData?.id || '']
        }
        try {
            data?.length ?
                rateArticleMutation(mutationData) :
                rateArticleMutationPost(mutationData)
        } catch(e) {
            console.log(e);
        }
    }, [articleId, data?.length, rateArticleMutation, rateArticleMutationPost, rating, userData?.id, votedUsers]);

    const onAccept = useCallback((starCount: number, feedback: string) => {
        handleRateArticle(starCount, feedback);
    }, [handleRateArticle]);

    const onCancel = useCallback((starCount: number) => {
        handleRateArticle(starCount);
    }, [handleRateArticle]);

    const averageRating = useCallback((nums: number[], round?: boolean) => {
        const average = nums.reduce((a, b) => (a + b)) / nums.length;
        const averageDecimal = Math.floor(average * 100) / 100;
        return round ? Math.round(average) : averageDecimal;
    },[]);

    if(isLoading) {
        return <Skeleton width='100%' height={120}/>
    }

    return (
        <RatingCard
            rate={rating ? averageRating(rating) : 0}
            className={className}
            title={canVote? t('Rate the article:') : t('Your score:')}
            feedbackTitle={t('Leave your feedback about the article')}
            hasFeedback
            onAccept={onAccept}
            onCancel={onCancel}
            averageRating={rating ? averageRating(rating) : 0}
            numberOfVoters={numberOfVoters}
            canVote={canVote}
        />
    );
});

export default ArticleRating;