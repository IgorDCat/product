import React, {memo, useCallback} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './ArticleDetailsPage.module.scss';
import {useTranslation} from 'react-i18next';
import {ArticleDetails} from 'entities/Article';
import {useParams} from 'react-router-dom';
import {TextCustom} from 'shared/ui/Text/TextCustom';
import {CommentList} from 'entities/Comment';
import {DynamicModuleLoader, ReducersList} from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import {articleDetailsCommentReducer, getArticleComments} from '../model/slices/articleDetailsCommentSlice';
import {useSelector} from 'react-redux';
import {getArticleCommentsIsLoading} from '../model/selectors/getArticleComments';
import {useInitialEffect} from 'shared/lib/hooks/UseInitialEffect/UseInitialEffect';
import {useAppDispatch} from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import {fetchCommentsByArticleId} from 'pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId';
import {AddCommentForm} from 'features/AddCommentForm';
import {addCommentForArticle} from '../model/services/addCommentForArticle';

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

    useInitialEffect(() => dispatch(fetchCommentsByArticleId(id)));

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text))
    }, [dispatch]);

    if(!id) {
        return (
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                {t('Article not found')}
            </div>
        )
    }

    return (
        <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
            <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
                <ArticleDetails id={id}/>
                <TextCustom title={t('Comments')} className={cls.commentsTitle}/>
                <AddCommentForm onSendComment={onSendComment}/>
                <CommentList comments={comments} isLoading={commentsIsLoading}/>
            </div>
        </DynamicModuleLoader>
    );
})

export default ArticleDetailsPage;