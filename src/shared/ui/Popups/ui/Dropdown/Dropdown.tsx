import {Menu} from '@headlessui/react'
import React, {Fragment, ReactNode} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import {DropDirection} from '@/shared/types/ui';
import {AppLink} from '../../../AppLink/AppLink';
import {mapDirection} from '../../styles/consts';
import cls from './Dropdown.module.scss';
import popupCls from '../../styles/popup.module.scss'

export interface DropdownItem {
    content?: ReactNode;
    onClick?: () => void;
    link?: string;
    disabled?: boolean;
}

interface DropdownProps {
    className?: string;
    items: DropdownItem[];
    trigger: ReactNode;
    direction?: DropDirection;
}

export const Dropdown = (props: DropdownProps) => {
    const {className, items, trigger, direction = 'bottom right'} = props;

    const optionsClasses = [
        className,
        mapDirection[direction],
        popupCls.active
    ]

    return (
        <Menu as='span' className={classNames(popupCls.popup, {}, optionsClasses)}>
            <Menu.Button className={popupCls.trigger}>
                {trigger}
            </Menu.Button>
            <Menu.Items className={classNames(cls.menu, {}, optionsClasses)}>
                {items.map((item, index) => {
                    const content = ({active}: {active: boolean}) => (
                        <option
                            className={classNames(cls.item, {[popupCls.active]: active})}
                            onClick={item.onClick}
                        >
                            {item.content}
                        </option>
                    )
                    if(item.link) {
                        return (
                            <Menu.Item as={AppLink} to={item.link} key={index} disabled={item.disabled} refName='href'>
                                {content}
                            </Menu.Item>
                        )
                    }
                    return (
                        <Menu.Item as={Fragment} key={index} disabled={item.disabled}>
                            {content}
                        </Menu.Item>
                    )
                })}
            </Menu.Items>
        </Menu>
    )
}