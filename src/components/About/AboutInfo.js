import React from 'react'
import styles from './AboutInfo.module.sass'
import SvgIcon from '../UI/SvgIcon';

const AboutInfo = ({ title, text }) =>
    <div className={styles.box}>
        <div className={styles.info}>
            <div className={styles.icon}>
                <SvgIcon name="info" />
            </div>
            <h5
                className={styles.title}
                dangerouslySetInnerHTML={{__html:title}}
            />
            <h6
                className={styles.text}
                dangerouslySetInnerHTML={{__html:text}}
            />
        </div>
    </div>

export default AboutInfo