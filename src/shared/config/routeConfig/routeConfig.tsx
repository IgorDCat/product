import { RouteProps } from "react-router-dom";
import {MainPage} from "pages/MainPage";
import * as React from "react";
import {AboutPage} from "pages/AboutPage";
import {NotFoundPage} from "pages/NotFoundPage";
import {ProfilePage} from "pages/ProfilePage";

export enum AppRoutes {
	MAIN = "main",
	ABOUT = "about",
    PROFILE = "profile",
    // "not_found" must be last
    NOT_FOUND = "notFound"
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: "/",
    [AppRoutes.ABOUT]: "/about",
    [AppRoutes.PROFILE]: "/profile",
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
    [AppRoutes.PROFILE]: {
        path: RoutePath.profile,
        element: <ProfilePage/>
    },
    // "not_found" must be last
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.notFound,
        element: <NotFoundPage/>
    },
}