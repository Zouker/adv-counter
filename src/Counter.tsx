import React, {useEffect, useState} from 'react';
import s from './Counter.module.css'
import {Button} from './components/Button';
import {SettingsBlock} from './components/SettingsBlock';
import {DisplayBlock} from './components/DisplayBlock';


export const Counter = () => {
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [count, setCount] = useState<number>(startValue)
    const [isPreview, setIsPreview] = useState(true)

    useEffect(() => {
        let valueStartValueAsString = localStorage.getItem('startValue')
        if (valueStartValueAsString) {
            let newValue = JSON.parse(valueStartValueAsString)
            setStartValue(newValue)
            setCount(newValue)
        }
        let valueMaxValueAsString = localStorage.getItem('maxValue')
        if (valueMaxValueAsString) {
            let newValue = JSON.parse(valueMaxValueAsString)
            setMaxValue(newValue)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    },)

    const setHandler = () => {
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        setCount(startValue)
        setIsPreview(!isPreview)
    }
    const incHandler = () => {
        if (count < maxValue) {
            setCount(state => state + 1)
        }
    }
    const resetHandler = () => {
        setCount(startValue)
    }

    return (
        <div className={s.wrapper}>
            <div className={s.counter}>
                {isPreview
                    ? <DisplayBlock
                        count={count}
                        maxValue={maxValue}
                    />
                    : <SettingsBlock setIsPreview={setIsPreview}
                                     startValue={startValue}
                                     maxValue={maxValue}
                                     setStartValue={setStartValue}
                                     setMaxValue={setMaxValue}
                    />
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

