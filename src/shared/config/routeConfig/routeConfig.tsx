import { RouteProps } from "react-router-dom";
import {MainPage} from "pages/mainPage";
import * as React from "react";
import {AboutPage} from "pages/aboutPage";
import {NotFoundPage} from "pages/NotFoundPage";

export enum AppRoutes {
	MAIN = "main",
	ABOUT = "about",
    NOT_FOUND = "notFound"
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.ABOUT]: "/about",
    // "not_found" must be last
    [AppRoutes.NOT_FOUND]: "*"
}

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage/>
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage/>
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.notFound,
        element: <NotFoundPage/>
    }
}