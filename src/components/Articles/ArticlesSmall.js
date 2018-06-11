import React, { Component } from 'react'
import urlParse from 'url-parse'
import Link from '../UI/Link'
import SvgIcon from '../UI/SvgIcon'
import styles from './ArticlesSmall.module.sass'

class ArticlesSmall extends Component {
    render() {
        const { title, link, color, tags, date } = this.props
        const objDate = new Date(date)
        const formatDate = [
            ('0' + objDate.getDate()).slice(-2),
            ('0' + objDate.getMonth()).slice(-2),
            objDate.getFullYear()
        ]
        const cls = [styles.box]
        if (color && styles[`box_${color}`]) {
            cls.push(styles[`box_${color}`])
        }

        return (
            <div className={cls.join(' ')}>
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
                <div/>
            </div>
        )
    }
}

export default ArticlesSmall