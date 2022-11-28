import {ArticleDetails} from 'entities/Article';
import {ArticleRecommendationsList} from 'features/ArticleRecommendationsList';
import React, {memo} from 'react';
import {useTranslation} from 'react-i18next';
import {useParams} from 'react-router-dom';
import {classNames} from 'shared/lib/classNames/classNames';
import {DynamicModuleLoader, ReducersList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {useInitialEffect} from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import {VStack} from 'shared/ui/Stack';
import {Page} from 'widgets/Page/Page';
import {fetchArticleRecommendations} from '../../model/services/fetchArticleRecommendations';
import {articleDetailsPageReducer} from '../../model/slices';
import {ArticleDetailsComments} from '../ArticleDetailsComments/ArticleDetailsComments';
import {ArticleDetailsPageHeader} from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';
import cls from './ArticleDetailsPage.module.scss';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer
}

const ArticleDetailsPage = memo(({className}: ArticleDetailsPageProps) => {
    const {t} = useTranslation('articles');
    const {id} = useParams<{ id: string }>();
    const dispatch = useAppDispatch();

    useInitialEffect(() => {
        dispatch(fetchArticleRecommendations());
    });

    if(!id) {
        return (
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('Article not found')}
            </Page>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page className={classNames('', {}, [className])}>
                <VStack gap='16' max>
                    <ArticleDetailsPageHeader/>
                    <ArticleDetails id={id}/>
                    <ArticleRecommendationsList/>
                    <ArticleDetailsComments id={id}/>
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
})

export default ArticleDetailsPage;