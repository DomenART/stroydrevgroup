import React from 'react'
import styles from './AboutMain.module.sass'

const AboutMain = ({ children }) =>
    <div className={styles.container}>
        {children}
    </div>

export default AboutMain