import {apiRtk} from 'shared/api/apiRtk';

const recommendationsApi = apiRtk.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecommendationsList: build.query({
            query: (limit) => ({
                url: '/articles',
                params: {
                    _limit: limit
                }
            }),
        }),
    }),
    overrideExisting: false,
});

export const useArticleRecommendationsList = recommendationsApi.useGetArticleRecommendationsListQuery;