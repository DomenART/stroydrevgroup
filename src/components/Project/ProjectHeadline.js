import React from 'react'
import YaShare from '../UI/YaShare'
import Neighbors from '../UI/Neighbors'
import Print from '../UI/Print'
import styles from './ProjectHeadline.module.sass'

const ProjectHeadline = ({ neighbors }) =>
    <div className={styles.container}>
        <div className={styles.share}>
            <div className={styles.shareTitle}>
                Поделиться:
            </div>
            <YaShare size="medium" />
        </div>
        <Print />
        <div className={styles.neighbors}>
            <Neighbors {...neighbors} />
        </div>
    </div>

export default ProjectHeadline