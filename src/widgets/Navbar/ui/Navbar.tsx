import React from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Navbar.module.scss"
import {AppLink} from "shared/ui/AppLink/AppLink";

interface NavbarProps {
	className?: string
}

export const Navbar = ({className}: NavbarProps) => {
	return (
		<div className={classNames(cls.Navbar, {}, [className])}>
			<div className={classNames(cls.mainLinks)}>
				<AppLink to={"/"} className={classNames(cls.mainLink)}>Main page </AppLink>
            	<AppLink to={"/about"} className={classNames(cls.mainLink)}>About us </AppLink>
			</div>
		</div>
	);
};
