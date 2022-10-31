import { RouteProps } from 'react-router-dom';
import {MainPage} from 'pages/MainPage';
import React from 'react';
import {AboutPage} from 'pages/AboutPage';
import {NotFoundPage} from 'pages/NotFoundPage';
import {ProfilePage} from 'pages/ProfilePage';
import {ArticlesPage} from 'pages/ArticlesPage';
import {ArticleDetailsPage} from 'pages/ArticleDetailsPage';

export type AppRouteProps = RouteProps & {
    authOnly?: boolean;
}

export enum AppRoutes {
	MAIN = 'main',
	ABOUT = 'about',
    PROFILE = 'profile',
    ARTICLES = 'articles',
    ARTICLE_DETAILS = 'article_details',
    // "not_found" must be last
    NOT_FOUND = 'notFound'
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLE_DETAILS]: '/articles', // + id
    // "not_found" must be last
    [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
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
        element: <ProfilePage/>,
        authOnly: true,
    },
    [AppRoutes.ARTICLES]: {
        path: RoutePath.articles,
        element: <ArticlesPage/>,
        authOnly: true,
    },
    [AppRoutes.ARTICLE_DETAILS]: {
        path: RoutePath.article_details + '/:id',
        element: <ArticleDetailsPage/>,
        authOnly: true,
    },
    // "not_found" must be last
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.notFound,
        element: <NotFoundPage/>
    },
}