import React, {useState} from 'react';
import style from './counter.module.scss'

export const Counter = () => {
    const [counter, setCounter] = useState(0)
    return (
        <div>
            <h1>{counter}</h1>
            <button className={style.btn} onClick={()=>setCounter(prev => prev+1)}>increment</button>
        </div>
    );
};
