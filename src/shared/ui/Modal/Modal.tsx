import {useTheme} from '@/app/providers/ThemeProvider';
import React, {ReactNode} from 'react';
import {classNames, Mods} from '@/shared/lib/classNames/classNames';
import {useModal} from '@/shared/lib/hooks/useModal/useModal';
import {Overlay} from '../Overlay/Overlay';
import {Portal} from '../Portal/Portal';
import cls from './Modal.module.scss';
// import {useDrag} from '@use-gesture/react'
// import {a, useSpring, config} from '@react-spring/web'

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    disablePortal?: boolean;
    lazy?: boolean;
}

export const Modal = (props: ModalProps) => {
    const {children, className, isOpen, onClose, disablePortal} = props;
    const {theme} = useTheme();

    const {isClosing, closeModal} = useModal({isOpen, onClose, animationDelay: 300});

    const mods: Mods = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing
    }

    return (
        <Portal disablePortal={disablePortal}>
            <div className={classNames(cls.Modal, mods, [className, theme])}>
                <Overlay onClick={closeModal}/>
                <div className={cls.content}>
                    {children}
                </div>
            </div>
        </Portal>
    );
}