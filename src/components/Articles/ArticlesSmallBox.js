import React, { Component } from 'react'
import urlParse from 'url-parse'
import AboutBox from '../About/AboutBox'
import Link from '../UI/Link'
import SvgIcon from '../UI/SvgIcon'
import styles from './ArticlesSmallBox.module.sass'

class ArticlesSmallBox extends Component {
    render() {
        const { title, link, thumbnail, tags, date } = this.props
        const objDate = new Date(date)
        const formatDate = [
            ('0' + objDate.getDate()).slice(-2),
            ('0' + objDate.getMonth()).slice(-2),
            objDate.getFullYear()
        ]

        return (
            <AboutBox
                parent={{
                    to: urlParse(link).pathname
                }}
                back={(
                    <div className={styles.back}>
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
                        <div/>
                    </div>
                )}
                front={(
                    <div className={styles.front}>
                        {thumbnail && (
                            <img
                                src={thumbnail}
                                className={styles.image}
                                data-uk-cover
                            />
                        )}
                    </div>
                )}
            />
        )
    }
}

export default ArticlesSmallBox