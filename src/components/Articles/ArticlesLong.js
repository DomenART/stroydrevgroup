import React, { Component } from 'react'
import classNames from 'classnames'
import urlParse from 'url-parse'
import Link from '../UI/Link'
import SvgIcon from '../UI/SvgIcon'
import styles from './ArticlesLong.module.sass'

class ArticlesLong extends Component {
    render() {
        const { title, link, thumbnail, tags, date } = this.props
        const objDate = new Date(date)
        const formatDate = [
            ('0' + objDate.getDate()).slice(-2),
            ('0' + objDate.getMonth()).slice(-2),
            objDate.getFullYear()
        ]

        return (
            <div className={classNames('uk-grid', 'uk-grid-collapse', styles.box)}>
                {thumbnail && (
                    <div className="uk-width-1-2">
                        <div className={styles.image}>
                            <img src={thumbnail} data-uk-cover />
                        </div>
                    </div>
                )}
                <div className="uk-width-expand">
                    <div className={styles.info}>
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
                        <Link
                            to={urlParse(link).pathname}
                            className={styles.title}
                            dangerouslySetInnerHTML={{__html:title.rendered}}
                        />
                        <div />
                    </div>
                </div>
            </div>
        )
    }
}

export default ArticlesLong