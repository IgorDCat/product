import {CommentList} from '@/entities/Comment';
import {AddCommentForm} from '@/features/AddCommentForm';
import {fetchCommentsByArticleId} from '../../model/services/fetchCommentsByArticleId';
import {useInitialEffect} from '@/shared/lib/hooks/useInitialEffect/useInitialEffect';
import {VStack} from '@/shared/ui/Stack';
import {getArticleCommentsIsLoading} from '../../model/selectors/getArticleComments';
import {addCommentForArticle} from '../../model/services/addCommentForArticle';
import {getArticleComments} from '../../model/slices/articleDetailsCommentSlice';
import React, {memo, useCallback} from 'react';
import {useSelector} from 'react-redux';
import {classNames} from '@/shared/lib/classNames/classNames';
import {useTranslation} from 'react-i18next';
import {useAppDispatch} from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {Text} from '@/shared/ui/Text/Text';

interface ArticleDetailsCommentsProps {
    className?: string;
    id: string;
}

export const ArticleDetailsComments = memo((props: ArticleDetailsCommentsProps) => {
    const {className, id} = props;
    const {t} = useTranslation();
    const comments = useSelector(getArticleComments.selectAll);
    const commentsIsLoading = useSelector(getArticleCommentsIsLoading);
    const dispatch = useAppDispatch();

    useInitialEffect(() => {
        dispatch(fetchCommentsByArticleId(id));
    });

    const onSendComment = useCallback((text: string) => {
        dispatch(addCommentForArticle(text))
    }, [dispatch]);

    return (
        <VStack max className={classNames('', {}, [className])}>
            <Text title={t('Comments')}/>
            <AddCommentForm onSendComment={onSendComment}/>
            <CommentList comments={comments} isLoading={commentsIsLoading}/>
        </VStack>
    );
})