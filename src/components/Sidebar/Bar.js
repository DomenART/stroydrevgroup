import React from 'react'
import Link from 'gatsby-link'
import SvgIcon from '../UI/SvgIcon'
import styles from './Bar.module.sass'

const Bar = ({ copyright, isDrawerOpen, toggle }) => {
    let toggleCls = [styles.toggle]
    if (isDrawerOpen) {
        toggleCls.push(styles.toggle_close)
    }

    return (
        <div className={styles.bar}>
            <button
                className={toggleCls.join(' ')}
                onClick={toggle}
            ><span /></button>
            <button className={styles.callback}>
                <SvgIcon name="telephone" />
            </button>
            <button
                className={styles.calc}
                data-uk-toggle="target: #Calculation"
            >
                <SvgIcon name="calculator" />
            </button>
            <div className={styles.dashes} />
            <div className={styles.copyright}>
                {copyright}
            </div>
        </div>
    )
}

export default Bar
