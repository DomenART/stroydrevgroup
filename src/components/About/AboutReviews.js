import React from 'react'
import AboutBox from './AboutBox'
import styles from './AboutReviews.module.sass'
import SvgIcon from '../UI/SvgIcon'

const AboutReviews = () =>
    <AboutBox
        parent={{
            to: "/",
            title: "отзывы"
        }}
        back={(
            <div className={styles.back}>
                <div className={styles.backIcon}>
                    <img src={require('../../assets/icons/reviews.jpg')} />
                </div>
                <div className={styles.backTitle}>
                    Отзывы клиентов всегда говорят лучше слов
                </div>
                <span className={styles.backMore}>
                    посмотреть
                    <span />
                </span>
            </div>
        )}
        front={(
            <div className={styles.front}>
                <div className={styles.frontIcon}>
                    <img src={require('../../assets/icons/reviews.jpg')} />
                </div>
                <div className={styles.frontTitle}>
                    Отзывы наших<br />
                    клиентов
                </div>
            </div>
        )}
    />

export default AboutReviews