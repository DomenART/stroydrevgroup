import React from 'react'
import Link from 'gatsby-link'
import Share from '../UI/Share'
import Neighbors from '../UI/Neighbors'
import Print from '../UI/Print'
import styles from './ProjectHeadline.module.sass'

const ProjectHeadline = ({ neighbors }) =>
    <div className={styles.container}>
        <div className={styles.share}>
            <div className={styles.shareTitle}>
                Поделиться:
            </div>
            <Share size={32} />
        </div>
        <Print />
        <div className={styles.neighbors}>
            <Neighbors {...neighbors} />
        </div>
    </div>

export default ProjectHeadline