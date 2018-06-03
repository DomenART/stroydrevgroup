import React from 'react'
import AboutBox from './AboutBox'
import styles from './AboutUseful.module.sass'
import SvgIcon from '../UI/SvgIcon'

const AboutUseful = () =>
    <AboutBox
        parent={{
            to: '/',
            title: 'Полезное'
        }}
        back={(
            <div className={styles.back}>
                <div className={styles.backIcon}>
                    <SvgIcon name="document" />
                    <span>полезно знать</span>
                </div>
                <div className={styles.backTitle}>
                    Достоинства и недостатки деревянных домов
                </div>
            </div>
        )}
        front={(
            <div className={styles.front}>
                <div className={styles.frontTitle}>
                    <span>Достоинства и&nbsp;недостатки</span><br />
                    <span>деревянных домов</span>
                </div>
            </div>
        )}
    />

export default AboutUseful