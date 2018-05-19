import React from 'react'
import styles from './PageMain.module.sass'

const PageMain = ({ children }) =>
    <div className={styles.container}>
        {children}
    </div>

export default PageMain