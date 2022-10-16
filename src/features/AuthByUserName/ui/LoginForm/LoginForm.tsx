import React, {memo, useCallback} from "react";
import {useDispatch, useSelector} from "react-redux";
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./LoginForm.module.scss";
import {useTranslation} from "react-i18next";
import {Button} from "shared/ui/Button/Button";
import {Input} from "shared/ui/Input/Input";
import {loginActions} from "../../model/slice/loginSlice";
import {getLoginState} from "../../model/selectors/getLoginState/getLoginState";
import {loginByUsername} from "../../model/services/loginByUsername/loginByUsername";
import {Text, TextTheme} from "shared/ui/Text/Text";

interface LoginFormProps {
	className?: string;
}

export const LoginForm = memo(({className}: LoginFormProps) => {
    const dispatch = useDispatch();
    const {t} = useTranslation();
    const {username, password, isLoading, error} = useSelector(getLoginState)

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUserName(value))
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({username, password}))
    }, [dispatch, password, username]);

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            {error && <Text text={error} theme={TextTheme.ERROR}></Text>}
            <Input className={cls.input} placeholder={t("username")} type="text" onChange={onChangeUsername}
                value={username}/>

            <Input className={cls.input} placeholder={t("password")} type="text" onChange={onChangePassword}
                value={password}/>

            <Button onClick={onLoginClick} disabled={isLoading} className={cls.loginBtn}>{t("Log-in")}</Button>
        </div>
    );
})