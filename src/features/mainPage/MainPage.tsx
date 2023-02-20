import React from 'react';
import s from '../mainPage/MainPage.module.scss'
import logoLead from '../../assets/img/logoLead.svg'
import Button from '../../common/components/Button/Button';
import {Notification} from '../mainPage/Notification/Notification';
import Title from '../../common/components/Title/Title';
import {Timer} from '../mainPage/Timer/Timer';


export const MainPage = () => {
    const dateStop = new Date(`May 31 2023 23:59:59`);
    const nowTime = new Date()
    const interval = nowTime.valueOf() - dateStop.valueOf();

    return (
        <div className={s.mainPageContainer}>
            <div className={s.mainContent}>
                <div className={s.mainLogoImg}>
                    <a className={s.mainLink}
                       href={'https://www.onliner.by/'}
                       target={'_self'}
                       title={'Link to another site'}>
                        <img
                            className={s.maimImg}
                            src={logoLead}
                            alt={'logoLead'}
                            title={'Lead'}
                        />
                    </a>
                </div>
                <div className={s.mainNameDescr}>
                    <Title name={' UNDER CONSTRUCTION'}/>
                    <p className={s.mainDescr}>
                        We're making lots of improvements and will be back soon
                    </p>
                </div>
                <div>
                    <Timer targetDate={interval}/>
                </div>
                <div className={s.mainDescrBtnDown}>
                    <p className={s.mainDescrDown}>
                        Check our event page when you wait:
                    </p>
                    <Button href={'https://www.onliner.by/'}
                            target={'_blank'}
                            name={'Go to the event'}/>
                </div>
            </div>
            <Notification/>
        </div>
    );
};

