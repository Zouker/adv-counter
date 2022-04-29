import React, {ChangeEvent} from 'react';
import s from './SettingsBlock.module.css';

type PropsType = {
    startValue: number
    maxValue: number
    setStartValue: (startValue: number) => void
    setMaxValue: (maxValue: number) => void
    setIsPreview: (isPreview: boolean) => void
}

export const SettingsBlock: React.FC<PropsType> = ({
                                                       startValue,
                                                       maxValue,
                                                       setStartValue,
                                                       setMaxValue,
                                                   }) => {

    const onChangeMaxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(+e.currentTarget.value)
    }

    const onChangeStartValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStartValue(+e.currentTarget.value)
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