import {getRouteAbout, getRouteArticles, getRouteMain, getRouteProfile} from '@/shared/const/router';
import {SidebarItemsType} from '../types/sidebar';
import MainPageIcon from '@/shared/assets/icons/main-page.svg';
import AboutPageIcon from '@/shared/assets/icons/about-page.svg';
import ProfilePageIcon from '@/shared/assets/icons/profile-page.svg';
import ArticlePageIcon from '@/shared/assets/icons/articles-page.svg';
import {createSelector} from '@reduxjs/toolkit';
import {getUserAuthData} from '@/entities/User';

export const getSidebarItems = createSelector(
    getUserAuthData, (userData) => {
        const sidebarItemsList: SidebarItemsType[] = [
            {
                path: getRouteMain(),
                text: 'Main page',
                icon: MainPageIcon
            },
            {
                path: getRouteAbout(),
                text: 'About page',
                icon: AboutPageIcon
            },
        ]
        if(userData) {
            sidebarItemsList.push(
                {
                    path: getRouteProfile(userData.id),
                    text: 'Profile page',
                    icon: ProfilePageIcon,
                    authOnly: true
                },
                {
                    path: getRouteArticles(),
                    text: 'Articles',
                    icon: ArticlePageIcon,
                    authOnly: true
                }
            )
        }
        return sidebarItemsList;
    }
)
