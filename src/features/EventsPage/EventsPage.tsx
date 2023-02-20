import React from 'react';
import Title from '../../common/components/Title/Title';
import s from './Events.module.scss'
import Accordion from '../EventsPage/Accordion/Accordion';
import { accordionData } from '../../common/Utils/Accordion';


export const EventsPage = () => {

    return (
        <div className={s.eventsContainer}>
                <Title name={'ALL EVENTS'}/>
            <div className={s.accordionContainer}>
                {accordionData.map(({ numberContent,title, content }) => (
                    <Accordion numberContent={numberContent} title={title} content={content} />
                ))}
            </div>


        </div>
    );
};

