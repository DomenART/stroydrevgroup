import React from 'react'
import styles from './AboutConsultation.module.sass'
import SvgIcon from '../UI/SvgIcon';

const AboutConsultation = ({ relative }) =>
    <div className={`${styles.container} ${relative ? styles.container_relative : ''}`}>
        <div className={styles.box}>
            <div className={styles.title}>
                <div className={styles.icon}>
                    <SvgIcon name="question" />
                </div>
                Есть вопросы? Закажите бесплатную консультацию, и мы свяжемся с вами
            </div>
            <button
                data-uk-toggle="target: #Consultation"
                className={`${styles.button} button-trust`}
            >Заказать консультацию</button>
        </div>
    </div>

export default AboutConsultation