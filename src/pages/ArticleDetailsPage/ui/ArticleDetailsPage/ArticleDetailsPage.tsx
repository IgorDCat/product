import {ArticleDetails} from '@/entities/Article';
import {ArticleRating} from '@/features/ArticleRating';
import {ArticleRecommendationsList} from '@/features/ArticleRecommendationsList';
import React, {memo} from 'react';
import {useParams} from 'react-router-dom';
import {classNames} from '@/shared/lib/classNames/classNames';
import {DynamicModuleLoader, ReducersList} from '@/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {useAppDispatch} from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {useInitialEffect} from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import {VStack} from '@/shared/ui/Stack';
import {Page} from '@/widgets/Page';
import {fetchArticleRecommendations} from '../../model/services/fetchArticleRecommendations';
import {articleDetailsPageReducer} from '../../model/slices';
import {ArticleDetailsComments} from '../ArticleDetailsComments/ArticleDetailsComments';
import {ArticleDetailsPageHeader} from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import {getFeatureFlags} from '@/shared/lib/features';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer
}

const ArticleDetailsPage = memo(({className}: ArticleDetailsPageProps) => {
    const {id} = useParams<{ id: string }>();
    const dispatch = useAppDispatch();

    useInitialEffect(() => {
        dispatch(fetchArticleRecommendations());
    });

    if(!id) {
        return  null
    }
    const isArticleRatingEnabled = getFeatureFlags('isArticleRatingEnabled');

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page className={classNames('', {}, [className])}>
                <VStack gap='16' max>
                    <ArticleDetailsPageHeader/>
                    <ArticleDetails id={id}/>
                    {isArticleRatingEnabled && <ArticleRating articleId={id}/>}
                    <ArticleRecommendationsList/>
                    {id && <ArticleDetailsComments id={id}/>}
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
})

export default ArticleDetailsPage;