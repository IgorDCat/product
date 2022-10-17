import React, {ReactNode, useCallback, useEffect, useRef, useState} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Modal.module.scss";
import {Portal} from "shared/ui/Portal/Portal";
import {useTheme} from "app/providers/themeProvider";

interface ModalProps {
    className?: string;
    children?: ReactNode;
    isOpen?: boolean;
    onClose?: () => void;
    disablePortal?: boolean;
}

export const Modal = (props: ModalProps) => {
    const {children, className, isOpen, onClose, disablePortal} = props;

    const [isClosing, setIsClosing] = useState(false);
    const timerRef = useRef<ReturnType<typeof setTimeout>>();
    const {theme} = useTheme();

    const closeHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true)
            timerRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false)
            }, 300)
        }
    }, [onClose])

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === "Escape") {
            closeHandler();
        }
    }, [closeHandler])

    useEffect(() => {
        if (isOpen) {
            window.addEventListener("keydown", onKeyDown)
        }
        return () => {
            clearTimeout(timerRef.current);
            window.removeEventListener("keydown", onKeyDown);
        }
    }, [isOpen, onKeyDown])

    const onContentClick = (e: React.MouseEvent) => {
        e.stopPropagation()
    }

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing
    }

    return (
        <Portal disablePortal={disablePortal}>
            <div className={classNames(cls.Modal, mods, [className, theme])}>
                <div className={cls.overlay} onClick={closeHandler}>
                    <div className={cls.content} onClick={onContentClick}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
}