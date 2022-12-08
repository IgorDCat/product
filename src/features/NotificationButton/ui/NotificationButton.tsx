import {NotificationList} from '@/entities/Notification';
import NotificationIcon from '@/shared/assets/icons/notification.svg';
import {classNames} from '@/shared/lib/classNames/classNames';
import {Button, ThemeButton} from '@/shared/ui/Button/Button';
import {DrawerForMobile} from '@/shared/ui/Drawer/Drawer';
import {Icon} from '@/shared/ui/Icon/Icon';
import {Popover} from '@/shared/ui/Popups';
import React, {memo, useCallback, useState} from 'react';
import {isMobile} from 'react-device-detect';
import cls from './NotificationButton.module.scss';

interface NotificationButtonProps {
    className?: string;
}

export const NotificationButton = memo((props: NotificationButtonProps) => {
    const {className} = props;
    const [isOpen, setIsOpen] = useState(false);

    const onOpenDrawer = useCallback(() => {
        setIsOpen(true)
    }, []);

    const onCloseDrawer = useCallback(() => {
        setIsOpen(false)
    }, []);

    const trigger = <Icon Svg={NotificationIcon}/>

    if(isMobile) {
        return  (
            <div>
                <Button
                    className={classNames(cls.NotificationButtonMobile, {}, [className])}
                    theme={ThemeButton.CLEAR}
                    onClick={onOpenDrawer}
                >
                    {trigger}
                </Button>
                <DrawerForMobile isOpen={isOpen} onClose={onCloseDrawer}>
                    <NotificationList/>
                </DrawerForMobile>
            </div>
        )
    }

    return (
        <Popover
            className={classNames(cls.NotificationButton, {}, [className])}
            direction='bottom left'
            trigger={trigger}
        >
            <NotificationList/>
        </Popover>
    );
})