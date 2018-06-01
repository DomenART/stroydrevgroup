import React from 'react'
import Link from 'gatsby-link'
import styles from './AboutMenu.module.sass'

const AboutMenu = ({ items }) =>
    <div className={styles.menu}>
        {items.map(({ key, slug, title }) => (
            <Link
                to={slug}
                className={styles.item}
                activeClassName={styles.item_active}
                key={key}
                >
                {title}
            </Link>
        ))}
    </div>

export default AboutMenu
