import React, {memo} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import {VStack} from '@/shared/ui/Stack';
import cls from './CommentList.module.scss';
import {Text} from '@/shared/ui/Text/Text'
import {useTranslation} from 'react-i18next';
import {CommentCard} from '../CommentCard/CommentCard';
import {CommentType} from '../../model/types/comment';

interface CommentListProps {
    className?: string;
    comments?: CommentType[];
    isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
    const {className, comments, isLoading} = props;
    const {t} = useTranslation();

    if(isLoading) {
        return (
            <div className={classNames('', {}, [className, cls.loading])}>
                <CommentCard isLoading/>
                <CommentCard isLoading/>
                <CommentCard isLoading/>
            </div>
        )
    }

    return (
        <VStack gap='16' max className={classNames('', {}, [className])}>
            {comments?.length
                ? comments.map(comm =>
                    <CommentCard
                        comment={comm}
                        key={comm.id}
                        className={cls.comment}
                        isLoading={isLoading}
                    />)
                : <Text text={t('No comments')}/>
            }
        </VStack>
    );
})