import React from 'react';
import s from './DisplayBlock.module.css';

type PropsType = {
    count: number
    maxValue: number
}

export const DisplayBlock: React.FC<PropsType> = ({
                                                      count,
                                                      maxValue,
                                                  }) => {
    const scoreboardClassname = count === maxValue ? `${s.counterBoard} ${s.red}` : `${s.counterBoard}`

    return (
        <>
            <div className={scoreboardClassname}>
                {count}
            </div>
        </>
    );
};
