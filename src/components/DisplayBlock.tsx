import React from 'react';
import s from './DisplayBlock.module.css';
import {useSelector} from 'react-redux';
import {AppStateType} from '../bll/store';
import {CounterStateType} from '../bll/counter-reducer';

export const DisplayBlock = () => {
    const {maxValue, count} = useSelector<AppStateType, CounterStateType>(state => state.counter)
    const scoreboardClassname = count === maxValue ? `${s.counterBoard} ${s.red}` : `${s.counterBoard}`

    return (
        <>
            <div className={scoreboardClassname}>
                {count}
            </div>
        </>
    );
};
