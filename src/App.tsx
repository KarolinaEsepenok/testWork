import React from 'react';
import s from './App.module.scss'
import MainPage from "../src/features/mainPage/MainPage";
import {Notification} from '../src/features/Notification/Notification';




function App() {
    return (
        <div className={s.appContainer}>
            <MainPage/>
            <Notification/>

        </div>
    );
}

export default App;
