import React from 'react'
import AboutBox from './AboutBox'
import styles from './AboutProduction.module.sass'

const AboutProduction = () =>
    <AboutBox
        back={(
            <div className={styles.back}>
                <div className={styles.backIcon}>
                    <img src={require('../../assets/own-production.svg')} />
                </div>
                <div className={styles.backTitle}>
                    Собственное<br />
                    производство
                </div>
                <div className={styles.backDesc}>
                    Позволяет нам использовать только качественный материал, снижая при этом себестоимость готового дома
                </div>
            </div>
        )}
        front={(
            <div className={styles.front}>
                <div className={styles.frontIcon}>
                    <img src={require('../../assets/own-production.svg')} />
                </div>
                <div className={styles.frontTitle}>
                    Собственное<br />
                    производство
                </div>
            </div>
        )}
    />

export default AboutProduction