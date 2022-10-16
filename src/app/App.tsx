import React, {Suspense, useEffect} from "react";
import "./styles/index.scss"
import {useTheme} from "app/providers/themeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";
import {useDispatch} from "react-redux";
import {userActions} from "entities/User";

export const App = () => {
    const {theme} = useTheme();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [dispatch]);

    return (
        <Suspense fallback="">
            <div className={classNames("app", {}, [theme])}>
                <Navbar/>
                <div className="content-page">
                    <Sidebar/>
                    <AppRouter/>
                </div>
            </div>
        </Suspense>
    );
};
