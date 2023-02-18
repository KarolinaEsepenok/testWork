import React, {ReactNode, useEffect, useState} from 'react'
import closeBtn from '../../../assets/img/closeBtn.png'


import s from '../Modal/Modal.module.scss'


type ModalType = {
    children: ReactNode
    title: string
    value: string
    handleCloseModal:()=>void

}

export const Modal: React.FC<ModalType> = ({children,title, value, handleCloseModal}) => {

    return (
        <>
            <div className={s.modal}>
                <div onClick={e => e.stopPropagation()} className={s.content}>
                    <div className={s.close}>
                        <img src={closeBtn} onClick={handleCloseModal} alt="closeButton"/>
                    </div>

                    <div className={s.titleContainer}>
                        <h2 className={s.title}>{title}</h2>
                    </div>
                    <p className={s.modalSubtitle}>
                        You have successfully subscribed to the email newsletter
                    </p>{children}

                </div>
            </div>
        </>
    )
}
