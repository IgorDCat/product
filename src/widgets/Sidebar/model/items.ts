import React from "react";
import {RoutePath} from "shared/config/routeConfig/routeConfig";
import MainPageIcon from "shared/assets/icons/main-page.svg";
import AboutPageIcon from "shared/assets/icons/about-page.svg";
import ProfilePageIcon from "shared/assets/icons/profile-page.svg";

export interface SidebarItemsType {
    path: string;
    text: string;
    icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const sidebarItemsList: SidebarItemsType[] = [
    {
        path: RoutePath.main,
        text: "Main page",
        icon: MainPageIcon
    },
    {
        path: RoutePath.about,
        text: "About page",
        icon: AboutPageIcon
    },
    {
        path: RoutePath.profile,
        text: "Profile page",
        icon: ProfilePageIcon
    },
]