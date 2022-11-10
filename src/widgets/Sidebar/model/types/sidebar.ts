import React from 'react';

export interface SidebarItemsType {
    path: string;
    text: string;
    icon: React.VFC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}