import React, {Suspense} from 'react';
import {Counter} from "./Counter";
import '../styles/index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {MainPageLazy} from "../../pages/MainPageLazy";
import {AboutLazy} from "../../pages/AboutLazy";
import {useTheme} from "../../theme/useTheme";
import {classNames} from "../../helpers/classNames";


export const App = () => {
    const {theme, changeTheme} = useTheme()

    return (
        <div className={classNames("app", {}, [theme])}>
            <div>
                <button onClick={changeTheme}>theme</button>
            </div>

            <Link to="/">Главная </Link><br/>
            <Link to="/about">о сайте </Link>
             <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<MainPageLazy/>}/>
                <Route path="/about" element={<AboutLazy/>}/>
            </Routes>
             </Suspense>
            text
            <Counter/>
        </div>
    );
};
