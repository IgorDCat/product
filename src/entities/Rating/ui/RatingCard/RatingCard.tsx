import {classNames} from '@/shared/lib/classNames/classNames';
import {Button, ThemeButton} from '@/shared/ui/Button/Button';
import {Card} from '@/shared/ui/Card/Card';
import {Input} from '@/shared/ui/Input/Input';
import {Modal} from '@/shared/ui/Modal/Modal';
import {HStack, VStack} from '@/shared/ui/Stack';
import {StarRating} from '@/shared/ui/StarRating/StarRating';
import {Text} from '@/shared/ui/Text/Text';
import {DefaultTFuncReturn} from 'i18next';
import React, {memo, useCallback, useState} from 'react';
import {useTranslation} from 'react-i18next';
import cls from './RatingCard.module.scss';

interface RatingCardProps {
    className?: string;
    title?: string | DefaultTFuncReturn;
    feedbackTitle?: string | DefaultTFuncReturn;
    hasFeedback?: boolean;
    onCancel?: (starCount: number) => void;
    onAccept?: (starCount: number, feedback: string) => void;
    rate?: number;
    averageRating?: number;
    numberOfVoters?: number;
    canVote?: boolean;
}

export const RatingCard = memo((props: RatingCardProps) => {
    const {
        className,
        title,
        feedbackTitle,
        hasFeedback,
        onCancel,
        onAccept,
        rate = 0,
        averageRating,
        numberOfVoters,
        canVote
    } = props;
    const {t} = useTranslation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [starsCount, setStarsCount] = useState(rate);
    const [feedback, setFeedback] = useState('');

    const onSelectStars = useCallback((starsCurrentCount: number) => {
        setIsModalOpen(true);
        setStarsCount(starsCurrentCount);
    }, []);

    const cancelHandler = useCallback(( ) => {
        setIsModalOpen(false);
        onCancel?.(starsCount)
    }, [onCancel, starsCount]);
    
    const acceptHandler = useCallback(() => {
        setIsModalOpen(false);
        if(hasFeedback) {
            onAccept?.(starsCount, feedback);
        }
    }, [feedback, hasFeedback, onAccept, starsCount]);

    return (
        <Card max className={classNames(cls.RatingCard, {}, [className])}>
            <VStack align='center' gap='10'>
                <Text title={title}/>
                <StarRating size={40} onSelect={onSelectStars} selectedStars={starsCount} canVote={canVote}/>
                <Text text={'Average rating: ' + averageRating}/>
                <Text text={'Number of voters: ' + numberOfVoters}/>
            </VStack>
            <Modal isOpen={isModalOpen} lazy>
                <VStack max gap='32'>
                    <Text title={feedbackTitle}/>
                    <Input
                        placeholder={t('Your feedback...')}
                        onChange={setFeedback}
                        value={feedback}
                    />
                    <HStack max justify='end' gap='5'>
                        <Button theme={ThemeButton.OUTLINE_RED} onClick={cancelHandler}>
                            {t('Cancel')}
                        </Button>
                        <Button theme={ThemeButton.OUTLINE} onClick={acceptHandler}>
                            {t('Send')}
                        </Button>
                    </HStack>
                </VStack>
            </Modal>
        </Card>
    );
})