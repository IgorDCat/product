import {AppRouter} from 'app/providers/router';
import {useTheme} from 'app/providers/ThemeProvider';
import {getUserIsInit, userActions} from 'entities/User';
import React, {Suspense, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {classNames} from 'shared/lib/classNames/classNames';
import {Navbar} from 'widgets/Navbar';
import {Sidebar} from 'widgets/Sidebar';
import './styles/index.scss'

export const App = () => {
    const {theme} = useTheme();
    const dispatch = useDispatch();
    const isInit = useSelector(getUserIsInit)

    useEffect(() => {
        dispatch(userActions.initAuthData())
    }, [dispatch]);

    return (
        <Suspense fallback="">
            <div className={classNames('app', {}, [theme])}>
                <Navbar/>
                <div className="content-page">
                    <Sidebar/>
                    {isInit && <AppRouter/>}
                </div>
            </div>
        </Suspense>
    );
};
