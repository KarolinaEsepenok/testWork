import React from 'react';
import s from '../../../features/mainPage/MainPage.module.scss';
import arrowRight from '../../../assets/img/arrowRight.png';

type PropsType={
    href:string
    target:string
    name:string

}
const Button = (props:PropsType) => {
    return (
        <div>
            <button className={s.btn}>
                <a className={s.link} href={props.href} target={props.target}>{props.name}<img className={s.img} src={arrowRight} alt={'arrow'}/></a>

            </button>
        </div>
    );
};

export default Button;