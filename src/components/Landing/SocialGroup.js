import React from 'react'
import styles from './SocialGroup.module.sass'

const SocialGroup = ({ title, link, icon, children }) =>
    <div className={styles.box}>
        <div className={styles.head}>
            <div className={styles.title}>
                {icon}
                {title}
            </div>
            <a href={link} className={`${styles.subscribe} button-jitney`}>
                подписаться
            </a>
        </div>
        <div className={styles.body}>
            {children}
        </div>
    </div>

export default SocialGroup
