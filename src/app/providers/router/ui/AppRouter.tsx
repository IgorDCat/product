import React, {memo, Suspense, useMemo} from "react";
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "shared/config/routeConfig/routeConfig";
import {PageLoader} from "widgets/PageLoader/PageLoader";

interface AppRouterProps {
    isAuth: boolean
}

const AppRouter = ({isAuth}: AppRouterProps) => {

    const routes = useMemo(() => {
        return Object.values(routeConfig).filter(route => {
            if(route?.authOnly && !isAuth) {
                return false
            }
            return true
        })
    },[isAuth])

    return (
        <div className="page-wrapper">
            <Suspense fallback={<PageLoader/>}>
                <Routes>
                    {routes.map(({path, element}) => {
                        return <Route key={path} path={path} element={element}/>
                    })}
                </Routes>
            </Suspense>
        </div>
    );
};

export default memo(AppRouter);