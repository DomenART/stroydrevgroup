import React from 'react'
import Link from 'gatsby-link'
import SvgIcon from '../UI/SvgIcon'
import styles from './Breadcrumbs.module.sass'

const Breadcrumbs = ({ items }) =>
    <ul className={styles.breadcrumbs}>
        {items.map(row => (
            <li className={styles.item} key={row.id}>
                {!row.current ? (
                    <Link
                        to={row.uri}
                        className={styles.link}
                        dangerouslySetInnerHTML={{__html: row.title}}
                    />
                ) : (
                    <span
                        className={styles.anchor}
                        dangerouslySetInnerHTML={{__html: row.title}}
                    />
                )}
            </li>
        ))}
    </ul>

export default Breadcrumbs
