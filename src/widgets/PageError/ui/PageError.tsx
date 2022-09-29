import React from "react";
import cls from "./PageError.module.scss";
import {classNames} from "shared/lib/classNames/classNames";
import {useTranslation} from "react-i18next";
import {Button, ThemeButton} from "shared/ui/Button/Button";

export const PageError = () => {
    const {t} = useTranslation();
    const reloadPage = () => {
        location.reload()
    }
    return (
        <div className={classNames(cls.PageError)}>
            <p>{t("Error: Something went wrong")}</p>
            <Button theme={ThemeButton.OUTLINE} onClick={reloadPage}>{t("Reload page")}</Button>
        </div>
    );
}