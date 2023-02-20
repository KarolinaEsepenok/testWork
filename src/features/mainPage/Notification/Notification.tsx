import React, {useState} from 'react';
import s from './Notification.module.scss'
import arrow from '../../../assets/img/arrowRight.png'
import arrowDone from '../../../assets/img/arrowDone.png'
import {useFormik} from "formik";

import {Modal} from '../../../common/components/modal/Modal';
import {instance} from '../../../common/axiosInstance/AxiosInstance';


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

    const handleSubmit = (values: { email: string }, resetForm: any) => {
        setIsloading(true)
        instance.post('', {
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
            });
    }


    const formik = useFormik({
        initialValues: {email: ''},
        validate: values => {
            const errors: FormikErrorType = {}
            if (!values.email) {
                return {email: 'Please, enter your email'}
            }
            return errors
        }, onSubmit: (values, {resetForm}) => {
            handleSubmit(values, resetForm)
        },
    });

    return (
        <div className={s.notificContainer}>
            <div></div>
            <form className={s.notificForm}
                  autoComplete={'off'}
                  onSubmit={formik.handleSubmit}>
                {formik.errors.email ?
                    <input
                        className={s.formError}
                        type={'email'}
                        placeholder={'Please, enter your Email'}
                        disabled={isLoading} {...formik.getFieldProps("email")}/>
                    : <input
                        className={s.notificInput}
                        type={'email'}
                        placeholder={'Enter your Email and get notified'}
                        disabled={isLoading} {...formik.getFieldProps("email")}/>}
                <button disabled={!!formik.errors.email}
                        type={'submit'}
                        className={s.notificBtn}>
                    <img src={arrow}
                         alt={'notification'}
                         title={'arrow'}/>
                </button>
            </form>
            {modalSuccess && <Modal handleCloseModal={handleCloseModal}
                                    title={'SUCCESS'}
                                    value={'You have successfully subscribed to the email newsletter'}>
                <div className={s.buttons}>
                    <button className={s.button} onClick={handleCloseModal}>Close</button>
                </div>
            </Modal>}
            {modalError && <Modal handleCloseModal={handleCloseModal}
                                  title={'ERROR'}
                                  value={'Something went wrong. Please, try again.'}>
                <div className={s.buttons}>
                    <button className={s.button} onClick={handleCloseModal}>Close</button>
                </div>
            </Modal>
            }
            <div className={s.notificLinkCont}>
                <a  className={s.notificLink}> Other Events
                    <img className={s.notifikLinkImg}
                         src={arrowDone}
                         alt={'arrow'}
                         title={'arrow'}/>
                </a>
            </div>
        </div>
    );
};
