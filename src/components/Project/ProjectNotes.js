import React from 'react'
import styles from './ProjectNotes.module.sass'

const ProjectNotes = ({ notes }) =>
    <div
        className={styles.container}
        dangerouslySetInnerHTML={{__html:notes}}
    />

export default ProjectNotes