import React from 'react';
import s from './App.module.scss'
import MainPage from "../src/features/mainPage/MainPage";
import Footer from '../src/features/Footer/Footer';



function App() {
    return (
        <div className={s.appContainer}>
            <MainPage/>
<Footer/>
        </div>
    );
}

export default App;
