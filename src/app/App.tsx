import React from "react";
import "./styles/index.scss"
import {Link} from "react-router-dom";
import {useTheme} from "app/providers/themeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";


export const App = () => {
    const {theme, changeTheme} = useTheme()

    return (
        <div className={classNames("app", {}, [theme])}>
            <div>
                <button onClick={changeTheme}>theme</button>
            </div>

            <Link to="/">Главная </Link><br/>
            <Link to="/about">о сайте </Link>
            <AppRouter/>
        </div>
    );
};
