import {NotificationList} from '@/entities/Notification';
import React, {memo, useCallback, useState} from 'react';
import NotificationIcon from '@/shared/assets/icons/notification.svg';
import {classNames} from '@/shared/lib/classNames/classNames';
import {AnimationProvider} from '@/shared/lib/components/AnimationProvider';
import {Button, ThemeButton} from '@/shared/ui/Button/Button';
import {Drawer} from '@/shared/ui/Drawer/Drawer';
import {Icon} from '@/shared/ui/Icon/Icon';
import {Popover} from '@/shared/ui/Popups';
import cls from './NotificationButton.module.scss';
import {isMobile} from 'react-device-detect';

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
                <AnimationProvider>
                    <Drawer isOpen={isOpen} onClose={onCloseDrawer}>
                        <NotificationList/>
                    </Drawer>
                </AnimationProvider>
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