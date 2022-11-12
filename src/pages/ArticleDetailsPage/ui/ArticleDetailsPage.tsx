import React, {memo, useCallback} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';
import {useTranslation} from 'react-i18next';
import {ArticleDetails} from 'entities/Article';
import {useNavigate, useParams} from 'react-router-dom';
import {TextCustom} from 'shared/ui/Text/TextCustom';
import {CommentList} from 'entities/Comment';
import {DynamicModuleLoader, ReducersList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {articleDetailsCommentReducer, getArticleComments} from '../model/slices/articleDetailsCommentSlice';
import {useSelector} from 'react-redux';
import {getArticleCommentsIsLoading} from '../model/selectors/getArticleComments';
import {useInitialEffect} from 'shared/lib/hooks/useInitialEffect/useInitialEffect';
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {fetchCommentsByArticleId} from '../model/services/fetchCommentsByArticleId';
import {AddCommentForm} from 'features/AddCommentForm';
import {addCommentForArticle} from '../model/services/addCommentForArticle';
import {Button, ThemeButton} from 'shared/ui/Button/Button';
import {RoutePath} from 'shared/config/routeConfig/routeConfig';
import {Page} from 'shared/ui/Page/Page';

interface ArticleDetailsPageProps {
    className?: string;
}

const reducers: ReducersList = {
    articleDetailsComments: articleDetailsCommentReducer
}

const ArticleDetailsPage = memo(({className}: ArticleDetailsPageProps) => {
    const {t} = useTranslation('articles');
    const {id} = useParams<{ id: string }>();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useInitialEffect(() => dispatch(fetchCommentsByArticleId(id)));

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text))
    }, [dispatch]);

    const backToList = useCallback(() => {
        navigate(RoutePath.articles)
    }, [navigate]);

    if(!id) {
        return (
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('Article not found')}
            </Page>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers}>
            <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <Button theme={ThemeButton.OUTLINE} onClick={backToList}>
                    {t('< Back to list')}
                </Button>
                <ArticleDetails id={id}/>
                <TextCustom title={t('Comments')} className={cls.commentsTitle}/>
                <AddCommentForm onSendComment={onSendComment}/>
                <CommentList comments={comments} isLoading={commentsIsLoading}/>
            </Page>
        </DynamicModuleLoader>
    );
})

export default ArticleDetailsPage;