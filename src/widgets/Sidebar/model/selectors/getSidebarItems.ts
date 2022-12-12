import {RoutePath} from '@/shared/const/router';
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
                path: RoutePath.main,
                text: 'Main page',
                icon: MainPageIcon
            },
            {
                path: RoutePath.about,
                text: 'About page',
                icon: AboutPageIcon
            },
        ]
        if(userData) {
            sidebarItemsList.push(
                {
                    path: RoutePath.profile + userData.id,
                    text: 'Profile page',
                    icon: ProfilePageIcon,
                    authOnly: true
                },
                {
                    path: RoutePath.articles,
                    text: 'Articles',
                    icon: ArticlePageIcon,
                    authOnly: true
                }
            )
        }
        return sidebarItemsList;
    }
)
