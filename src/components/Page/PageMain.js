import React from 'react'
import styles from './PageMain.module.sass'

const PageMain = ({ children, style = {} }) =>
    <div className={styles.container} style={style}>
        {children}
    </div>

export default PageMain