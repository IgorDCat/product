import {ArticleView} from '../../model/consts/articleConsts';
import React, {memo, useCallback} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './ArticleViewSwitcher.module.scss';
import ListIcon from '@/shared/assets/icons/list.svg'
import TileIcon from '@/shared/assets/icons/tile.svg'
import {Button, ThemeButton} from '@/shared/ui/Button';
import {Icon} from '@/shared/ui/Icon';

interface ArticleViewSwitcherProps {
    className?: string;
    view?: ArticleView;
    onViewClick?: (newView: ArticleView) => void;
}

const viewTypes = [
    {
        view: ArticleView.BIG,
        icon: ListIcon
    },
    {
        view: ArticleView.SMALL,
        icon: TileIcon
    }
]

export const ArticleViewSwitcher = memo((props: ArticleViewSwitcherProps) => {
    const {className, view, onViewClick} = props;

    const onSwitcherClick = useCallback((newView: ArticleView) => {
        onViewClick?.(newView)
    }, [onViewClick]);

    return (
        <div className={classNames(cls.ArticleViewSwitcher, {}, [className])}>
            {viewTypes.map((item, index) => {
                return (
                    <Button
                        className={classNames('', {[cls.selected]: view === item.view})}
                        theme={ThemeButton.CLEAR}
                        onClick={() => onSwitcherClick(item.view)}
                        key={index}
                    >
                        <Icon Svg={item.icon}/>
                    </Button>
                )
            })}
        </div>
    );
})