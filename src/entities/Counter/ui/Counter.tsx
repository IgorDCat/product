import React from 'react';
import {Button} from '@/shared/ui/Button';
import {useCounterValue} from '../model/selectors/getCounterValue/getCounterValue';
import {useCounterActions} from '../model/slice/counterSlice';
import {HStack, VStack} from '@/shared/ui/Stack';
import {useTranslation} from 'react-i18next';

export const Counter = () => {
    const counterValue = useCounterValue();
    const {t} = useTranslation();
    const {increment, decrement} = useCounterActions();

    const incrementHandler = () => {
        increment();
    }

    const decrementHandler = () => {
        decrement();
    }

    return (
        <VStack gap='10' align='center'>
            <h1 data-testid="value-title">{counterValue}</h1>
            <HStack gap='5'>
                <Button onClick={incrementHandler} data-testid="increment-btn">
                    {t('+1')}
                </Button>
                <Button onClick={decrementHandler} data-testid="decrement-btn">
                    {t('-1')}
                </Button>
            </HStack>
        </VStack>
    );
};
