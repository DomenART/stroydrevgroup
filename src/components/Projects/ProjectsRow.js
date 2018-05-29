import React, { Component } from 'react'
import Link from 'gatsby-link'
import styles from './ProjectsRow.module.sass'
import SvgIcon from '../UI/SvgIcon'
import config from '../../config.json'

class ProjectsTile extends Component {
    render() {
        const {
            title, slug, image, price,
            old_price, area, length, width
        } = this.props
        const link = `/project/${slug}`

        return (
            <div className={styles.project}>
                <Link to={link} className={styles.image}>
                    <img
                        src={image}
                        alt={title}
                        width={480}
                        height={380}
                    />
                </Link>

                <div className={styles.info}>
                    <div className={styles.name}>
                        <Link to={link}>{title}</Link>
                    </div>

                    <div className={styles.area}>
                        площ.
                        <span>
                            {new Intl.NumberFormat('ru-RU').format(area)}
                            <span>м<sup>2</sup></span>
                        </span>
                    </div>

                    <div className={styles.params}>
                        {width} <span>м х</span> {length} <span>м</span>
                    </div>
                </div>

                <div className={styles.prices}>
                    {old_price && (
                        <div className={styles.old_price}>
                            {new Intl.NumberFormat('ru-RU').format(old_price)}&nbsp;руб.
                        </div>
                    )}
                    <div className={styles.price}>
                        {new Intl.NumberFormat('ru-RU').format(price)}
                        <SvgIcon name="ruble" />
                    </div>
                </div>

                <button className={styles.more}>
                    <SvgIcon name="info" />
                    <span>Подробнее</span>
                </button>
            </div>
        )
    }
}

export default ProjectsTile