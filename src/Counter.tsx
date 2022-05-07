import React from 'react';
import s from './Counter.module.css'
import {Button} from './components/Button';
import {SettingsBlock} from './components/SettingsBlock';
import {DisplayBlock} from './components/DisplayBlock';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from './bll/store';
import {CounterStateType, isPreviewAC, setCountAC} from './bll/counter-reducer';

export const Counter = () => {

    const {startValue, maxValue, count, isPreview} = useSelector<AppStateType, CounterStateType>(state => state.counter)
    const dispatch = useDispatch()

    const setHandler = () => {
        dispatch(setCountAC(startValue))
        dispatch(isPreviewAC(!isPreview))
    }
    const incHandler = () => {
        dispatch(setCountAC(count + 1))
    }
    const resetHandler = () => {
        dispatch(setCountAC(startValue))
    }

    return (
        <div className={s.wrapper}>
            <div className={s.counter}>
                {isPreview
                    ? <DisplayBlock/>
                    : <SettingsBlock/>
                }
                {isPreview
                    ? <div className={s.buttonsBlock}>
                        <div>
                            <Button callback={incHandler}
                                    className={s.button}
                                    disabled={count === maxValue}
                                    title={'inc'}
                            />
                        </div>
                        <div>
                            <Button title={'reset'}
                                    disabled={count === startValue}
                                    className={s.button + ' ' + s.buttonLarge}
                                    callback={resetHandler}/>
                        </div>
                        <div>
                            <Button title={'set'}
                                    callback={setHandler}
                                    className={s.button}
                                    disabled={startValue >= maxValue || startValue < 0}
                            />
                        </div>
                    </div>
                    : <div className={s.buttonsBlock}>
                        <div>
                            <Button title={'set'}
                                    callback={setHandler}
                                    className={s.button + ' ' + s.buttonLarge}
                                    disabled={startValue >= maxValue || startValue < 0}
                            />
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

