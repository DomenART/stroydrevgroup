import React from 'react'
import styles from './ProjectMain.module.sass'

const ProjectMain = ({ children }) =>
    <div className={styles.container}>
        {children}
    </div>

export default ProjectMain