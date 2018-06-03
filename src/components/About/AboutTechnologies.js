import React from 'react'
import AboutBox from './AboutBox'
import styles from './AboutTechnologies.module.sass'

const AboutTechnologies = () =>
    <AboutBox
        parent={{
            to: "/",
            title: "технологии"
        }}
        back={(
            <div className={styles.back}>
                <div className={styles.backIcon}>
                    <img src={require('../../assets/icons/technologies.svg')} />
                </div>
                <div className={styles.backTitle}>
                    Полезно<br />
                    и интересно
                </div>
                <div className={styles.backDesc}>
                    Все о технологиях строительства деревянных сооружений
                </div>
            </div>
        )}
        front={(
            <div className={styles.front}>
                <div className={styles.frontIcon}>
                    <img src={require('../../assets/icons/technologies.svg')} />
                </div>
                <div className={styles.frontTitle}>
                    Технологии<br/>
                    строительства
                </div>
            </div>
        )}
    />

export default AboutTechnologies