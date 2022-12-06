import React, {memo} from 'react';
import {RoutePath} from '@/shared/config/routeConfig/routeConfig';
import {classNames} from '@/shared/lib/classNames/classNames';
import {AppLink} from '@/shared/ui/AppLink/AppLink';
import {Avatar} from '@/shared/ui/Avatar/Avatar';
import {Skeleton} from '@/shared/ui/Skeleton/Skeleton';
import {HStack, VStack} from '@/shared/ui/Stack';
import {Text, TextSize} from '@/shared/ui/Text/Text';
import {CommentType} from '../../model/types/comment';
import cls from './CommentCard.module.scss';

interface CommentCardProps {
    className?: string;
    comment?: CommentType;
    isLoading?: boolean;
}

export const CommentCard = memo(({className, comment, isLoading}: CommentCardProps) => {

    if(isLoading) {
        return  (
            <VStack className={classNames('', {}, [className])}>
                <HStack gap='10'>
                    <Skeleton width={30} height={30} border='50%'/>
                    <Skeleton width={100} height={17}/>
                </HStack>
                <Skeleton width='100%' height={50}/>
            </VStack>
        )
    }

    return (
        <VStack gap='10' max className={classNames(cls.CommentCard, {}, [className])}>
            <AppLink to={`${RoutePath.profile}${comment?.user.id}`} className={cls.header}>
                {comment?.user.avatar && <Avatar size={30} src={comment?.user.avatar}/>}
                <Text text={comment?.user.username} size={TextSize.M}/>
            </AppLink>
            <Text text={comment?.text} className={cls.text}/>
        </VStack>
    );
})