import React from 'react'
import styles from './AboutContent.module.sass'

const AboutContent = ({ text }) =>
    <div
        className={styles.box}
        dangerouslySetInnerHTML={{__html:text}}
    />

export default AboutContent