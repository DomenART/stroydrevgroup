import React from 'react'
import AboutBox from './AboutBox'
import styles from './AboutOdnoklassniki.module.sass'
import SvgIcon from '../UI/SvgIcon'

const AboutOdnoklassniki = () =>
    <AboutBox
        parent={{
            to: 'http://ok.ru'
        }}
        back={(
            <div className={styles.back}>
                <div className={styles.backIcon}>
                    <SvgIcon name="odnoklassniki" />
                </div>
                <div className={styles.backTitle}>
                    ГК “СтройДрев”<br />
                    в Одноклассниках
                </div>
            </div>
        )}
        front={(
            <div className={styles.front}>
                <div className={styles.frontIcon}>
                    <SvgIcon name="odnoklassniki" />
                </div>
            </div>
        )}
    />

export default AboutOdnoklassniki