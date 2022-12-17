import {CounterSchema} from '../types/CounterSchema';
import {buildSlice} from '@/shared/lib/store/buildSlice';

const initialState: CounterSchema = {
    value: 0
}

export const counterSlice = buildSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: state => {
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        },
    }
})

export const {actions: counterActions, useActions: useCounterActions} = counterSlice
export const {reducer: counterReducer} = counterSlice