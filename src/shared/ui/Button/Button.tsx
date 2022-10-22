import React, {ButtonHTMLAttributes, FC, memo, ReactNode} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";

export enum ThemeButton {
    NORMAL = "normal",
	CLEAR = "clear",
    OUTLINE = "outline",
    COLLAPSE = "collapse"
}

type HTMLButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "disabled">

interface ButtonProps extends HTMLButtonProps{
	className?: string;
	theme?: ThemeButton;
    disabled?: string | boolean;
    children?: ReactNode;
}

export const Button: FC<ButtonProps> = memo((props: ButtonProps) => {
    const {className, children, theme = ThemeButton.NORMAL, disabled, ...otherProps} = props
    return (
        <button className={classNames(cls.Button, {[cls.disabled]: disabled}, [className, cls[theme]])}
            {...otherProps}>
            {children}
        </button>
    );
})