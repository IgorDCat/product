import {routeConfig} from '../config/routeConfig';
import {AppRouteProps} from '@/shared/types/router';
import React, {memo, Suspense, useCallback} from 'react';
import {Route, Routes} from 'react-router-dom';
import {PageLoader} from '@/widgets/PageLoader';
import {RequireAuth} from './RequireAuth';

const AppRouter = () => {

    const renderWithWrapper = useCallback((route: AppRouteProps) => {

        const elem = (
            <Suspense fallback={<PageLoader/>}>
                {route.element}
            </Suspense>
        )

        return (
            <Route key={route.path}
                path={route.path}
                element={route.authOnly ? <RequireAuth roles={route.roles}>{elem}</RequireAuth> : elem}
            />
        );
    }, []);

    return (
        <Routes>
            {Object.values(routeConfig).map(renderWithWrapper)}
        </Routes>
    );
};

export default memo(AppRouter);