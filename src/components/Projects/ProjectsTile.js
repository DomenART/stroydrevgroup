import React, { Component } from 'react'
import Link from 'gatsby-link'
import styles from './ProjectsTile.module.sass'
import SvgIcon from '../UI/SvgIcon'
import config from '../../config.json'

class ProjectsTile extends Component {
    render() {
        const {
            title, slug, image, price,
            old_price, area, length, width
        } = this.props
        const link = `/project/${slug}`

        const priceClassName = [styles.price]
        if (price.length > 6) {
            priceClassName.push(styles.price_small)
        }

        return (
            <div className={styles.project}>
                <Link to={link}>
                    <img
                        src={image}
                        alt={title}
                        className={styles.image}
                        width={480}
                        height={380}
                    />
                </Link>

                <div className={styles.first}>
                    <div className={styles.name}>
                        <Link to={link}>{title}</Link>
                    </div>

                    <div className={styles.info}>
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
                </div>

                <div className={styles.second}>
                    <div className={styles.prices}>
                        {old_price && (
                            <div className={styles.old_price}>
                                {new Intl.NumberFormat('ru-RU').format(old_price)}&nbsp;руб.
                            </div>
                        )}
                        <div className={priceClassName.join(' ')}>
                            {new Intl.NumberFormat('ru-RU').format(price)}
                            <SvgIcon name="ruble" />
                        </div>
                    </div>

                    <button className={styles.more}>
                        <SvgIcon name="info" />
                        Подробнее
                    </button>
                </div>
            </div>
        )
    }
}

export default ProjectsTile