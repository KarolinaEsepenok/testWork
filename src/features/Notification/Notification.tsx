import React, {useState} from 'react';
import s from './Notification.module.scss'
import arrow from '../../assets/img/arrowRight.png'
import arrowDone from '../../assets/img/arrowDone.png'
import {useFormik} from "formik";

import axios from "axios";
import {Modal} from '../../common/components/Modal/Modal';
import closeBtn from '../../assets/img/closeBtn.png'

interface FormikErrorType {
    email?: string

}
export const Notification = () => {
    const [isLoading, setIsloading] = useState(false)
    const [modal, setModal] = useState(false)
    const handleCloseModal = () => {
        setModal(false)

    }
    const formik = useFormik({
        initialValues: {
           email: ''
        },
        validate: values => {
            const errors: FormikErrorType = {}
            if (!values.email) {
                return {
                    email:'Please, enter your email'
                }
            }

            return errors
        },onSubmit: (values, {resetForm}) => {
            setIsloading(true)


            axios.post('https://back-portfolio-neon.vercel.app/', {
                email: values.email,

            })
                .then(() => {
                    setModal(true)

                    resetForm()
                })
                .catch(() => {
                    alert("Something went wrong... Your message hasn't been sent! Please try again.")
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
            <input type={'email'}placeholder={'Your Email'} className={s.notificInput} disabled={isLoading} {...formik.getFieldProps("email")}/>
                {formik.errors.email ? <span className={s.formError}>{formik.errors.email}</span> : null}
            <button disabled={
                !!formik.errors.email} type={'submit'} className={s.notificBtn}><img src={arrow} alt={'notification'}/></button>
           </form>
            {modal && <Modal handleCloseModal={handleCloseModal} title={'Success'}  value={'dfdf'}>
                <div className={s.buttons}>
                    <button className={s.button} onClick={handleCloseModal}>
                        Close
                    </button>
                </div>
            </Modal>}


            <div className={s.notificLinkCont}><a className={s.notificLink}>Other Events<img className={s.notifikLinkImg} src={arrowDone}/></a></div>
        </div>

    );
};
