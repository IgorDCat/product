import React, {memo, useCallback} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {VStack} from 'shared/ui/Stack';
import cls from './ArticleDetailsPage.module.scss';
import {useTranslation} from 'react-i18next';
import {ArticleDetails, ArticleList} from 'entities/Article';
import {useParams} from 'react-router-dom';
import {Text} from 'shared/ui/Text/Text';
import {CommentList} from 'entities/Comment';
import {DynamicModuleLoader, ReducersList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {getArticleComments} from '../../model/slices/articleDetailsCommentSlice';
import {useSelector} from 'react-redux';
import {getArticleCommentsIsLoading} from '../../model/selectors/getArticleComments';
import {useInitialEffect} from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {fetchCommentsByArticleId} from '../../model/services/fetchCommentsByArticleId';
import {AddCommentForm} from 'features/AddCommentForm';
import {addCommentForArticle} from '../../model/services/addCommentForArticle';
import {Page} from 'widgets/Page/Page';
import {getArticleRecommendations} from '../../model/slices/articleDetailsRecommendationsSlice';
import {getArticleRecommendationsIsLoading} from '../../model/selectors/getRecommendations';
import {fetchArticleRecommendations} from '../../model/services/fetchArticleRecommendations';
import {articleDetailsPageReducer} from '../../model/slices';
import {ArticleDetailsPageHeader} from '../ArticleDetailsPageHeader/ArticleDetailsPageHeader';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsPage: articleDetailsPageReducer
}

const ArticleDetailsPage = memo(({className}: ArticleDetailsPageProps) => {
    const {t} = useTranslation('articles');
    const {id} = useParams<{ id: string }>();
    const comments = useSelector(getArticleComments.selectAll);
    const recommendations = useSelector(getArticleRecommendations.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const recommendationsIsLoading = useSelector(getArticleRecommendationsIsLoading);
    const dispatch = useAppDispatch();

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
        dispatch(fetchArticleRecommendations());
    });

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text))
    }, [dispatch]);

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
                    <Text title={t('Recommended')} className={cls.commentsTitle}/>
                    <ArticleList
                        articles={recommendations}
                        isLoading={recommendationsIsLoading}
                        className={cls.recommendations}
                        target='_blank'
                    />
                    <Text title={t('Comments')} className={cls.commentsTitle}/>
                    <AddCommentForm onSendComment={onSendComment}/>
                    <CommentList comments={comments} isLoading={commentsIsLoading}/>
                </VStack>
            </Page>
        </DynamicModuleLoader>
    );
})

export default ArticleDetailsPage;