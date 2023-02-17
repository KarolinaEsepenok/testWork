import React from 'react';
import s from '../mainPage/MainPage.module.scss'
import logoLead from '../../assets/img/logoLead.svg'

import Button from '../../common/components/Button/Button';
import Footer from '../Footer/Footer';
import arrowRight from '../../assets/img/arrowRight.png';



const MainPage = () => {

    return (
        <div className={s.mainPageContainer}>
            <div className={s.mainLogoImg} >
                <img alt={'logoLead'} title={'logoLead'} src={logoLead}/>
            </div>
            <div className={s.mainNameDescr}>
                <h1 className={s.mainName}>
                    UNDER CONSTRUCTION
                </h1>
                <p className={s.mainDescr}>
                    We're making lots of improvements and will be back soon
                </p>
            </div>
            <div>

            </div>
            <div className={s.mainNameDescr}>
                <p className={s.mainDescr}>
                    Check our event page when you wait:
                </p>
              <Button/>

            </div>


        </div>
    );
};

export default MainPage;
{/*<
*/}