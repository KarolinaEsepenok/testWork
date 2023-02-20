import React from 'react';
import {Title} from '../../common/components/title/Title';
import s from './Events.module.scss'
import Accordion from '../eventsPage/accordion/Accordion';
import { accordionData } from '../../common/utils/Accordion';


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

