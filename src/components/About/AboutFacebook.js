import React from 'react'
import AboutBox from './AboutBox'
import styles from './AboutFacebook.module.sass'
import SvgIcon from '../UI/SvgIcon'

const AboutFacebook = ({ rect = false }) =>
    <AboutBox
        rect={rect}
        parent={{
            to: 'http://facebook.ru',
            target: '_blank'
        }}
        back={(
            <div className={styles.back}>
                <div className={styles.backIcon}>
                    <SvgIcon name="facebook" />
                </div>
                <div className={styles.backTitle}>
                    ГК “СтройДрев”<br />
                    на Facebook
                </div>
            </div>
        )}
        front={(
            <div className={styles.front}>
                <div className={styles.frontIcon}>
                    <SvgIcon name="facebook" />
                </div>
            </div>
        )}
    />

export default AboutFacebook