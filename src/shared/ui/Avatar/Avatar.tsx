import React, {CSSProperties, useMemo} from 'react';
import {classNames, Mods} from '@/shared/lib/classNames/classNames';
import cls from './Avatar.module.scss';
import {AppImage} from '../AppImage';
import {Skeleton} from '../Skeleton';
import UserIcon from '../../assets/icons/user-avatar.svg'
import {Icon} from '../Icon';

interface AvatarProps {
	className?: string;
    src?: string;
    size?: number;
    alt?: string
}

export const Avatar = ({className, src, size = 200, alt}: AvatarProps) => {
    const mods: Mods = {};
    const styles = useMemo<CSSProperties>(() => {
        return {
            width: size,
            height: size
        }
    }, [size]);

    const fallback = <Skeleton height={size} width={size} border='50%'/>;
    const errorFallback = <Icon Svg={UserIcon} width={size} height={size}/>;

    return (
        <AppImage
            fallback={fallback}
            errorFallback={errorFallback}
            src={src}
            style={styles}
            className={classNames(cls.Avatar, mods, [className])}
            alt={alt}
        />
    );
}