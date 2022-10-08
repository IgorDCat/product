import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from "./themeContext";
import {useContext} from "react";

interface useThemeResult {
	changeTheme: () => void
	theme: Theme
}

export function useTheme(): useThemeResult {
    const {theme, setTheme} = useContext(ThemeContext);

    const changeTheme = () => {
        const newTheme = theme === "app_light_theme" ? Theme.DARK : Theme.LIGHT;
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    }

    return {theme, changeTheme}
}