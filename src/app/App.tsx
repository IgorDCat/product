import {useTheme} from '@/shared/lib/hooks/useTheme/useTheme';
import {AppRouter} from './providers/router';
import {getUserIsInit, initAuthData} from '@/entities/User';
import React, {Suspense, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {classNames} from '@/shared/lib/classNames/classNames';
import {Navbar} from '@/widgets/Navbar';
import {Sidebar} from '@/widgets/Sidebar';
import './styles/index.scss'
import {useAppDispatch} from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {PageLoader} from '@/widgets/PageLoader';

export const App = () => {
    const {theme} = useTheme();
    const dispatch = useAppDispatch();
    const isInit = useSelector(getUserIsInit);

    useEffect(() => {
        dispatch(initAuthData())
    }, [dispatch]);

    if(!isInit) {
        return <PageLoader/>
    }

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
