import React, {memo} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './CommentCard.module.scss';
import {CommentType} from 'entities/Comment';
import {Avatar} from 'shared/ui/Avatar/Avatar';
import {TextCustom, TextSize} from 'shared/ui/Text/TextCustom';
import {Skeleton} from 'shared/ui/Skeleton/Skeleton';
import {AppLink} from 'shared/ui/AppLink/AppLink';
import {RoutePath} from 'shared/config/routeConfig/routeConfig';

interface CommentCardProps {
    className?: string;
    comment?: CommentType;
    isLoading?: boolean;
}

export const CommentCard = memo(({className, comment, isLoading}: CommentCardProps) => {

    if(isLoading) {
        return  (
            <div className={classNames(cls.CommentCard, {}, [className])}>
                <div className={cls.header}>
                    <Skeleton width={30} height={30} border='50%'/>
                    <Skeleton width={100} height={17}/>
                </div>
                <Skeleton width='100%' height={50}/>
            </div>
        )
    }

    return (
        <div className={classNames(cls.CommentCard, {}, [className])}>
            <AppLink to={`${RoutePath.profile}${comment?.user.id}`} className={cls.header}>
                {comment?.user.avatar && <Avatar size={30} src={comment?.user.avatar}/>}
                <TextCustom text={comment?.user.username} size={TextSize.M}/>
            </AppLink>
            <TextCustom text={comment?.text}/>
        </div>
    );
})