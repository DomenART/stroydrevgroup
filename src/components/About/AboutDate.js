import React from 'react'
import AboutBox from './AboutBox'
import styles from './AboutDate.module.sass'

const AboutDate = () =>
    <AboutBox
        back={(
            <div className={styles.back}>
                <div className={styles.backTitle}>
                    10-летний опыт строительства
                </div>
                <div className={styles.backDesc}>
                    Наш опыт позволяет уверенно говорить о надежности наших домов и качестве работ
                </div>
            </div>
        )}
        front={(
            <div className={styles.front}>
                <div className={styles.frontTitle}>Проектируем и строим</div>
                <div className={styles.frontYear}>
                    с <img src={require('../../assets/about-year.png')} /> года
                </div>
            </div>
        )}
    />

export default AboutDate