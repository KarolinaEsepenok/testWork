import React from 'react';
import s from '../mainPage/MainPage.module.scss'
import logoLead from '../../assets/img/logoLead.svg'

import Button from '../../common/components/Button/Button';
import {Timer} from '../mainPage/Timer/Timer';
import {Notification} from '../mainPage/Notification/Notification';
import Title from '../../common/components/Title/Title';



const MainPage = () => {

    return (
        <div className={s.mainPageContainer}>
            <div className={s.mainContent}> <div className={s.mainLogoImg}>
                <a href={'https://www.onliner.by/'} target={'_self'}><img alt={'logoLead'} title={'Lead'} src={logoLead}/></a>
            </div>
                <div className={s.mainNameDescr}>
                    <Title name={' UNDER CONSTRUCTION'} />
                    <p className={s.mainDescr}>
                        We're making lots of improvements and will be back soon
                    </p>
                </div>
                <div>
                    <Timer/>
                </div>
                <div className={s.mainNameDescr1}>
                    <p className={s.mainDescr1}>
                        Check our event page when you wait:
                    </p>
                    <Button href={'https://www.onliner.by/'} target={'_blank'} name={'Go to the event'}/>


                </div></div>

            <Notification/>
        </div>
    );
};

export default MainPage;
{/*<
*/
}