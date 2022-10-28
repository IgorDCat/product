import React from 'react';
import {Button} from 'shared/ui/Button/Button';
import {useDispatch, useSelector} from 'react-redux';
import {counterActions} from '../model/slice/counterSlice';
import {getCounterValue} from 'entities/Counter/model/selectors/getCounterValue/getCounterValue';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue)
    const increment = () => {
        dispatch(counterActions.increment())
    }

    const decrement = () => {
        dispatch(counterActions.decrement())
    }
    return (
        <div>
            <h1 data-testid="value-title">{counterValue}</h1>
            <Button onClick={increment} data-testid="increment-btn">
                +1
            </Button>
            <Button onClick={decrement} data-testid="decrement-btn">
                -1
            </Button>
        </div>
    );
};
