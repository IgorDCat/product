import React, {CSSProperties} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './Skeleton.module.scss';

interface SkeletonProps {
    className?: string;
    height?: string | number;
    width?: string | number;
    border?: string;
}

export const Skeleton = (props: SkeletonProps) => {
    const {className, border, height, width} = props;

    const styles: CSSProperties = {
        borderRadius: border,
        height,
        width
    }


    return (
        <div className={classNames(cls.Skeleton, {}, [className])}
            style={styles}>

        </div>
    );
}