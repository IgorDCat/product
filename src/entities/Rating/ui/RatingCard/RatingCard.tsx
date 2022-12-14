import {classNames} from '@/shared/lib/classNames/classNames';
import {Button, ThemeButton} from '@/shared/ui/Button';
import {Card} from '@/shared/ui/Card';
import {Input} from '@/shared/ui/Input';
import {Modal} from '@/shared/ui/Modal';
import {HStack, VStack} from '@/shared/ui/Stack';
import {StarRating} from '@/shared/ui/StarRating';
import {Text} from '@/shared/ui/Text';
import {DefaultTFuncReturn} from 'i18next';
import React, {memo, useCallback, useState} from 'react';
import {useTranslation} from 'react-i18next';

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
        <Card max className={classNames('', {}, [className])} data-testid='RatingCard'>
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
                        data-testid='RatingCard.Input'
                    />
                    <HStack max justify='end' gap='5'>
                        <Button theme={ThemeButton.OUTLINE_RED} onClick={cancelHandler}>
                            {t('Cancel')}
                        </Button>
                        <Button theme={ThemeButton.OUTLINE} onClick={acceptHandler} data-testid='RatingCard.Send'>
                            {t('Send')}
                        </Button>
                    </HStack>
                </VStack>
            </Modal>
        </Card>
    );
})