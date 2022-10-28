import {counterReducer, CounterSchema} from 'entities/Counter';
import {counterActions} from 'entities/Counter/model/slice/counterSlice';

describe('counterSlice.test', () => {
    test('should return value +1', () => {
        const state: DeepPartial<CounterSchema> = {
            value: 10
        }
        expect(counterReducer(state as CounterSchema, counterActions.increment))
            .toEqual({value: 11})
    });

    test('should return value -1', () => {
        const state: DeepPartial<CounterSchema> = {
            value: 10
        }
        expect(counterReducer(state as CounterSchema, counterActions.decrement))
            .toEqual({value: 9})
    });

    test('should return value without state', () => {
        expect(counterReducer(undefined, counterActions.increment))
            .toEqual({value: 1})
    });
})