import React from 'react'
import Link from 'gatsby-link'
import Share from '../UI/Share'
import styles from './ProjectHeadline.module.sass'
import SvgIcon from '../UI/SvgIcon';

const ProjectHeadline = ({ neighbors }) =>
    <div className={styles.container}>
        <div className={styles.share}>
            <div className={styles.shareTitle}>
                Поделиться:
            </div>
            <Share size={32} />
        </div>
        <button className={styles.print} onClick={() => window.print()}>
            <SvgIcon name="printer" />
        </button>
        <div className={styles.neighbors}>
            <Link
                className={styles.neighborsLink}
                to={neighbors.previous.path}
                title={neighbors.previous.title}
            >
                <SvgIcon name="small-chevron-left" /> пред.
            </Link>
            <div className={styles.neighborsBorder} />
            <Link
                className={styles.neighborsLink}
                to={neighbors.next.path}
                title={neighbors.next.title}
            >
                след. <SvgIcon name="small-chevron-right" />
            </Link>
        </div>
    </div>

export default ProjectHeadline