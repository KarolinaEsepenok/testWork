
import React, { useState } from 'react';
import s from "./Accordion.module.scss"

type PropsType={
    title:string
    content:string
}
const Accordion = (props:PropsType) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className={s.accordionItem}>
            <div className={s.accordionTitle} onClick={() => setIsActive(!isActive)}>
                <div>{props.title}</div>
                <div>{isActive ? '-' : '+'}</div>
            </div>
            {isActive && <div className={s.accordionContent}>{props.content}</div>}
        </div>
    );
};

export default Accordion;