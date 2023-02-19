import React from 'react';
import Title from '../../common/components/Title/Title';
import s from './Events.module.css'


export const EventsPage = () => {
    return (
        <div className={s.eventsPageContainer}>
           <Title name={'All EVENTS'}/>
            <div  className={s.accordion}>
                <ol>
                    <li>
                        <h2><span>Слайд №1</span></h2>
                        <div></div>
                    </li>
                    <li>
                        <h2><span>Слайд №2</span></h2>
                        <div></div>
                    </li>
                    <li>
                        <h2><span>Слайд №3</span></h2>
                        <div></div>
                    </li>
                    <li>
                        <h2><span>Слайд №4</span></h2>
                        <div></div>
                    </li>
                    <li>
                        <h2><span>Слайд №5</span></h2>
                        <div></div>
                    </li>
                </ol>
            </div>
        </div>
    );
};
