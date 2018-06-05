import React from 'react'
import Link from 'gatsby-link'
import styles from './AboutMenu.module.sass'

const AboutMenu = ({ items }) =>
    <ul className={styles.menu}>
        {items.map(({ key, slug, title }) => (
            <li className={styles.item} key={key}>
                <Link
                    to={slug}
                    className={styles.link}
                    activeClassName={styles.link_active}
                    >
                    {title}
                </Link>
            </li>
        ))}
    </ul>

export default AboutMenu
