import {Rating} from '@/entities/Rating';
import {apiRtk} from '@/shared/api/apiRtk';

interface GetArticleRating {
    userId: string;
    articleId: string;
}

interface RateArticle {
    userId: string;
    articleId: string;
    rate: number;
    feedback?: string;
}

const articleRatingApi = apiRtk.injectEndpoints({
    endpoints: (build) => ({
        getArticleRating: build.query<Rating[], GetArticleRating>({
            query: ({userId, articleId}) => ({
                url: '/article-ratings',
                params: {
                    userId,
                    articleId
                }
            }),
        }),
        rateArticle: build.mutation<void, RateArticle>({
            query: (arg) => ({
                url: '/article-ratings',
                method: 'POST',
                body: arg
            }),
        }),
    }),
});

export const useGetArticleRating = articleRatingApi.useGetArticleRatingQuery;
export const useRateArticle = articleRatingApi.useRateArticleMutation;
