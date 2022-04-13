import React from 'react';
import s from './Counter.module.css'

export const Counter = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.counter}>

                0

            <div className={s.buttonBlock}>
                <div>
                    <button className={s.button}>inc</button>
                </div>
                <div>
                    <button className={s.button}>reset</button>
                </div>
                <div>
                    <button className={s.button}>set</button>
                </div>
            </div>
            </div>
        </div>
    );
};

