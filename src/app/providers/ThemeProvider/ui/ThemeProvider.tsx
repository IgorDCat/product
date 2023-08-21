import {Theme} from '@/shared/const/theme';
import React, {FC, ReactNode, useMemo, useState} from 'react';
import {useEffect} from 'react';
import {ThemeContext} from '@/shared/lib/context/themeContext';
import {useJsonSettings} from '@/entities/User';


interface ThemeProviderProps {
    initialTheme?: Theme;
    children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const { initialTheme, children } = props;
    const { theme: defaultTheme } = useJsonSettings();
    const [isThemeInit, setThemeInit] = useState(false);

    const [theme, setTheme] = useState<Theme>(
        initialTheme || defaultTheme || Theme.LIGHT,
    );

    useEffect(() => {
        if(!isThemeInit && defaultTheme) {
            setTheme(defaultTheme);
            setThemeInit(true);
        }
    }, [defaultTheme, isThemeInit])

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
