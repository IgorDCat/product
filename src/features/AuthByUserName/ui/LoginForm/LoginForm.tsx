import React from "react";
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./LoginForm.module.scss";
import {useTranslation} from "react-i18next";
import {Button} from "shared/ui/Button/Button";
import {Input} from "shared/ui/Input/Input";

interface LoginFormProps {
	className?: string;
}

export const LoginForm = ({className}: LoginFormProps) => {
    const {t} = useTranslation();
    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <Input className={cls.input} placeholder={t("username")} type="text"/>
            <Input className={cls.input} placeholder={t("password")} type="text"/>
            <Button className={cls.loginBtn}>{t("Log-in")}</Button>
        </div>
    );
}