import React from 'react';
import s from './App.module.scss'
import {MainPage} from './features/mainPage/MainPage';
import {EventsPage} from './features/eventsPage/EventsPage';

export function App() {
    return (
        <div className={s.appContainer}>
            <div className={s.center}>
                <MainPage/>
                <EventsPage/>
            </div>
        </div>
    );
}

