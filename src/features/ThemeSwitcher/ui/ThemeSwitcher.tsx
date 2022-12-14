import {Theme} from '@/shared/const/theme';
import React, {memo} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss'
import {useTheme} from '@/shared/lib/hooks/useTheme/useTheme';
import LightIcon from '@/shared/assets/icons/theme-light.svg'
import DarkIcon from '@/shared/assets/icons/theme-dark.svg'
import {Button, ThemeButton} from '@/shared/ui/Button';

interface ThemeSwitcherProps {
	className?: string
}

export const ThemeSwitcher = memo(({className}: ThemeSwitcherProps) => {
    const {theme, changeTheme} = useTheme();
    return (
        <Button
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={changeTheme} theme={ThemeButton.CLEAR}
        >
            {theme === Theme.LIGHT ? <DarkIcon/> : <LightIcon/>}
        </Button>
    )
})