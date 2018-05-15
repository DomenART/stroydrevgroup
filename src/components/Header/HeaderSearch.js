import React from 'react'
import styles from './HeaderSearch.module.sass'
import SvgIcon from '../UI/SvgIcon'

export default () =>
    <form className={styles.form}>
        <input type="text" placeholder="Поиск по сайту" className={styles.input} />
        <button className={styles.button}>
            <SvgIcon name="search" />
        </button>
    </form>