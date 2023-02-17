import React from 'react';
import arrowRight from '../../assets/img/arrowRight.png'
import s from './Footer.module.scss'
import Button from '../../common/components/Button/Button';

const Footer = () => {
    return (
        <div className={s.footerContainer}>

            <input className={s.footerInput}></input>
            <div className={s.btnFooter}><Button /></div></div>
    );
};

export default Footer;