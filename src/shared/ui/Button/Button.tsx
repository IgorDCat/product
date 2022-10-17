import React, {ButtonHTMLAttributes, FC} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Button.module.scss";

export enum ThemeButton {
	CLEAR = "clear",
    OUTLINE = "outline",
    COLLAPSE = "collapse"
}

type HTMLButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "disabled">

interface ButtonProps extends HTMLButtonProps{
	className?: string;
	theme?: ThemeButton;
    disabled?: string | boolean;
}

export const Button: FC<ButtonProps> = (props) => {
    const {className, children, theme, disabled, ...otherProps} = props
    return (
        <button className={classNames(cls.Button, {[cls.disabled]: disabled}, [className, cls[theme]])}
            {...otherProps}>
            {children}
        </button>
    );
}