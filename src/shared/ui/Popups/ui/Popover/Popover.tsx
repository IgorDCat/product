import {Popover as HPopover} from '@headlessui/react'
import React, {ReactNode} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import {DropDirection} from 'shared/types/ui';
import {mapDirection} from '../../styles/consts';
import popupCls from '../../styles/popup.module.scss';
import cls from './Popover.module.scss';

interface PopoverProps {
    className?: string;
    trigger: ReactNode;
    direction?: DropDirection;
    children: ReactNode;
}

export function Popover (props: PopoverProps) {
    const {className, trigger, direction = 'bottom right', children} = props;
    const menuClasses = [mapDirection[direction]];

    return (
        <HPopover className={classNames(cls.Popover, {}, [className, popupCls.popup])}>
            <HPopover.Button className={classNames(popupCls.trigger)}>
                {trigger}
            </HPopover.Button>
            <HPopover.Panel className={classNames(cls.panel, {}, menuClasses)}>
                {children}
            </HPopover.Panel>
        </HPopover>
    )
}