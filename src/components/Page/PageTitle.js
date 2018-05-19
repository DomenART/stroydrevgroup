import React from 'react'
import styles from './PageTitle.module.sass'

const PageTitle = ({ html }) =>
    <h1
        className={styles.title}
        dangerouslySetInnerHTML={{ __html: html }}
    />

export default PageTitle