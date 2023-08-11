import {Theme} from '@/shared/const/theme';
import {ThemeContext} from '../../context/themeContext';
import {useContext} from 'react';

interface useThemeResult {
	changeTheme: (saveAction: (theme: Theme) => void) => void;
	theme?: Theme;
}

export function useTheme(): useThemeResult {
    const {theme, setTheme} = useContext(ThemeContext);

    const changeTheme = (saveAction: (theme: Theme) => void) => {
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
        saveAction?.(newTheme);
    }

    return {theme, changeTheme}
}