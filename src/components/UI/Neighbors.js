import React from 'react'
import Link from 'gatsby-link'
import styles from './Neighbors.module.sass'
import SvgIcon from '../UI/SvgIcon'

const Neighbors = ({ previous, next }) =>
    <div className={styles.neighbors}>
        <Link
            className={styles.link}
            to={previous.path}
            title={previous.title}
        >
            <SvgIcon name="small-chevron-left" /> пред.
        </Link>
        <div className={styles.border} />
        <Link
            className={styles.link}
            to={next.path}
            title={next.title}
        >
            след. <SvgIcon name="small-chevron-right" />
        </Link>
    </div>

export default Neighbors