import React from 'react';
import s from './App.module.scss'
import MainPage from "../src/features/mainPage/MainPage";
import {EventsPage} from '../src/features/EventsPage/EventsPage';




function App() {
    return (
        <div className={s.appContainer}>
            <div className={s.center}>
            <MainPage/>
            <EventsPage/>

        </div>
        </div>
    );
}

export default App;
