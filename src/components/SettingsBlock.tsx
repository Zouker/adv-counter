import React, {ChangeEvent} from 'react';
import s from './SettingsBlock.module.css';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from '../bll/store';
import {CounterStateType, setMaxValueAC, setStartValueAC} from '../bll/counter-reducer';

export const SettingsBlock = () => {

    const {startValue, maxValue} = useSelector<AppStateType, CounterStateType>(state => state.counter)
    const dispatch = useDispatch()

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setMaxValueAC(+e.currentTarget.value))
    }

    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setStartValueAC(+e.currentTarget.value))
    }

    return (
        <div className={s.settingsBlock}>
            <div className={s.settingsBlockInput}>
                <span>max value:</span>
                <input
                    className={(startValue >= maxValue) || maxValue < 0 ? s.errorInput : s.defaultInput}
                    onChange={onChangeMaxValueHandler}
                    type={'number'}
                    value={maxValue}
                />
            </div>
            <div className={s.settingsBlockInput}>
                <span>start value:</span>
                <input
                    className={(startValue >= maxValue) || startValue < 0 || maxValue < 0 ? s.errorInput : s.defaultInput}
                    onChange={onChangeStartValueHandler}
                    type={'number'}
                    value={startValue}
                />
            </div>
        </div>
    );
};
