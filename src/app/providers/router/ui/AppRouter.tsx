import React, { Suspense } from "react";
import {Route, Routes} from "react-router-dom";
import {routeConfig} from "shared/config/routeConfig/routeConfig";
import {PageLoader} from "widgets/PageLoader/PageLoader";

const AppRouter = () => {
    return (
        <div className="page-wrapper">
            <Suspense fallback={<PageLoader/>}>
                <Routes>
                    {Object.values(routeConfig).map(({path, element}) => {
                        return <Route key={path} path={path} element={element}/>
                    })}
                </Routes>
            </Suspense>
        </div>
    );
};

export default AppRouter;