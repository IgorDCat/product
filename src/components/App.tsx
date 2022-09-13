import React, { Suspense } from 'react';
import {Counter} from "./Counter";
import './index.scss'
import {Link, Route, Routes} from "react-router-dom";
import {MainPageLazy} from "../../pages/MainPageLazy";
import {AboutLazy} from "../../pages/AboutLazy";

export const App = () => {
    return (
        <div className="app">
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
