import React from 'react';
import s from '../../../features/mainPage/MainPage.module.scss';
import arrowRight from '../../../assets/img/arrowRight.png';

const Button = () => {
    return (
        <div>
            <button className={s.btn}>
                <a className={s.link} href={'https://www.onliner.by/'} target={'_blank'}>Go to the event<img className={s.img} src={arrowRight} alt={'arrow'}/></a>

            </button>
        </div>
    );
};

export default Button;