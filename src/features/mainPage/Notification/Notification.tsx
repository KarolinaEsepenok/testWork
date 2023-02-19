import React, {useState} from 'react';
import s from './Notification.module.scss'
import arrow from '../../../assets/img/arrowRight.png'
import arrowDone from '../../../assets/img/arrowDone.png'
import {useFormik} from "formik";

import axios from "axios";
import {Modal} from '../../../common/components/Modal/Modal';


interface FormikErrorType {
    email?: string

}

export const Notification = () => {
    const [isLoading, setIsloading] = useState(false)
    const [modalError, setModalError] = useState(false)
    const [modalSuccess, setModalSuccess] = useState(false)
    const handleCloseModal = () => {
        setModalSuccess(false)
        setModalError(false)

    }
    const formik = useFormik({
        initialValues: {
            email: ''
        },
        validate: values => {
            const errors: FormikErrorType = {}
            if (!values.email) {
                return {
                    email: 'Please, enter your email'
                }
            }

            return errors
        }, onSubmit: (values, {resetForm}) => {
            setIsloading(true)
            axios.post('https://back-portfolio-neon.vercel.app/', {
                email: values.email,

            })
                .then(() => {
                    setModalSuccess(true)

                    resetForm()
                })
                .catch(() => {
                    setModalError(true)

                })
                .finally(() => {
                    setIsloading(false)
                })
        },
    });

    return (

        <div className={s.notificContainer}>
            <div></div>
            <form className={s.notificForm} autoComplete={'off'} onSubmit={formik.handleSubmit}>

                {formik.errors.email ?
                    <input type={'email'} placeholder={'Please, enter your Email'} className={s.formError}
                           disabled={isLoading} {...formik.getFieldProps("email")}/>
                    : <input type={'email'} placeholder={'Enter your Email and get notified'} className={s.notificInput}
                             disabled={isLoading} {...formik.getFieldProps("email")}/>}
                <button disabled={
                    !!formik.errors.email} type={'submit'} className={s.notificBtn}><img src={arrow}
                                                                                         alt={'notification'}/></button>
            </form>
            {modalSuccess && <Modal handleCloseModal={handleCloseModal}
                                    title={'SUCCESS'}
                                    value={'You have successfully subscribed to the email newsletter'}>
                <div className={s.buttons}>
                    <button className={s.button} onClick={handleCloseModal}>
                        Close
                    </button>
                </div>
            </Modal>}
            {modalError && <Modal handleCloseModal={handleCloseModal}
                       title={'ERROR'} value={''}>
                    <div className={s.buttons}>
                        <button className={s.button} onClick={handleCloseModal}>
                            Close
                        </button>
                    </div>
                </Modal>
            }

            <div className={s.notificLinkCont}> <a className={s.notificLink}> Other Events <img
                className={s.notifikLinkImg} src={arrowDone} alt={'arrow'}/></a></div>
        </div>

    );
};
