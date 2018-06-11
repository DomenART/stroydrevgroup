import React from 'react'
import styles from './Print.module.sass'
import SvgIcon from '../UI/SvgIcon'

const Print = () =>
    <button className={styles.print} onClick={() => window.print()}>
        <SvgIcon name="printer" />
    </button>

export default Print