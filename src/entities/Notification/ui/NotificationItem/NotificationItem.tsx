import React, {memo} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import {Card, CardTheme} from '@/shared/ui/Card';
import {NotificationType} from '../../model/types/notification';
import cls from './NotificationItem.module.scss';
import {Text} from '@/shared/ui/Text'

interface NotificationItemProps {
    className?: string;
    item: NotificationType;
}

export const NotificationItem = memo((props: NotificationItemProps) => {
    const {className, item} = props;

    const content = (
        <Card
            className={classNames(cls.NotificationItem, {}, [className])}
            theme={CardTheme.OUTLINED}
        >
            <Text title={item.title}/>
            <Text text={item.description}/>
        </Card>
    )

    if(item.href) {
        return (
            <a href={item.href} className={cls.link} target='_blank' rel="noreferrer">
                {content}
            </a>
        );
    }
    return content
})