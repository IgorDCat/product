import React, {FC} from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./AppLink.module.scss"
import {Link} from "react-router-dom";

export enum AppLinkTheme {
	PRIMARY = "primary",
	SECONDARY = "secondary"
}

interface AppLinkProps {
	className?: string;
	to: string;
	theme?: string
}

export const AppLink: FC<AppLinkProps> = (props) => {
	const {className, to, children, theme = AppLinkTheme.PRIMARY} = props

	return (
		<Link to={to} className={classNames(cls.AppLink, {}, [className, cls[theme]])}>
			{children}
		</Link>
	);
};