import React, {FC} from 'react';
import {TimerDisplay} from './TimerDisplay';
import {useCountdown} from '../../../common/hooks/UseCountDown';
import s from './Timer.module.scss';


type PropsType = {
    days: number | string
    hours: number | string
    minutes: number | string
    seconds: number | string
}

export const ShowCounter: FC<PropsType> = ({days, hours, minutes, seconds}) => {
    return (
        <div className={s.timerContainer}>
            <div className={s.timerItems}>
                <div className={s.timerDays}><TimerDisplay value={days}/></div>
                <div className={s.dotsTime}>:</div>
                <div className={s.timerHours}><TimerDisplay value={hours}/></div>
                <div className={s.dotsTime}>:</div>
                <div className={s.timerMinutes}><TimerDisplay value={minutes}/></div>
                <div className={s.dotsTime}>:</div>
                <div className={s.timerSeconds}><TimerDisplay value={seconds}/></div>

            </div>
        </div>
    );
};
type CountdownPropsType = {
    targetDate: string | number
}
export const Timer: FC<CountdownPropsType> = () => {
    const [days, hours, minutes, seconds] = useCountdown(`May 31 2023 23:59:59`);
    return (
        <ShowCounter
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
        />
    );

};
