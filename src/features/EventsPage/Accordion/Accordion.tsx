
import React, { useState } from 'react';
import s from "./Accordion.module.scss"

type PropsType={
    title:string
    numberContent:string
    content:string
}
const Accordion = (props:PropsType) => {
    const [isActive, setIsActive] = useState(false);
    const openAccordionHandle = () => {
        setIsActive(!isActive)
    }

    return (
        <div className={s.accordionItem}>
            <div className={isActive ? `${s.accordionTitle}`:`${s.accordionTitleNoActive}`  } onClick={openAccordionHandle}>
                <div className={s.numberContent}>{props.numberContent}</div>
                <div>{props.title}</div>
                <div>{isActive ? '-' : '+'}</div>
            </div>
            {isActive && <div className={s.accordionContent}>{props.content}
            <img/>
            </div>}
        </div>
    );
};

export default Accordion;