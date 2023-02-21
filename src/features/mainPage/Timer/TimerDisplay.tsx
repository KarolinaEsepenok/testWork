import React, {FC} from 'react';
import s from './Timer.module.scss'

type PropsType = {
    value: number | string
}
export const TimerDisplay: FC<PropsType> = ({value}) => {
    return (
        <div className={s.timerValue}>{value}</div>
    );
};
