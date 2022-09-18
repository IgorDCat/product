import React, { Suspense } from 'react';
import {Route, Routes} from "react-router-dom";
import {MainPage} from "pages/mainPage";
import {AboutPage} from "pages/aboutPage";
import {routeConfig} from "shared/config/routeConfig/routeConfig";

const AppRouter = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				{Object.values(routeConfig).map(({path, element})=>{
					return <Route key={path} path={path} element={element}/>
				})}
			</Routes>
		</Suspense>
	);
};

export default AppRouter;