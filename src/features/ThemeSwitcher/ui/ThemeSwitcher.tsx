import {Theme} from '@/shared/const/theme';
import React, {memo} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './ThemeSwitcher.module.scss'
import {useTheme} from '@/shared/lib/hooks/useTheme/useTheme';
import LightIcon from '@/shared/assets/icons/theme-light.svg'
import DarkIcon from '@/shared/assets/icons/theme-dark.svg'
import {Button, ThemeButton} from '@/shared/ui/Button';
import {useCallback} from 'react';
import {useAppDispatch} from '@/shared/lib/hooks/useAppDispatch/useAppDispatch';
import {saveJsonSettings} from '@/entities/User';

interface ThemeSwitcherProps {
	className?: string
}

export const ThemeSwitcher = memo(({className}: ThemeSwitcherProps) => {
    const {theme, changeTheme} = useTheme();
    const dispatch = useAppDispatch();
    
    const onChangeTheme = useCallback(() => {
        changeTheme((newTheme: Theme) => {
            dispatch(saveJsonSettings({theme: newTheme}));
        })
    }, [changeTheme, dispatch])
    
    return (
        <Button
            className={classNames(cls.ThemeSwitcher, {}, [className])}
            onClick={onChangeTheme} theme={ThemeButton.CLEAR}
        >
            {theme === Theme.LIGHT ? <DarkIcon/> : <LightIcon/>}
        </Button>
    )
})