import React, { Component } from 'react'
import classNames from 'classnames'
import urlParse from 'url-parse'
import Link from '../UI/Link'
import SvgIcon from '../UI/SvgIcon'
import styles from './ArticlesLarge.module.sass'

class ArticlesLarge extends Component {
    render() {
        const { title, link, thumbnail, excerpt, tags, date } = this.props
        const objDate = new Date(date)
        const formatDate = [
            ('0' + objDate.getDate()).slice(-2),
            ('0' + objDate.getMonth()).slice(-2),
            objDate.getFullYear()
        ]

        return (
            <div className={styles.box}>
                <div className={styles.headline}>
                    <div className={styles.tags}>
                        <SvgIcon name="list" />
                        {tags}
                    </div>
                    <div className={styles.date}>
                        <SvgIcon name="schedule" />
                        {formatDate.join('.')}
                    </div>
                </div>
                <div
                    className={styles.title}
                    dangerouslySetInnerHTML={{__html:title.rendered}}
                />
                {thumbnail && (
                    <div className={styles.image}>
                        <img src={thumbnail} />
                    </div>
                )}
                {excerpt && (
                    <div
                        className={styles.intro}
                        dangerouslySetInnerHTML={{__html:excerpt.rendered}}
                    />
                )}
                <Link
                    to={urlParse(link).pathname}
                    className={classNames(styles.more, 'button-jitney')}
                >
                    <span>читать </span>полностью
                    <SvgIcon name="arrow-right" />
                </Link>
            </div>
        )
    }
}

export default ArticlesLarge