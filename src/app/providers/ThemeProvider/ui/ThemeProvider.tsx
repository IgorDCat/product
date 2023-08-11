import {Theme} from '@/shared/const/theme';
import React, {FC, ReactNode, useMemo, useState} from 'react';
import {ThemeContext} from '@/shared/lib/context/themeContext';
import {useEffect} from 'react';
import {useJsonSettings} from '@/entities/User';


interface ThemeProviderProps {
    initialTheme?: Theme;
    children: ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    //const defaultTheme = useJsonSettingsByKey('theme') as Theme || Theme.LIGHT;
    const {theme: defaultTheme = Theme.LIGHT} = useJsonSettings();

    const [isThemeInit, setIsThemeInit] = useState(false);
    const {children} = props;
    console.log(defaultTheme)
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    useEffect(() => {
        if(!isThemeInit) {
            setTheme(defaultTheme);
            setIsThemeInit(true);
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
