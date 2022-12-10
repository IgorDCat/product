import {Icon} from '../Icon/Icon';
import React, {memo, useState} from 'react';
import {classNames} from '@/shared/lib/classNames/classNames';
import cls from './StarRating.module.scss';
import StarIcon from '@/shared/assets/icons/star.svg'

interface StarRatingProps {
    className?: string;
    onSelect?: (starsCount: number) => void;
    size?: number;
    selectedStars?: number;
    canVote?: boolean;
}

const stars = [1, 2, 3, 4, 5];

export const StarRating = memo((props: StarRatingProps) => {
    const {className, onSelect, size = 30, selectedStars = 0, canVote} = props;
    const [currentStarsCount, setCurrentStarsCount] = useState(selectedStars);
    const [isSelected, setIsSelected] = useState(!canVote);

    const onHover = (starsCount: number) => () => {
        if(!isSelected) {
            setCurrentStarsCount(starsCount);
        }
    }

    const onLeave = () => {
        if(!isSelected) {
            setCurrentStarsCount(0);
        }
    }

    const onStarClick = (starsCount: number) => () => {
        if(!isSelected) {
            onSelect?.(starsCount);
            setIsSelected(true);
            setCurrentStarsCount(starsCount);
        }
    }

    return (
        <div className={classNames('', {}, [className])}>
            {stars.map((starNumber) => (
                <Icon
                    className={classNames(cls.starIcon, {
                        [cls.hovered]: currentStarsCount >= starNumber,
                        [cls.normal]: currentStarsCount < starNumber,
                        [cls.selected]: isSelected
                    })}
                    Svg={StarIcon}
                    key={starNumber}
                    width={size}
                    height={size}
                    onMouseEnter={onHover(starNumber)}
                    onMouseLeave={onLeave}
                    onClick={onStarClick(starNumber)}
                />
            ))}
        </div>
    );
});