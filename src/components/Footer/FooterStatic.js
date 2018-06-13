import React, { Component } from 'react'
import Link from 'gatsby-link'
import styles from './FooterStatic.module.sass'
import SvgIcon from '../UI/SvgIcon'

const FooterStatic = ({ counters }) => {
    return (
        <section className={styles.container}>
            <div
                className={styles.counters}
                dangerouslySetInnerHTML={{__html: counters}}
            />
            <div>
                <Link to="/sitemap" className={styles.sitemap}>Карта сайта</Link>
            </div>
            <div>
                <a
                    href="http://domenart-studio.ru"
                    className={styles.creator}
                    target="_blank"
                />
            </div>
        </section>
    )
}

export default FooterStatic
