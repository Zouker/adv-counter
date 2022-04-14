import React, {useEffect, useState} from 'react';
import s from './Counter.module.css'
import {Button} from './components/Button';
import {SettingsBlock} from './components/SettingsBlock';
import {DisplayBlock} from './components/DisplayBlock';


export const Counter = () => {
    const [startValue, setStartValue] = useState<number>(0)
    const [maxValue, setMaxValue] = useState<number>(5)
    const [count, setCount] = useState<number>(startValue)
    const [disabled, setDisabled] = useState(false)
    const [disabledInc, setDisabledInc] = useState(true)
    const [disabledReset, setDisabledReset] = useState(true)
    const [isPreview, setIsPreview] = useState(true)

    const incDisabled = disabledInc || count === maxValue
    const resetDisabled = disabledReset || count === startValue

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
        // setDisabled(true)
        setDisabledInc(isPreview)
        setDisabledReset(false)
    }
    const incHandler = () => {
        if (count < maxValue) {
            setCount(state => state + 1)
        }
    }
    const resetHandler = () => {
        setCount(startValue)
        setDisabled(false)
        setIsPreview(true)
        setDisabledInc(true)
    }

    return (
        <div className={s.wrapper}>
            <div className={s.counter}>
                {isPreview
                    ? <DisplayBlock
                        count={count}
                        isPreview={isPreview}
                        startValue={startValue}
                        maxValue={maxValue}
                    />
                    : <SettingsBlock startValue={startValue}
                                     maxValue={maxValue}
                                     disabled={disabled}
                                     setDisabled={setDisabled}
                                     setDisabledInc={setDisabledInc}
                                     setDisabledReset={setDisabledReset}

                                     setStartValue={setStartValue}
                                     setMaxValue={setMaxValue}
                    />
                }
                <div className={s.buttonsBlock}>
                    <div>
                        <Button callback={incHandler}
                                className={s.button}
                                disabled={incDisabled}
                                title={'inc'}
                        />
                    </div>
                    <div>
                        <Button title={'reset'}
                                disabled={resetDisabled}
                                className={s.button + ' ' + s.buttonReset}
                                callback={resetHandler}/>
                    </div>
                    <div>
                        <Button title={'set'}
                                callback={setHandler}
                                className={s.button}
                                disabled={disabled}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

