import {Skeleton} from 'shared/ui/Skeleton/Skeleton';
import {NotificationItem} from '../NotificationItem/NotificationItem';
import {VStack} from 'shared/ui/Stack';
import {useNotifications} from '../../api/notificationApi';
import React, {memo} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './NotificationList.module.scss';

interface NotificationListProps {
    className?: string;
}

export const NotificationList = memo((props: NotificationListProps) => {
    const {className} = props;
    const {data, isLoading} = useNotifications(null);

    if(isLoading) {
        return (
            <VStack max className={classNames(cls.NotificationList, {}, [className])}>
                <Skeleton width='105%' height={80} border='5px'/>
                <Skeleton width='105%' height={80} border='5px'/>
                <Skeleton width='105%' height={80} border='5px'/>
            </VStack>
        )
    }

    return (
        <VStack max className={classNames(cls.NotificationList, {}, [className])}>
            {data?.map((item) => {
                return <NotificationItem key={item.id} item={item}/>
            })}
        </VStack>
    );
})