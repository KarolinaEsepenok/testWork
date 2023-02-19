import React, { useEffect, useState} from 'react';
import s from './Timer.module.scss'



export const Timer = () => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        setInterval(() => {
            setDate(new Date())
        })
    })
    const getTwoDigitsString = (num: number) => num < 10 ? '0' + num : num
    const nowTime = new Date()
    const dateStop = new Date(`May 31 2023 23:59:59`)
    const interval = dateStop.valueOf() - nowTime.valueOf()
    const daysLeft = getTwoDigitsString(Math.floor(interval / 1000 / 60 / 60 / 24))
    const hoursLeft = getTwoDigitsString(Math.floor(interval / 1000 / 60 / 60) % 24)
    const minutesLeft = getTwoDigitsString(Math.floor(interval / 1000 / 60) % 60)
    const secondsLeft = getTwoDigitsString(Math.floor(interval / 1000) % 60)


    return (
        <div className={s.timerContainer}>
<div className={s.timerItems}>
            <div className={s.timerDays}>
                {daysLeft}
            </div>:
            <div className={s.timerHours}>
                {hoursLeft}
            </div>:
            <div className={s.timerMinutes}>
                {minutesLeft}
            </div>:
            <div className={s.timerSeconds}>
                {secondsLeft}
            </div></div>
        </div>
    )
}