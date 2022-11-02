import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from './themeContext';
import {useContext} from 'react';

interface useThemeResult {
	changeTheme: () => void
	theme?: Theme
}

export function useTheme(): useThemeResult {
    const {theme, setTheme} = useContext(ThemeContext);

    const changeTheme = () => {
        let newTheme;
        switch(theme) {
            case Theme.LIGHT:
                newTheme = Theme.DARK;
                break;
            case Theme.DARK:
                newTheme = Theme.GREEN;
                break;
            case Theme.GREEN:
                newTheme = Theme.LIGHT;
                break;
            default:
                newTheme = Theme.LIGHT
        }
        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return {theme, changeTheme}
}