import {ArticleRatingType} from '../types/articleRating';
import {apiRtk} from '@/shared/api/apiRtk';


const articleRatingApi = apiRtk.injectEndpoints({
    endpoints: (build) => ({
        getArticleRating: build.query<ArticleRatingType[], {userId: string, articleId: string}>({
            query: ({userId, articleId}) => ({
                url: '/article-ratings',
                params: {
                    userId,
                    articleId,
                }
            }),
        }),
        rateArticle: build.mutation<void, ArticleRatingType>({
            query: (arg) => ({
                url: '/article-ratings/' + arg.id,
                method: 'PATCH',
                body: arg
            }),
        }),
        rateArticlePost: build.mutation<void, ArticleRatingType>({
            query: (arg) => ({
                url: '/article-ratings/',
                method: 'POST',
                body: arg
            }),
        }),
    }),
});

export const useGetArticleRating = articleRatingApi.useGetArticleRatingQuery;
export const useRateArticle = articleRatingApi.useRateArticleMutation;
export const useRateArticlePost = articleRatingApi.useRateArticlePostMutation;
