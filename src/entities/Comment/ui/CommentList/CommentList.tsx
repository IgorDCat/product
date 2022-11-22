import React, {memo} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './CommentList.module.scss';
import {TextCustom} from 'shared/ui/Text/TextCustom'
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
            <div className={classNames(cls.CommentList, {}, [className, cls.loading])}>
                <CommentCard isLoading/>
                <CommentCard isLoading/>
                <CommentCard isLoading/>
            </div>
        )
    }

    return (
        <div className={classNames(cls.CommentList, {}, [className])}>
            {comments?.length
                ? comments.map(comm =>
                    <CommentCard
                        comment={comm}
                        key={comm.id}
                        className={cls.comment}
                        isLoading={isLoading}
                    />)
                : <TextCustom text={t('No comments')}/>
            }
        </div>
    );
})