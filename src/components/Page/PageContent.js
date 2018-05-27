import React from 'react'
import styles from './PageContent.module.sass'

const PageContent = ({ children }) =>
    <div className={styles.container}>
        {children}
    </div>

export default PageContent