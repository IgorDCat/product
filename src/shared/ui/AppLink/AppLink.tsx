import React, {FC, memo, ReactNode} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss'
import {Link, LinkProps} from 'react-router-dom';

export enum AppLinkTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary'
}

interface AppLinkProps extends LinkProps {
	className?: string;
	to: string;
	theme?: string;
	children: ReactNode;
}

export const AppLink: FC<AppLinkProps> = memo((props: AppLinkProps) => {
    const {className, to, children, theme = AppLinkTheme.PRIMARY, ...otherProps} = props

    return (
        <Link to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])} {...otherProps}>
            {children}
        </Link>
    );
})