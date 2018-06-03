import React from 'react'
import AboutBox from './AboutBox'
import styles from './AboutRewards.module.sass'
import SvgIcon from '../UI/SvgIcon'

const AboutRewards = () =>
    <AboutBox
        parent={{
            to: "/",
            title: "награды"
        }}
        back={(
            <span className={styles.back}>
                <div className={styles.backIcon}>
                    <img src={require('../../assets/icons/rewards.png')} />
                </div>
                <div className={styles.backTitle}>
                    Дипломы и награды
                </div>
            </span>
        )}
        front={(
            <div className={styles.front}>
                <div className={styles.frontIcon}>
                    <img src={require('../../assets/icons/rewards.png')} />
                </div>
            </div>
        )}
    />

export default AboutRewards