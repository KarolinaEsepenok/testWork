import React from 'react';
import s from './App.module.scss'
import MainPage from "../src/features/mainPage/MainPage";






function App() {
    return (
        <div className={s.appContainer}>
            <div className={s.center}>
            <MainPage/>


        </div>
        </div>
    );
}

export default App;
