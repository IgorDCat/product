import {LOCALSTORAGE_THEME_KEY} from '@/shared/const/localstorage';
import {Theme} from '@/shared/const/theme';
import React, {FC, ReactNode, useMemo, useState} from 'react';
import {ThemeContext} from '@/shared/lib/context/themeContext';

const defaultTheme = localStorage.getItem(LOCALSTORAGE_THEME_KEY) as Theme || Theme.LIGHT;

interface ThemeProviderProps {
    initialTheme?: Theme;
    children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const {children, initialTheme} = props
    const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

    const defaultProps = useMemo(() => ({
        theme: theme,
        setTheme: setTheme
    }), [theme])

    return (
        <ThemeContext.Provider value={defaultProps}>
            {children}
        </ThemeContext.Provider>
    );
};
