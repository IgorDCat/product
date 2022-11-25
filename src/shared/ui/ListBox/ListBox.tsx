import {Fragment, ReactNode} from 'react'
import { Listbox } from '@headlessui/react'
import {classNames, Mods} from 'shared/lib/classNames/classNames';
import cls from './ListBox.module.scss'

export interface ListBoxItem {
    value: string;
    content: ReactNode;
    disabled?: boolean;
}

type DropDirection = 'up' | 'down';

interface ListBoxProps {
    items?: ListBoxItem[];
    className?: string;
    value?: string;
    defaultValue?: string;
    onChange: (value: string) => void;
    readonly?: boolean;
    label?: string;
    direction?: DropDirection;
}

const mapDirection: Record<DropDirection, string> = {
    up: cls.up,
    down: cls.down
}

export const ListBox = (props: ListBoxProps) => {
    const {className, items, value, defaultValue, onChange, readonly, label, direction = 'down'} = props;

    const optionsClasses = [
        className,
        mapDirection[direction]
    ]

    const mods: Mods = {
        [cls.disabled]: readonly
    }

    return (
        <div>
            {label && <span>{label}</span>}
            <Listbox
                as='span'
                className={classNames(cls.ListBox, {}, optionsClasses)}
                value={value}
                onChange={onChange}
                disabled={readonly}
            >
                <Listbox.Button className={classNames(cls.trigger, mods, optionsClasses)}>
                    {value ?? defaultValue}
                </Listbox.Button>
                <Listbox.Options className={classNames(cls.options, {}, optionsClasses)}>
                    {items?.map((item) => (
                        <Listbox.Option
                            key={item.value}
                            value={item.value}
                            disabled={item.disabled}
                            as={Fragment}
                        >
                            {({ active, selected }) => (
                                <option className={classNames(cls.item,
                                    {
                                        [cls.active]: active,
                                        [cls.disabled]: item.disabled
                                    },
                                    optionsClasses)}
                                >
                                    {item.content}
                                    {selected && ' ☑'}
                                </option>
                            )}
                        </Listbox.Option>
                    ))}
                </Listbox.Options>
            </Listbox>
        </div>
    )
}