import React from 'react'
import styles from './FlexibleText.module.sass'

export default ({ text }) =>
    <div
        className={styles.box}
        dangerouslySetInnerHTML={{__html: text}}
    />