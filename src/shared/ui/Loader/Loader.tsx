import React from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./Loader.module.scss";

interface LoaderProps {
	className?: string;
}

export const Loader = ({className}: LoaderProps) => {
    return (
        <div className={classNames(cls.ldsDualRing, {}, [className])}>

        </div>
    );
}