import React from 'react'
import SvgIcon from '../UI/SvgIcon'
import styles from './LandingTasks.module.sass'

const LandingTask = ({ title }) =>
    <div className={styles.task}>
        <SvgIcon name="check-bold" className={styles.icon} />
        <div
            className={styles.text}
            dangerouslySetInnerHTML={{ __html: title }}
        />
    </div>

const LandingTasks = ({ items }) =>
    <section
        className={styles.container}
        data-uk-scrollspy="target: > div; cls: uk-animation-slide-left-small; delay: 400"
    >
        {items.map((item, index) => <LandingTask {...item} key={index} />)}
    </section>

export default LandingTasks