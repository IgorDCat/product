import React, {memo, useCallback} from "react";
import {useSelector} from "react-redux";
import {classNames} from "shared/lib/classNames/classNames";
import cls from "./LoginForm.module.scss";
import {useTranslation} from "react-i18next";
import {Button} from "shared/ui/Button/Button";
import {Input} from "shared/ui/Input/Input";
import {loginActions, loginReducer} from "../../model/slice/loginSlice";
import {loginByUsername} from "../../model/services/loginByUsername/loginByUsername";
import {Text, TextTheme} from "shared/ui/Text/Text";
import {getLoginUsername} from "../../model/selectors/getLoginUsername/getLoginUsername";
import {getLoginPassword} from "../../model/selectors/getLoginPassword/getLoginPassword";
import {getLoginIsLoading} from "../../model/selectors/getLoginIsLoading/getLoginIsLoading";
import {getLoginError} from "../../model/selectors/getLoginError/getLoginError";
import {DynamicModuleLoader, ReducersList} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {useAppDispatch} from "shared/lib/hooks/useAppDispatch/useAppDispatch";

export interface LoginFormProps {
	className?: string;
    onSuccess: () => void;
}

const initialReducers: ReducersList = {
    loginForm: loginReducer
}

const LoginForm = memo(({className, onSuccess}: LoginFormProps) => {
    const dispatch = useAppDispatch();
    const {t} = useTranslation();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);

    const onChangeUsername = useCallback((value: string) => {
        dispatch(loginActions.setUserName(value))
    }, [dispatch]);

    const onChangePassword = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value))
    }, [dispatch]);

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({username, password}))
        console.log(result)
        if(result.meta.requestStatus === "fulfilled") {
            onSuccess()
        }
    }, [dispatch, onSuccess, password, username]);

    return (
        <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
            <div className={classNames(cls.LoginForm, {}, [className])}>
                {error && <Text text={error} theme={TextTheme.ERROR}></Text>}
                <Input className={cls.input} placeholder={t("username")} type="text" onChange={onChangeUsername}
                    value={username}/>

                <Input className={cls.input} placeholder={t("password")} type="text" onChange={onChangePassword}
                    value={password}/>

                <Button onClick={onLoginClick} disabled={isLoading} className={cls.loginBtn}>{t("Log-in")}</Button>
            </div>
        </DynamicModuleLoader>
    );
})

export default LoginForm;